import { Grid } from '@mui/joy';
import { useLoaderData } from 'react-router-dom';
import CardItem from '../components/card-item';

const Drivers = () => {
  const drivers = useLoaderData();
  return (
    <Grid container>
      {drivers.data.map(({ id, attributes }) => (
        <CardItem
          id={id}
          key={id}
          attributes={attributes}
          files={[attributes.vehicle_licence, attributes.aadhar]}
        />
      ))}
    </Grid>
  );
};

export default Drivers;
