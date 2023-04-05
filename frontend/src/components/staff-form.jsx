import { Stack, Input } from '@mui/joy';
import { useFormContext, Controller } from 'react-hook-form';
import FileUploader from './file-uploader';

const StaffForm = () => {
  const { control } = useFormContext();
  return (
    <Stack sx={{ my: 2 }} spacing={2}>
      <Controller
        control={control}
        name="staff.name"
        render={({ field }) => (
          <Input {...field} placeholder="enter your full name" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="staff.email"
        render={({ field }) => (
          <Input {...field} placeholder="enter your email address" size="lg" />
        )}
      />

      <Controller
        control={control}
        name="staff.phone"
        render={({ field }) => (
          <Input {...field} placeholder="enter your phone number" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="staff.address"
        render={({ field }) => (
          <Input {...field} placeholder="enter your full address" size="lg" />
        )}
      />
      <FileUploader name="staff.profile" label="Upload Your profile Picture" />
      <FileUploader
        name="staff.aadhar"
        label="Upload Your Secondary Aadhar Document"
      />
    </Stack>
  );
};

export default StaffForm;
