import TheaterForm from "./TheaterForm";

export default function TheaterCreate() {
  return (
    <>
      <h3>Create Teather</h3>
      <TheaterForm
        model={{ name: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
