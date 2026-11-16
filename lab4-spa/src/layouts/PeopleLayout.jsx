
import { NavLink, Outlet } from "react-router";
import { people } from "../data/people";

function PeopleLayout() {
  return (
    <section className="people-page">
      <h2>People</h2>

      <div className="people-grid">
        <aside className="people-master">
          <h3>People List</h3>

          <nav
            className="people-list"
            aria-label="People"
          >
            {people.map((person) => (
              <NavLink
                key={person.id}
                to={person.id}
                className={({ isActive }) =>
                  isActive
                    ? "person-link active"
                    : "person-link"
                }
              >
                {person.name}
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="people-detail">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default PeopleLayout;
