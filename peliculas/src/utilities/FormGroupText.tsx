import { ErrorMessage, Field } from "formik";
import ShowErrorField from "./ShowErrorField";

export default function FormGroupText(props: formGroupTextProps) {
  return (
    <div className='form-group'>
      {props.label ? <label htmlFor='name'>{props.label}</label> : null}
      <Field name={props.fieldName} className='form-control' />
      <ErrorMessage name='name'>
        {(msj) => <ShowErrorField message={msj}></ShowErrorField>}
      </ErrorMessage>
    </div>
  );
}

interface formGroupTextProps {
  fieldName: string;
  label?: string;
  placeHolder?: string;
}
