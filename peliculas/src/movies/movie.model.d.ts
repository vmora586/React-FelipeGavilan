export interface IMovie {
  id: number;
  tittle: string;
  poster: string;
}

export interface ILandingPage {
  teatherMovies?: IMovie[];
  futureMovies?: IMovie[];
}
