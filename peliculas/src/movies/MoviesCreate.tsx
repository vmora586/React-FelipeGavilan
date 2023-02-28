import { IGendreDto } from "../models/gendres.model";
import MoviesForm from "./MoviesForm";

export default function MoviesCreate() {
  const gendres: IGendreDto[] = [
    { id: 1, name: "action" },
    { id: 2, name: "romance" },
    { id: 3, name: "comedy" },
  ];
  return (
    <MoviesForm
      unSelectedGendres={gendres}
      selectedGendres={[]}
      model={{ title: "", onTheaters: false, trailer: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  );
}
