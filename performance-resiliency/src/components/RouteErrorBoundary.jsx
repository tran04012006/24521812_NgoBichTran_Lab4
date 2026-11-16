
import { Component } from "react";

class RouteErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };

    this.handleReload = this.handleReload.bind(this);
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error(
        "Route rendering failed:",
        error,
        errorInfo
      );
    }
  }

  handleReload() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <section
          className="card person-card person-layout error-container"
          role="alert"
          aria-labelledby="route-error-title"
          aria-describedby="route-error-description"
        >
          <div className="error-content">
            <div className="error-icon" aria-hidden="true">
              !
            </div>

            <h2
              id="route-error-title"
              tabIndex={-1}
            >
              Unable to load this page
            </h2>

            <p id="route-error-description">
              We couldn't load the person details.
              This may be caused by a network problem
              or a temporarily unavailable resource.
            </p>

            <p>
              Please check your connection and
              reload the page to try again.
            </p>

            <button
              type="button"
              className="retry-button"
              onClick={this.handleReload}
            >
              Reload page
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default RouteErrorBoundary;
