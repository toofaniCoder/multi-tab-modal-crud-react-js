import { Stack, Input } from '@mui/joy';
import { useFormContext, Controller } from 'react-hook-form';
import FileUploader from './file-uploader';

const DriverForm = () => {
  const { control } = useFormContext();
  return (
    <Stack sx={{ my: 2 }} spacing={2}>
      <Controller
        control={control}
        name="driver.name"
        render={({ field }) => (
          <Input {...field} placeholder="enter your full name" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="driver.email"
        render={({ field }) => (
          <Input {...field} placeholder="enter your email address" size="lg" />
        )}
      />

      <Controller
        control={control}
        name="driver.phone"
        render={({ field }) => (
          <Input {...field} placeholder="enter your phone number" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="driver.address"
        render={({ field }) => (
          <Input {...field} placeholder="enter your full address" size="lg" />
        )}
      />
      <FileUploader name="driver.profile" label="Upload Your profile Picture" />
      <FileUploader
        name="driver.aadhar"
        label="Upload Your Secondary Aadhar Document"
      />
      <FileUploader
        name="driver.vehicle_licence"
        label="Upload Your Vehicle Licence Document"
      />
    </Stack>
  );
};

export default DriverForm;
