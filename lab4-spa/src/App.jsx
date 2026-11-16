
import {
  Routes,
  Route,
  NavLink
} from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <main className="app">
      <h1>Lab 4 - Multi-Route SPA</h1>

      <nav aria-label="Main navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
