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
      },
      teacher: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        address: '',
      },
      staff: {
        name: '',
        email: '',
        phone: '',
        address: '',
      },
      dirver: {
        name: '',
        email: '',
        phone: '',
        address: '',
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
