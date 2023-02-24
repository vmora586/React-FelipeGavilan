import { Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../utilities/Button";
import FormGroupText from "../utilities/FormGroupText";
import { actorCreationDto } from "../models/actors.model";
import * as Yup from "yup";
import FormGroupDate from "../utilities/FormGroupDate";
import FormGroupImage from "../utilities/FormGroupImage";
import FormGroupMarkdown from "../utilities/FormGroupMarkdown";

export default function ActorsForm(props: actorsFormProps) {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("This field is required")
          .firstLetterUpperCase(),
        dateOfBirth: Yup.date().nullable().required("This field is required"),
      })}>
      {(formikProps) => (
        <Form>
          <div className='form-group'>
            <FormGroupText name='name' label='Name' />
            <FormGroupDate name='dateOfBirth' label='Date Of Birth' />
            <FormGroupImage
              field='photo'
              label='photo'
              imageUri={props.model.photoUri}
            />
            <FormGroupMarkdown field={"biography"} label={"Biography"} />
          </div>
          <Button type='submit' disabled={formikProps.isSubmitting}>
            Save
          </Button>
          <Button
            type='button'
            className='btn btn-secondary'
            onClick={() => navigate("/actors")}>
            Return
          </Button>
        </Form>
      )}
    </Formik>
  );
}

interface actorsFormProps {
  model: actorCreationDto;
  onSubmit(
    values: actorCreationDto,
    actions: FormikHelpers<actorCreationDto>
  ): void;
}
