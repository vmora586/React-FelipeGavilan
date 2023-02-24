import { useFormikContext } from "formik";
import ShowErrorField from "./ShowErrorField";

export default function FormGroupDate(props: FormGroupDateProps) {
  const { values, validateForm, touched, errors } = useFormikContext<any>();
  return (
    <div className='form-group'>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type='date'
        className='form-control'
        id={props.name}
        name={props.name}
        defaultValue={values[props.name]?.toLocaleDateString("en-CA")}
        onChange={(e) => {
          const displayedDate = new Date(e.currentTarget.value + "T00:00:00");
          values[props.name] = displayedDate;
          validateForm();
        }}
      />
      {touched[props.name] && errors[props.name] ? (
        <ShowErrorField message={errors[props.name]?.toString()} />
      ) : null}
    </div>
  );
}

interface FormGroupDateProps {
  name: string;
  label: string;
}
