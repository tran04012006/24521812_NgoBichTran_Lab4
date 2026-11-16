
const person = {
  id: 1,
  name: "Alex Johnson",
  role: "Software Engineer",
  email: "alex@example.com",
  location: "New York, USA",
  bio: "Alex is a software engineer who enjoys building modern web applications and improving user experience.",
};

function PersonDetail() {
  return (
    <section className="card person-card person-layout">
      <span className="tag">
        Person Detail
      </span>

      <div className="person-header">
        <div className="avatar" aria-hidden="true">
          AJ
        </div>

        <div>
          <h2>{person.name}</h2>

          <p className="person-role">
            {person.role}
          </p>
        </div>
      </div>

      <div className="person-info">
        <div className="info-row">
          <strong>ID:</strong>
          <span>{person.id}</span>
        </div>

        <div className="info-row">
          <strong>Email:</strong>
          <span>{person.email}</span>
        </div>

        <div className="info-row">
          <strong>Location:</strong>
          <span>{person.location}</span>
        </div>
      </div>

      <div className="person-bio">
        <h3>About</h3>
        <p>{person.bio}</p>
      </div>
    </section>
  );
}

export default PersonDetail;
