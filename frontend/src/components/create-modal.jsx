import pluralize from 'pluralize';
import { useEffect } from 'react';
import { Modal, ModalDialog, ModalClose, Typography, Button } from '@mui/joy';
import { useNavigate, useSearchParams, useRevalidator } from 'react-router-dom';
import { Form, useFormContext } from 'react-hook-form';
import axios from 'axios';

import StudentForm from './student-form';
import TeacherForm from './teacher-form';
import StaffForm from './staff-form';
import DriverForm from './driver-form';

const forms = {
  student: <StudentForm />,
  teacher: <TeacherForm />,
  staff: <StaffForm />,
  driver: <DriverForm />,
};

const CreateModal = () => {
  const navigate = useNavigate();
  const revalidator = useRevalidator();
  const [searchParams, setSearchParams] = useSearchParams();
  const { control, reset, formState, resetField } = useFormContext();
  const singular = pluralize.singular(searchParams.get('tab'));

  return (
    <Modal
      open={true}
      onClose={() => {
        for (const property in formState.defaultValues[singular]) {
          resetField(`${singular}.${property}`);
        }
        navigate(-1);
      }}
    >
      <ModalDialog sx={{ width: 800 }}>
        <ModalClose />
        <Typography level="h4">Create {singular} Profile</Typography>
        <Form
          control={control}
          method="post"
          action={`${axios.defaults.baseURL}/api/${searchParams.get('tab')}`}
          fetcher={async (action, { method, values }) => {
            const formData = new FormData();
            const form_values = values[singular];
            const data = {};
            for (const property in form_values) {
              if (
                form_values[property].constructor
                  .toString()
                  .includes('FileList')
              ) {
                formData.append(`files.${property}`, form_values[property][0]);
              } else {
                data[property] = form_values[property];
              }
            }

            formData.append('data', JSON.stringify(data));

            const result = await axios({
              method,
              url: action,
              data: formData,
            });
            revalidator.revalidate();
            // reset({ student: formState.defaultValues[singular] });
            for (const property in form_values) {
              resetField(`${singular}.${property}`);
            }
            navigate(-1, { replace: true });
          }}
        >
          {forms[singular]}
          <Button type="submit" size="lg" variant="solid" color="primary">
            Create new {singular}
          </Button>
        </Form>
      </ModalDialog>
    </Modal>
  );
};

export default CreateModal;
