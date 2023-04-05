import { Stack, Input } from '@mui/joy';
import { useFormContext, Controller } from 'react-hook-form';
import FileUploader from './file-uploader';

const TeacherForm = () => {
  const { control } = useFormContext();
  return (
    <Stack sx={{ my: 2 }} spacing={2}>
      <Controller
        control={control}
        name="teacher.name"
        render={({ field }) => (
          <Input {...field} placeholder="enter your full name" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="teacher.email"
        render={({ field }) => (
          <Input {...field} placeholder="enter your email address" size="lg" />
        )}
      />

      <Controller
        control={control}
        name="teacher.subject"
        render={({ field }) => (
          <Input {...field} placeholder="enter your subject name" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="teacher.phone"
        render={({ field }) => (
          <Input {...field} placeholder="enter your phone number" size="lg" />
        )}
      />
      <Controller
        control={control}
        name="teacher.address"
        render={({ field }) => (
          <Input {...field} placeholder="enter your full address" size="lg" />
        )}
      />
      <FileUploader
        name="teacher.profile"
        label="Upload Your profile Picture"
      />
      <FileUploader
        name="teacher.secondary_school_certificate"
        label="Upload Your Secondary School Certificate"
      />
      <FileUploader
        name="teacher.higher_secondary_certificate"
        label="Upload Your Higher Secondary Certificate"
      />
    </Stack>
  );
};

export default TeacherForm;
