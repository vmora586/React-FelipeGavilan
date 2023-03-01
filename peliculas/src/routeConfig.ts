import GendreCreate from "./gendres/GendreCreate";
import GendreIndex from "./gendres/GendreIndex";
import LandingPage from "./movies/LandingPage";
import GendreEdit from "./gendres/GendreEdit";
import ActorIndex from "./actors/ActorIndex";
import ActorCreate from "./actors/ActorCreate";
import ActorEdit from "./actors/ActorEdit";
import MoviesFilter from "./movies/MoviesFilter";
import MovieIndex from "./movies/MovieIndex";
import MoviesCreate from "./movies/MoviesCreate";
import MoviesEdit from "./movies/MoviesEdit";
import TheaterIndex from "./theaters/TheaterIndex";
import TheaterCreate from "./theaters/TheaterCreate";
import TheaterEdit from "./theaters/TheaterEdit";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/gendres", component: GendreIndex },
  { path: "/gendres/create", component: GendreCreate },
  { path: "/gendres/edit/:id", component: GendreEdit, parent: true },

  { path: "/actors", component: ActorIndex },
  { path: "/actors/create", component: ActorCreate },
  { path: "/actors/edit/:id", component: ActorEdit },

  { path: "/theaters", component: TheaterIndex },
  { path: "/theaters/create", component: TheaterCreate },
  { path: "/theaters/edit/:id", component: TheaterEdit },
  { path: "/search", component: MoviesFilter },

  { path: "/movies", component: MovieIndex },
  { path: "/movies/create", component: MoviesCreate },
  { path: "/movies/edit/:id", component: MoviesEdit },

  { path: "*", component: LandingPage },
];
export default routes;
