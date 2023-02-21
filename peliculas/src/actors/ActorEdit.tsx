import ActorsForm from "./ActorsForm";

export default function ActorEdit() {
  return (
    <>
      <h3>Edit Actor</h3>
      <ActorsForm
        model={{
          name: "Tom Cruise",
          dateOfBirth: new Date("1996-06-01T00:00:00"),
          photoUri:
            "https://www.californiamuseum.org/sites/main/files/imagecache/lightbox/main-images/robertdowneyjr_cahalloffameinductee.png",
          biography: "#Test tittle, ***test strong***",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 2000));
          console.log(values);
        }}
      />
    </>
  );
}
