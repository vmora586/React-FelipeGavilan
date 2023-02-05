import Button from "../utilities/Button";
import { useNavigate } from "react-router-dom";

export default function GendreIndex() {
  const navigate = useNavigate();
  return (
    <>
      <h3>Gendres Index</h3>
      <Button type='button' onClick={() => navigate("/gendres/create")}>
        Add
      </Button>
    </>
  );
}
