
function LoadingFallback({
  message = "Loading, please wait...",
}) {
  return (
    <div
      className="loading-container"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className="loading-spinner"
        aria-hidden="true"
      />

      <p className="loading-message">
        {message}
      </p>
    </div>
  );
}

export default LoadingFallback;
