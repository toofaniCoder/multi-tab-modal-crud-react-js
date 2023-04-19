import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssVarsProvider, CssBaseline, GlobalStyles } from '@mui/joy';
import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';

axios.defaults.baseURL = 'http://localhost:1337';
// /api/students?populate=*

// import font
import '@fontsource/public-sans';

import Home from './routes/home';
import Layout from './routes/layout';
import Dashboard from './routes/dashboard';
import CreateModal from './components/create-modal';
import UpdateModal from './components/update-modal';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: async ({ request }) => {
          // await delay(5000);
          const query = queryString.parseUrl(request.url).query;
          const resultPromise = axios({
            method: request.method,
            url: `/api/${query.tab}?populate=*`,
          });
          return defer({
            dashboardPromise: resultPromise,
          });
        },
        children: [
          {
            path: 'create',
            element: <CreateModal />,
          },
          {
            path: ':id/edit',
            element: <UpdateModal />,
            loader: async ({ request, params }) => {
              const query = queryString.parseUrl(request.url).query;
              const result = await axios({
                method: request.method,
                url: `/api/${query.tab}/${params.id}?populate=*`,
              });
              return result.data;
            },
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CssVarsProvider defaultMode="light">
    <CssBaseline />
    <GlobalStyles />
    <RouterProvider router={router} />
  </CssVarsProvider>
);
