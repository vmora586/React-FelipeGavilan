import { useNavigate } from "react-router-dom";
import Button from "../utilities/Button";

export default function MovieIndex() {
    const navigate = useNavigate();
    return (
        <>
            <h3>Movie Index</h3>
            <Button className="btn btn-primary" onClick={() => navigate('/movies/create')}>
                Add
            </Button>
        </>
    )
}