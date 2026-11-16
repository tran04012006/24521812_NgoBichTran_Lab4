
import { useEffect, useRef } from "react";

function InputField({
  label,
  name,
  value,
  error,
  onValueChange,
  invalidSubmitCount,
}) {
  const inputRef = useRef(null);
  const previousSubmitCount = useRef(invalidSubmitCount);

  // Update parent state directly.
  const handleChange = (event) => {
    onValueChange(name, event.target.value);
  };

  // The only required useEffect:
  // Scroll to the invalid field after a failed submission.
  useEffect(() => {
    if (
      invalidSubmitCount > previousSubmitCount.current &&
      error &&
      inputRef.current
    ) {
      inputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }

    previousSubmitCount.current = invalidSubmitCount;
  }, [invalidSubmitCount, error]);

  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>

      <input
        ref={inputRef}
        id={name}
        name={name}
        type="email"
        value={value}
        onChange={handleChange}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : undefined
        }
      />

      {error && (
        <p
          className="error-message"
          id={`${name}-error`}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
