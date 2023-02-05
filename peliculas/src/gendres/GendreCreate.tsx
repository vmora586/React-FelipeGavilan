import GendresForm from "./GendresForm";

export default function GendreCreate() {
  return (
    <>
      <h3>Create Gender</h3>
      <GendresForm
        model={{ name: "" }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 100));
          console.log(values);
        }}></GendresForm>
    </>
  );
}
