import TheaterForm from "./TheaterForm";

export default function TheaterEdit() {
  return (
    <>
      <h3>Edit Teather</h3>
      <TheaterForm
        model={{ name: "Mayorca", latitude: 6.339397, longitude: -75.544203 }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
