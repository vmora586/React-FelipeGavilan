import TeatherForm from "./TeatherForm";

export default function TeatherEdit() {
  return (
    <>
      <h3>Edit Teather</h3>
      <TeatherForm
        model={{ name: "Mayorca" , latitude : 6.339397, longitude:-75.544203 }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
