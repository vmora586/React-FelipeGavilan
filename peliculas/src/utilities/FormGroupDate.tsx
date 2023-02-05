import { useFormikContext } from "formik";
import ShowErrorField from "./ShowErrorField";

export default function FormGroupDate(props: FormGroupDateProps) {
  const { values, validateForm, touched, errors } = useFormikContext<any>();
  return (
    <div className='form-group'>
      <label htmlFor={props.fieldName}>{props.fieldLabel}</label>
      <input
        type='date'
        className='form-control'
        id={props.fieldName}
        name={props.fieldName}
        defaultValue={values[props.fieldName]?.toLocaleDateString("en-CA")}
        onChange={(e) => {
          const displayedDate = new Date(e.currentTarget.value + "T00:00:00");
          values[props.fieldName] = displayedDate;
          validateForm();
        }}
      />
      {touched[props.fieldName] && errors[props.fieldName] ? (
        <ShowErrorField message={errors[props.fieldName]?.toString()} />
      ) : null}
    </div>
  );
}

interface FormGroupDateProps {
  fieldName: string;
  fieldLabel: string;
}
