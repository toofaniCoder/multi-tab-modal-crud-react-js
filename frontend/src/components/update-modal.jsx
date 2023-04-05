import pluralize from 'pluralize';
import { useEffect } from 'react';
import { Modal, ModalDialog, ModalClose, Typography, Button } from '@mui/joy';
import {
  useNavigate,
  useSearchParams,
  useRevalidator,
  useLoaderData,
  useParams,
} from 'react-router-dom';
import { Form, useFormContext } from 'react-hook-form';
import axios from 'axios';
import _ from 'lodash';

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

const UpdateModal = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const params = useParams();
  console.log(data);
  const revalidator = useRevalidator();
  const [searchParams, setSearchParams] = useSearchParams();
  const { control, reset, formState } = useFormContext();
  const singular = pluralize.singular(searchParams.get('tab'));

  useEffect(() => {
    if (data) {
      reset({
        [singular]: data.data.attributes,
      });
    }
  }, []);

  return (
    <Modal
      open={true}
      onClose={() => {
        reset({ student: formState.defaultValues[singular] });
        navigate(-1);
      }}
    >
      <ModalDialog sx={{ width: 800 }}>
        <ModalClose />
        <Typography level="h4">Edit {singular} Profile</Typography>
        <Form
          control={control}
          method="put"
          action={`${axios.defaults.baseURL}/api/${searchParams.get('tab')}/${
            params.id
          }`}
          fetcher={async (action, { method, values }) => {
            const formData = new FormData();
            const form_values = _.omitBy(values[singular], (item) => item.data);
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
            reset({ student: formState.defaultValues[singular] });
            navigate(-1, { replace: true });
          }}
        >
          {forms[singular]}
          <Button type="submit" size="lg" variant="solid" color="warning">
            Update {singular}
          </Button>
        </Form>
      </ModalDialog>
    </Modal>
  );
};

export default UpdateModal;
