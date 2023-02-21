import TeatherForm from "./TeatherForm";

export default function TeatherEdit() {
  return (
    <>
      <h3>Edit Teather</h3>
      <TeatherForm
        model={{ name: "Mayorca" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
