import { Box, Button, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.svg';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img src={hero} style={{ height: '40vmax' }} />
      <Button
        component={Link}
        to="dashboard?tab=students"
        color="neutral"
        size="lg"
      >
        go to dashboard
      </Button>
    </Box>
  );
};

export default Home;
