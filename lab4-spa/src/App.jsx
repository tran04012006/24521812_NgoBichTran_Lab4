
import { lazy } from "react";
import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";
import PeopleLayout from "./layouts/PeopleLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const PersonDetail = lazy(
  () => import("./pages/PersonDetail")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route
          path="about"
          element={<About />}
        />

        <Route
          path="people"
          element={<PeopleLayout />}
        >
          <Route
            index
            element={
              <p>Select a person to view details.</p>
            }
          />

          <Route
            path=":id"
            element={<PersonDetail />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
