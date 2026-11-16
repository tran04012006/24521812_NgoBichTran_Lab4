
import { lazy } from "react";
import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";
import PeopleLayout from "./layouts/PeopleLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route
          path="people"
          element={<PeopleLayout />}
        >
          <Route
            index
            element={<p>Select a person to view details.</p>}
          />
          <Route
            path=":id"
            element={<p>Person details will appear here.</p>}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
