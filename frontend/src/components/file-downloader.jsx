import { Typography, List, ListItemButton, ListItemDecorator } from '@mui/joy';
import axios from 'axios';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import download from 'downloadjs';

const FileDownloader = ({ files }) => {
  return (
    <List sx={{ p: 0, overflow: 'hidden' }} variant="soft">
      {files.map((file, index) => (
        <ListItemButton
          key={index}
          onClick={() =>
            download(`${axios.defaults.baseURL}${file.data?.attributes.url}`)
          }
        >
          <ListItemDecorator>
            <DownloadForOfflineIcon />
          </ListItemDecorator>
          <Typography
            variant="body2"
            sx={{
              width: '90%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              direction: 'rtl',
            }}
          >
            {file.data?.attributes.name}
          </Typography>
        </ListItemButton>
      ))}
    </List>
  );
};

export default FileDownloader;
