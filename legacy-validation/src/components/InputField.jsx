
import { useEffect, useRef, useState } from "react";

function InputField({
  label,
  name,
  value,
  error,
  onValueChange,
}) {
  // Legacy: Child maintains a duplicate of parent state.
  const [localValue, setLocalValue] = useState(value);

  // Legacy: Child maintains a duplicate error state.
  const [localError, setLocalError] = useState(error);

  const inputRef = useRef(null);

  // Handle user typing.
  const handleChange = (event) => {
    setLocalValue(event.target.value);
  };

  // useEffect #1: syncToParent()
  // Synchronize child input state with parent form state.
  useEffect(() => {
    onValueChange(name, localValue);
  }, [localValue, name, onValueChange]);

  // useEffect #4: syncErrorsToChild()
  // Synchronize validation errors from parent to child.
  useEffect(() => {
    setLocalError(error);
  }, [error]);

  // useEffect #5: autoScrollToError()
  // Scroll the input into view when an error appears.
  useEffect(() => {
    if (localError && inputRef.current) {
      inputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [localError]);

  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>

      <input
        ref={inputRef}
        id={name}
        name={name}
        type="email"
        value={localValue}
        onChange={handleChange}
        aria-invalid={Boolean(localError)}
        aria-describedby={
          localError ? `${name}-error` : undefined
        }
      />

      {localError && (
        <p className="error-message" id={`${name}-error`}>
          {localError}
        </p>
      )}
    </div>
  );
}

export default InputField;
