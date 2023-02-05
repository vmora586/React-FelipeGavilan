import { useNavigate } from "react-router-dom";
import Button from "../utilities/Button";

export default function TeatherCreate() {
  const navigate = useNavigate();
  return (
    <>
      <h3>Create Teather</h3>
      <Button onClick={() => navigate("/teathers")}>Save</Button>
    </>
  );
}
