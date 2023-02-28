import { IGendreDto } from "../models/gendres.model";
import MoviesForm from "./MoviesForm";

export default function MoviesEdit() {
  const movieGendres: IGendreDto[] = [{ id: 1, name: "action" }];

  const availableGendres: IGendreDto[] = [
    { id: 2, name: "romance" },
    { id: 3, name: "comedy" },
  ];
  return (
    <MoviesForm
      selectedGendres={movieGendres}
      unSelectedGendres={availableGendres}
      model={{ onTheaters: true, title: "Spider-man", trailer: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  );
}
