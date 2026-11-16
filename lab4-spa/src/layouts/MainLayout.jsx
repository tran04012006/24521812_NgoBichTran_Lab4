
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router";
import PageSkeleton from "../components/PageSkeleton";

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

        <NavLink
          to="/people"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          People
        </NavLink>
      </nav>

      <div className="route-content">
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}

export default MainLayout;
