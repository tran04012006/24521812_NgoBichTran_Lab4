
import { useCallback, useEffect, useState } from "react";
import InputField from "./InputField.jsx";

function SimpleForm() {
  // Parent form state
  const [formValues, setFormValues] = useState({
    email: "",
  });

  // Validation error state
  const [errors, setErrors] = useState({
    email: "",
  });

  // Overall form validity
  const [isFormValid, setIsFormValid] = useState(false);

  const [submitMessage, setSubmitMessage] = useState("");

  // Receive synchronized value from InputField.
  const handleValueChange = useCallback((name, value) => {
    setFormValues((previous) => {
      if (previous[name] === value) {
        return previous;
      }

      return {
        ...previous,
        [name]: value,
      };
    });
  }, []);

  // Legacy validation function
  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  // useEffect #2: validateField()
  // Recalculate errors whenever form values change.
  useEffect(() => {
    const emailError = validateEmail(formValues.email);

    setErrors((previous) => {
      if (previous.email === emailError) {
        return previous;
      }

      return {
        ...previous,
        email: emailError,
      };
    });
  }, [formValues]);

  // useEffect #3: calcFormValidity()
  // Recalculate overall validity when errors change.
  useEffect(() => {
    const hasValue = formValues.email.trim() !== "";

    const hasErrors = Object.values(errors).some(
      (error) => error !== ""
    );

    setIsFormValid(hasValue && !hasErrors);
  }, [errors, formValues]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      setSubmitMessage("Please correct the form errors.");
      return;
    }

    setSubmitMessage("Form submitted successfully!");
  };

  return (
    <form className="simple-form" onSubmit={handleSubmit}>
      <h2>Legacy Validation Form</h2>

      <p>
        This form intentionally uses five chained
        useEffect hooks.
      </p>

      <InputField
        label="Email"
        name="email"
        value={formValues.email}
        error={errors.email}
        onValueChange={handleValueChange}
      />

      <div className="form-status">
        <strong>Form status:</strong>{" "}
        {isFormValid ? "Valid" : "Invalid"}
      </div>

      <button type="submit">
        Submit
      </button>

      {submitMessage && (
        <p className="submit-message" role="status">
          {submitMessage}
        </p>
      )}
    </form>
  );
}

export default SimpleForm;
