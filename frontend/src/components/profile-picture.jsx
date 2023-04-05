import { AspectRatio } from '@mui/joy';
import axios from 'axios';

const ProfilePicture = ({ profile }) => {
  return (
    <AspectRatio sx={{ mt: 1, mb: 2 }} minHeight={250}>
      <img src={`${axios.defaults.baseURL}${profile.data?.attributes.url}`} />
    </AspectRatio>
  );
};

export default ProfilePicture;
