import { Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../utilities/Button";
import FormGroupText from "../utilities/FormGroupText";
import * as Yup from "yup";
import { IGendreCreationDto } from "../models/gendres.model";

export default function GendresForm(props: gendreFormProps) {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("This field is required")
          .firstLetterUpperCase(),
      })}>
      {(formickProps) => (
        <Form>
          <div className='form-group'>
            <FormGroupText name='name' label='Name'></FormGroupText>
          </div>
          <Button disabled={formickProps.isSubmitting} type='submit'>
            {formickProps.isSubmitting ? "Wait" : "Save"}
          </Button>
          <Button
            onClick={() => navigate("/gendres")}
            className='btn btn-secondary'>
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
}

interface gendreFormProps {
  model: IGendreCreationDto;
  onSubmit(
    values: IGendreCreationDto,
    actions: FormikHelpers<IGendreCreationDto>
  ): void;
}
