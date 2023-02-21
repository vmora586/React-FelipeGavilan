import { IMovie } from "../models/movie.model";
import Movie from "./Movie";
import css from "./movies.module.css";
import GenericList from "../utilities/GenericList";

export default function Movies(props: moviesProps) {
  return (
    <GenericList templateList={props.movies}>
      <div className={css.div}>
        {props.movies?.map((mv) => (
          <Movie movie={mv} key={mv.id} />
        ))}
      </div>
    </GenericList>
  );
}

interface moviesProps {
  movies?: IMovie[];
}
