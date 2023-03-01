import TeatherForm from "./TheaterForm";

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
