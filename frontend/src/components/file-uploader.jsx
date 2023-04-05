import { Button } from '@mui/joy';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useFormContext } from 'react-hook-form';

const FileUploader = ({ name, label }) => {
  const { watch, register } = useFormContext();
  const file = watch(name);
  return (
    <Button
      sx={{ justifyContent: 'flex-start' }}
      startDecorator={<UploadFileIcon />}
      variant="outlined"
      color="neutral"
      size="lg"
      component="label"
    >
      {file?.data?.attributes
        ? file.data.attributes.name
        : file?.[0]?.size > 0
        ? file[0].name
        : label}
      {/* <input {...register('student.profile')} type="file" hidden /> */}
      <input {...register(name)} type="file" hidden />
    </Button>
  );
};

export default FileUploader;
