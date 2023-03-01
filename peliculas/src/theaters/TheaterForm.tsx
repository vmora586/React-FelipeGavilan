import { teatherCreationDto } from "../models/teathers.model";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import FormGroupText from "../utilities/FormGroupText";
import Button from "../utilities/Button";
import { useNavigate } from "react-router-dom";
import FormMap from "../utilities/FormMap";
import { coordinateDto } from "../models/coordinate.model";

export default function TeatherForm(props: TheaterFormProps) {
  const navigate = useNavigate();

  function formatCoordinates():coordinateDto[] | undefined {
    if(props.model.latitude && props.model.longitude){
       const resp : coordinateDto ={ lat: props.model.latitude, long: props.model.longitude};
       return [resp];
    }
    return undefined;
  }
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("This field is required")
          .firstLetterUpperCase(),
      })}>
      {(formikProps) => (
        <Form>
          <FormGroupText label='name' name='name' />
          <div style={{ marginBottom: "1rem" }}>
            <FormMap latitudeField="latitude" longitudeField="longitude" coordinates={formatCoordinates()!}/>
          </div>
          <Button disabled={formikProps.isSubmitting} type='submit'>
            Save
          </Button>
          <Button
            type='button'
            className='btn btn-secondary'
            onClick={() => navigate("/teathers")}>
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export interface TheaterFormProps {
  model: teatherCreationDto;
  onSubmit(
    values: teatherCreationDto,
    actions: FormikHelpers<teatherCreationDto>
  ): void;
}
