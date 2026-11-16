
function PersonDetailSkeleton() {
  return (
    <section
      className="card person-card person-layout person-skeleton"
      aria-label="Person details"
    >
      {/* Loading region */}
      <div
        className="skeleton-content"
        aria-busy="true"
        aria-label="Person details are loading"
      >
        {/* Decorative skeleton placeholders */}
        <div aria-hidden="true">
          {/* Category tag */}
          <div className="skeleton-tag skeleton-block" />

          {/* Profile header */}
          <div className="person-header">
            <div className="skeleton-avatar skeleton-block" />

            <div className="skeleton-header-info">
              <div className="skeleton-name skeleton-block" />
              <div className="skeleton-role skeleton-block" />
            </div>
          </div>

          {/* Profile information */}
          <div className="person-info">
            <div className="info-row">
              <div className="skeleton-label skeleton-block" />
              <div className="skeleton-value skeleton-block" />
            </div>

            <div className="info-row">
              <div className="skeleton-label skeleton-block" />
              <div className="skeleton-value skeleton-block" />
            </div>

            <div className="info-row">
              <div className="skeleton-label skeleton-block" />
              <div className="skeleton-value skeleton-block" />
            </div>
          </div>

          {/* Biography */}
          <div className="person-bio">
            <div className="skeleton-bio-title skeleton-block" />

            <div className="skeleton-bio-lines">
              <div className="skeleton-line skeleton-block" />
              <div className="skeleton-line skeleton-block" />
              <div className="skeleton-line short skeleton-block" />
            </div>
          </div>
        </div>
      </div>

      {/* Accessible loading announcement */}
      <p
        className="visually-hidden"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Loading person details. Please wait.
      </p>
    </section>
  );
}

export default PersonDetailSkeleton;
