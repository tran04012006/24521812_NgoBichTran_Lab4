
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="card">
      <span className="tag">Exercise 1.1</span>

      <h2>Welcome to the Performance Lab</h2>

      <p>
        This application demonstrates architectural
        improvements for React applications.
      </p>

      <h3>Exercise Objectives</h3>

      <ul className="feature-list">
        <li>Route-level code splitting</li>
        <li>React Suspense boundaries</li>
        <li>Skeleton loading components</li>
        <li>Zero layout shift optimization</li>
        <li>Accessibility improvements</li>
      </ul>

      <Link to="/person" className="button">
        View Person Detail
      </Link>
    </section>
  );
}

export default Home;
