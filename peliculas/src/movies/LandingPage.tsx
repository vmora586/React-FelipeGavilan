import { useEffect, useState } from "react";
import { ILandingPage, IMovie } from "../models/movie.model";
import Movies from "./Movies";

export default function LandingPage() {
  let [movies, setMovies] = useState<ILandingPage>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        teatherMovies: [
          {
            id: 1,
            tittle: "Spider-Man Far from home",
            poster:
              "https://movieposterfactory.com/wp-content/uploads/2020/09/2019_SH_spider-man_far_from_home_0_DS1_resultat-600x890.jpg",
          } as IMovie,
          {
            id: 2,
            tittle: "Mohana",
            poster:
              "https://cinefilmsblogg.files.wordpress.com/2016/09/unnamed-9.jpg?w=584 ",
          } as IMovie,
        ],
        futureMovies: [
          {
            id: 3,
            tittle: "Predator",
            poster:
              "https://imgs.hipertextual.com/wp-content/uploads/2022/08/2071629-scaled.jpg",
          } as IMovie,
          {
            id: 4,
            tittle: "Wakanda Forever",
            poster:
              "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
          } as IMovie,
        ],
      });
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <h3>Movies in teathers</h3>
      <Movies movies={movies.teatherMovies} />
      <h3>Coming soon....</h3>
      <Movies movies={movies.futureMovies} />
    </>
  );
}
