//import { useParams } from "react-router-dom";
import GendresForm from "./GendresForm";

export default function GendreEdit() {
  //const { id }: any = useParams();
  return (
    <>
      <h3>Gendre Edit</h3>
      <GendresForm
        model={{ name: "Victor" }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 100));
          console.log(values);
        }}
      />
    </>
  );
}
