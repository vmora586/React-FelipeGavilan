import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./Menu";
import routes from "./routeConfig";
import CustomValidations from "./utilities/CustomValidations";

CustomValidations();

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Routes>
            {routes.map((r) => (
              <Route
                path={r.path}
                key={r.path}
                element={<r.component />}></Route>
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
