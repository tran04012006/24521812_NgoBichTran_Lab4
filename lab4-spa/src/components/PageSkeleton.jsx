
function PageSkeleton() {
  return (
    <>
      <section
        className="page-skeleton"
        aria-label="Page content loading"
        aria-busy="true"
      >
        <div aria-hidden="true">
          <div className="skeleton-heading"></div>
          <div className="skeleton-paragraph"></div>
        </div>
      </section>

      <p
        className="sr-only"
        role="status"
        aria-live="polite"
      >
        Loading page...
      </p>
    </>
  );
}

export default PageSkeleton;
