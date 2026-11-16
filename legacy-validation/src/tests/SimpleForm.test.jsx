
import { afterEach, describe, expect, it } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import SimpleForm from "../components/SimpleForm.jsx";

afterEach(() => {
  cleanup();
});

describe("SimpleForm validation", () => {
  it("shows required error for empty email", () => {
    render(<SimpleForm />);

    expect(
      screen.getByText("Email is required.")
    ).toBeTruthy();

    expect(
      screen.getByText("Invalid", {
        selector: ".status-invalid",
      })
    ).toBeTruthy();
  });

  it("shows validation error for invalid email", () => {
    render(<SimpleForm />);

    const input = screen.getByLabelText("Email");

    fireEvent.change(input, {
      target: { value: "hello" },
    });

    expect(
      screen.getByText(
        "Please enter a valid email address."
      )
    ).toBeTruthy();

    expect(
      screen.getByText("Invalid", {
        selector: ".status-invalid",
      })
    ).toBeTruthy();
  });

  it("accepts a valid email", () => {
    render(<SimpleForm />);

    const input = screen.getByLabelText("Email");

    fireEvent.change(input, {
      target: { value: "hello@gmail.com" },
    });

    expect(
      screen.getByText("Valid", {
        selector: ".status-valid",
      })
    ).toBeTruthy();

    expect(
      screen.queryByText(
        "Please enter a valid email address."
      )
    ).toBeNull();
  });

  it("rejects invalid form submission", () => {
    render(<SimpleForm />);

    const input = screen.getByLabelText("Email");

    fireEvent.change(input, {
      target: { value: "invalid-email" },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );

    expect(
      screen.getByRole("status").textContent
    ).toBe("Please correct the form errors.");
  });

  it("submits successfully with valid email", () => {
    render(<SimpleForm />);

    const input = screen.getByLabelText("Email");

    fireEvent.change(input, {
      target: { value: "hello@gmail.com" },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );

    expect(
      screen.getByRole("status").textContent
    ).toBe("Form submitted successfully!");
  });
});
