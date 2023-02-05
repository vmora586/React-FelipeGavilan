import GendreCreate from "./gendres/GendreCreate";
import GendreIndex from "./gendres/GendreIndex";
import LandingPage from "./movies/LandingPage";
import GendreEdit from "./gendres/GendreEdit";
import ActorIndex from "./actors/ActorIndex";
import ActorCreate from "./actors/ActorCreate";
import ActorEdit from "./actors/ActorEdit";
import TeatherIndex from "./teathers/TeatherIndex";
import TeatherCreate from "./teathers/TeatherCreate";
import TeatherEdit from "./teathers/TeatherEdit";
import MoviesFilter from "./movies/MoviesFilter";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/gendres", component: GendreIndex },
  { path: "/gendres/create", component: GendreCreate },
  { path: "/gendres/edit/:id", component: GendreEdit, parent: true },

  { path: "/actors", component: ActorIndex },
  { path: "/actors/create", component: ActorCreate },
  { path: "/actors/edit/:id", component: ActorEdit },

  { path: "/teathers", component: TeatherIndex },
  { path: "/teathers/create", component: TeatherCreate },
  { path: "/teathers/edit/:id", component: TeatherEdit },
  { path: "/search", component: MoviesFilter },

  { path: "*", component: LandingPage },
];
export default routes;
