import { IMovie } from "./movie.model";
import css from "./movie.module.css";

export default function Movie(props: movieProps) {
  const moviePosterUri = () => `/pelicula/${props.movie.id}`;
  return (
    <>
      <div className={css.div}>
        <a href={moviePosterUri()}>
          <img src={props.movie.poster} alt='poster'></img>
        </a>
        <p>
          <a href={moviePosterUri()}>{props.movie.tittle}</a>
        </p>
      </div>
      <div></div>
      <div></div>
    </>
  );
}

interface movieProps {
  movie: IMovie;
}
