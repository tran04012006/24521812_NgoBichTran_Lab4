
import { lazy, Suspense } from "react";
import { NavLink, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// Task 2: Route-level code splitting
// PersonDetail is loaded only when its route is rendered.
const PersonDetail = lazy(() =>
  import("./pages/PersonDetail")
);

function App() {
  return (
    <div className="app">
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
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/person"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Person Detail
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="container main-content">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/person"
            element={
              <Suspense fallback={<p>Loading person details...</p>}>
                <PersonDetail />
              </Suspense>
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
