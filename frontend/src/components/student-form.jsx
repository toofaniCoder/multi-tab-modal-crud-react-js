import { Stack, Input } from '@mui/joy';
import { useFormContext, Controller } from 'react-hook-form';
import FileUploader from './file-uploader';

const StudentForm = () => {
  const { control } = useFormContext();
  return (
    <Stack sx={{ my: 2 }} spacing={2}>
      <Controller
        control={control}
        name="student.name"
        render={({ field }) => (
          <Input {...field} placeholder="enter your full name" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="student.email"
        render={({ field }) => (
          <Input {...field} placeholder="enter your email address" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="student.standard"
        type="number"
        render={({ field }) => (
          <Input {...field} placeholder="enter your class" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="student.section"
        render={({ field }) => (
          <Input {...field} placeholder="enter your section name" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="student.address"
        render={({ field }) => (
          <Input {...field} placeholder="enter your full address" size="lg" />
        )}
      />
      <FileUploader
        name="student.profile"
        label="Upload Your profile Picture"
      />
      <FileUploader name="student.aadhar" label="Upload Your Aadhar Card" />
      <FileUploader
        name="student.transfer_certificate"
        label="Upload Your Transfer Certificate"
      />
    </Stack>
  );
};

export default StudentForm;
