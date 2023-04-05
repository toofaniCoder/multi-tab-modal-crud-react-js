import { Grid } from '@mui/joy';
import { useLoaderData } from 'react-router-dom';
import CardItem from '../components/card-item';

const Staffs = () => {
  const staffs = useLoaderData();
  return (
    <Grid container>
      {staffs.data.map(({ id, attributes }) => (
        <CardItem
          id={id}
          key={id}
          attributes={attributes}
          files={[attributes.profile, attributes.aadhar]}
        />
      ))}
    </Grid>
  );
};

export default Staffs;
