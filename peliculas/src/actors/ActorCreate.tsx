import ActorsForm from "./ActorsForm";

export default function ActorCreate() {
  return (
    <>
      <h3>Create Actor</h3>
      <ActorsForm
        model={{ name: "", dateOfBirth: undefined }}
        onSubmit={(data) => console.log(data)}></ActorsForm>
    </>
  );
}
