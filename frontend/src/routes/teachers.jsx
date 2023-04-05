import { Grid } from '@mui/joy';
import { useLoaderData } from 'react-router-dom';
import CardItem from '../components/card-item';

const Teachers = () => {
  const teachers = useLoaderData();
  return (
    <Grid container>
      {teachers.data.map(({ id, attributes }) => (
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
  );
};

export default Teachers;
