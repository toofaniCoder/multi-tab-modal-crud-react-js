import { Grid, Card, Typography, IconButton, Stack, Box } from '@mui/joy';
import axios from 'axios';
import ProfilePicture from '../components/profile-picture';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloader from '../components/file-downloader';

import {
  Link,
  useLocation,
  useSearchParams,
  useRevalidator,
} from 'react-router-dom';
import { Form, useFormContext } from 'react-hook-form';

const CardItem = ({ id, attributes, files }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const revalidator = useRevalidator();
  const location = useLocation();
  const { control } = useFormContext();
  console.log(id);
  return (
    <Grid xs={12} sm={6} md={3} xl={2}>
      <Card variant="outlined">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography level="h5">{attributes.name}</Typography>
            <Typography level="body2">{attributes.address}</Typography>
          </Box>
          <Stack spacing={0.7} direction="row">
            <IconButton
              component={Link}
              to={`${id}/edit${location.search}`}
              color="success"
            >
              <EditIcon />
            </IconButton>

            <Form
              control={control}
              method="delete"
              onSuccess={() => {
                revalidator.revalidate();
              }}
              action={`${axios.defaults.baseURL}/api/${searchParams.get(
                'tab'
              )}/${id}`}
            >
              <IconButton type="submit" variant="solid" color="danger">
                <DeleteIcon />
              </IconButton>
            </Form>
          </Stack>
        </Stack>
        <ProfilePicture profile={attributes.profile} />
        <FileDownloader files={files} />
      </Card>
    </Grid>
  );
};

export default CardItem;
