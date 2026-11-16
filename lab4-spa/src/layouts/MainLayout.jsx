
import { NavLink, Outlet } from "react-router";

function MainLayout() {
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

      <Outlet />
    </main>
  );
}

export default MainLayout;
