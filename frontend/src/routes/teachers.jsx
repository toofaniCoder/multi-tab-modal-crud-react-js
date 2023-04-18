import React from 'react';
import { Box, Grid, LinearProgress } from '@mui/joy';
import { useLoaderData, Await } from 'react-router-dom';
import CardItem from '../components/card-item';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Teachers = () => {
  const data = useLoaderData();
  return (
    <React.Suspense fallback={<LinearProgress thickness={8} />}>
      <Await
        resolve={delay(2000).then(() => data.teachers)}
        errorElement={<p>Error!</p>}
      >
        {(response) => {
          return (
            <Box sx={{ p: 2 }}>
              <Grid container>
                {response.data.data.map(({ id, attributes }) => (
                  <CardItem
                    id={id}
                    key={id}
                    attributes={attributes}
                    files={[
                      attributes.secondary_school_certificate,
                      attributes.higher_secondary_certificate,
                    ]}
                  />
                ))}
              </Grid>
            </Box>
          );
        }}
      </Await>
    </React.Suspense>
  );
};

export default Teachers;
