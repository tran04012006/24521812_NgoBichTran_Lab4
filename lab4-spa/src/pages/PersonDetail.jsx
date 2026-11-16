
import { useParams } from "react-router";
import { people } from "../data/people";
import NotFoundState from "../components/NotFoundState";

function PersonDetail() {
  const { id } = useParams();

  const person = people.find(
    (p) => p.id === id
  );

  if (!person) {
    return <NotFoundState />;
  }

  return (
    <section>
      <h3>Person Details</h3>

      <dl className="person-details">
        <dt>Name:</dt>
        <dd>{person.name}</dd>

        <dt>Role:</dt>
        <dd>{person.role}</dd>

        <dt>Email:</dt>
        <dd>{person.email}</dd>
      </dl>
    </section>
  );
}

export default PersonDetail;
