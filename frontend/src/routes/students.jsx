import React from 'react';
import { Grid, LinearProgress, Box } from '@mui/joy';
import { useLoaderData, Await } from 'react-router-dom';
import CardItem from '../components/card-item';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Students = () => {
  const data = useLoaderData();
  return (
    <React.Suspense fallback={<LinearProgress thickness={8} />}>
      <Await
        resolve={delay(3000).then(() => data.students)}
        errorElement={<p>Error!</p>}
      >
        {(response) => {
          return (
            <Box sx={{ p: 2 }}>
              <Grid spacing={2} container>
                {response.data.data.map(({ id, attributes }) => (
                  <CardItem
                    id={id}
                    key={id}
                    attributes={attributes}
                    files={[attributes.aadhar, attributes.transfer_certificate]}
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

export default Students;
