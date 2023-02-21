import { FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../utilities/Button";
import TeatherForm from "./TeatherForm";

export default function TeatherCreate() {
  return (
    <>
      <h3>Create Teather</h3>
      <TeatherForm
        model={{ name: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
