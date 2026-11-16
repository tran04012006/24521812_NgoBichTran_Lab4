
import { lazy, Suspense } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PersonDetailSkeleton from "./components/PersonDetailSkeleton";
import RouteErrorBoundary from "./components/RouteErrorBoundary";

// Task 2: Route-level code splitting
const PersonDetail = lazy(() =>
  import("./pages/PersonDetail")
);

function App() {
  return (
    <div className="app">
      {/* Task 5: Keyboard skip navigation */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <header className="app-header">
        <div className="container header-content">
          <h1 className="app-title">
            Performance & Resiliency
          </h1>

          <nav aria-label="Main navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/person"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Person Detail
            </NavLink>
          </nav>
        </div>
      </header>

      <main
        id="main-content"
        className="container main-content"
        tabIndex={-1}
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/person"
            element={
              <RouteErrorBoundary>
                <Suspense
                  fallback={<PersonDetailSkeleton />}
                >
                  <PersonDetail />
                </Suspense>
              </RouteErrorBoundary>
            }
          />

          <Route
            path="*"
            element={
              <section className="card">
                <h2>Page not found</h2>
                <p>
                  The requested page does not exist.
                </p>
              </section>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
