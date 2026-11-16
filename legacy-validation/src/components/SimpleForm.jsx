
import { useState } from "react";
import InputField from "./InputField.jsx";

// Pure validation function.
function validateEmail(email) {
  if (!email.trim()) {
    return "Email is required.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please enter a valid email address.";
  }

  return "";
}

function SimpleForm() {
  // Single source of truth for form values.
  const [formValues, setFormValues] = useState({
    email: "",
  });

  // State for submission-related UI behavior.
  const [invalidSubmitCount, setInvalidSubmitCount] =
    useState(0);

  const [submitMessage, setSubmitMessage] = useState("");

  // Derive validation errors directly from form values.
  const errors = {
    email: validateEmail(formValues.email),
  };

  // Derive overall form validity.
  const isFormValid = Object.values(errors).every(
    (error) => error === ""
  );

  // Update the single source of truth directly.
  const handleValueChange = (name, value) => {
    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitMessage("");
  };

  // Handle form submission.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      setSubmitMessage("Please correct the form errors.");

      setInvalidSubmitCount((previous) => previous + 1);

      return;
    }

    setSubmitMessage("Form submitted successfully!");
  };

  return (
    <form
      className="simple-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2>Refactored Validation Form</h2>

      <p>
        This form uses a single source of truth and
        derives validation results directly from state.
      </p>

      <InputField
        label="Email"
        name="email"
        value={formValues.email}
        error={errors.email}
        onValueChange={handleValueChange}
        invalidSubmitCount={invalidSubmitCount}
      />

      <div className="form-status">
        <strong>Form status:</strong>{" "}
        <span
          className={
            isFormValid ? "status-valid" : "status-invalid"
          }
        >
          {isFormValid ? "Valid" : "Invalid"}
        </span>
      </div>

      <button type="submit">
        Submit
      </button>

      {submitMessage && (
        <p
          className={
            isFormValid
              ? "submit-message success-message"
              : "submit-message error-message"
          }
          role="status"
        >
          {submitMessage}
        </p>
      )}
    </form>
  );
}

export default SimpleForm;
