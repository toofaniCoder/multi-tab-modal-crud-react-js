import { Outlet } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Layout = () => {
  const methods = useForm({
    defaultValues: {
      student: {
        name: '',
        email: '',
        standard: '',
        section: '',
        address: '',
        profile: '',
        aadhar: '',
        transfer_certificate: '',
      },
      teacher: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        address: '',
        profile: '',
        secondary_school_certificate: '',
        higher_secondary_certificate: '',
      },
      staff: {
        name: '',
        email: '',
        phone: '',
        address: '',
        profile: '',
        aadhar: '',
      },
      dirver: {
        name: '',
        email: '',
        phone: '',
        address: '',
        profile: '',
        aadhar: '',
        vehicle_licence: '',
      },
    },
  });
  return (
    <FormProvider {...methods}>
      <DevTool control={methods.control} />
      <Outlet />
    </FormProvider>
  );
};

export default Layout;
