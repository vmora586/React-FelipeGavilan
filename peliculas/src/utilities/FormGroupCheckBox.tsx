import { Field } from "formik";

export default function FormGroupCheckBox(props: IFormGroupCheckBox) {
    return (<div className="form-group form-check">
        <Field className="form-check-input" id={props.field} name={props.field} type="checkbox" />
        <label htmlFor={props.field}>{props.field}</label>
    </div>)
}

export interface IFormGroupCheckBox {
    label: string;
    field: string;
}