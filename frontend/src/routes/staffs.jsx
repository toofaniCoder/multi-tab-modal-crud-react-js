import React from 'react';
import { Grid, LinearProgress, Box } from '@mui/joy';
import { useLoaderData, Await } from 'react-router-dom';
import CardItem from '../components/card-item';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Staffs = () => {
  const data = useLoaderData();
  return (
    <React.Suspense fallback={<LinearProgress thickness={8} />}>
      <Await
        resolve={delay(2000).then(() => data.staffs)}
        errorElement={<p>Error!</p>}
      >
        {(response) => (
          <Box sx={{ p: 2 }}>
            <Grid container>
              {response.data.data.map(({ id, attributes }) => (
                <CardItem
                  id={id}
                  key={id}
                  attributes={attributes}
                  files={[attributes.profile, attributes.aadhar]}
                />
              ))}
            </Grid>
          </Box>
        )}
      </Await>
    </React.Suspense>
  );
};

export default Staffs;
