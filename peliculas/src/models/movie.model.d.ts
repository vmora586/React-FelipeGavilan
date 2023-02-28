export interface IMovie {
  id: number;
  tittle: string;
  poster: string;
}

export interface ILandingPage {
  teatherMovies?: IMovie[];
  futureMovies?: IMovie[];
}
export interface IMovieCreationDto {
  title: string;
  onTheaters: boolean;
  trailer: string;
  releaseDate?: Date;
  poster?: File;
  posterUrl?: string;
  gendreIds?: number[];
}
