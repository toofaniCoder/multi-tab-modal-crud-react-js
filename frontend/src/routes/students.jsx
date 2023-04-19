import { Grid } from '@mui/joy';
import { useAsyncValue } from 'react-router-dom';
import CardItem from '../components/card-item';

const Students = () => {
  const students = useAsyncValue();
  return (
    <Grid spacing={2} container>
      {students.data.data.map(({ id, attributes }) => (
        <CardItem
          id={id}
          key={id}
          attributes={attributes}
          files={[attributes.aadhar, attributes.transfer_certificate]}
        />
      ))}
    </Grid>
  );
};

export default Students;
