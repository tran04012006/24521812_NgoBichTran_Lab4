
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";

import SimpleForm from "../components/SimpleForm.jsx";

describe("Form refactoring regression tests", () => {
  let scrollMock;

  beforeEach(() => {
    scrollMock = vi.fn();

    Element.prototype.scrollIntoView = scrollMock;
  });

  afterEach(() => {
    cleanup();

    delete Element.prototype.scrollIntoView;

    vi.restoreAllMocks();
  });

  it("handles rapid input changes correctly", () => {
    render(<SimpleForm />);

    const input = screen.getByLabelText("Email");

    const values = [
      "h",
      "he",
      "hel",
      "hello",
      "hello@",
      "hello@gmail",
      "hello@gmail.com",
    ];

    values.forEach((value) => {
      fireEvent.change(input, {
        target: { value },
      });
    });

    expect(input.value).toBe("hello@gmail.com");

    expect(
      screen.getByText("Valid", {
        selector: ".status-valid",
      })
    ).toBeTruthy();
  });

  it("updates validation when input changes", () => {
    render(<SimpleForm />);

    const input = screen.getByLabelText("Email");

    fireEvent.change(input, {
      target: { value: "invalid" },
    });

    expect(
      screen.getByText(
        "Please enter a valid email address."
      )
    ).toBeTruthy();

    fireEvent.change(input, {
      target: { value: "valid@gmail.com" },
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

  it("scrolls to error after invalid submission", () => {
    render(<SimpleForm />);

    const submitButton = screen.getByRole(
      "button",
      { name: "Submit" }
    );

    fireEvent.click(submitButton);

    expect(scrollMock).toHaveBeenCalledTimes(1);

    expect(scrollMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "nearest",
    });
  });

  it("does not scroll on every input change", () => {
    render(<SimpleForm />);

    const input = screen.getByLabelText("Email");

    fireEvent.change(input, {
      target: { value: "hello" },
    });

    fireEvent.change(input, {
      target: { value: "hello@" },
    });

    fireEvent.change(input, {
      target: { value: "hello@gmail.com" },
    });

    expect(scrollMock).not.toHaveBeenCalled();
  });

  it("does not scroll after valid submission", () => {
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

    expect(scrollMock).not.toHaveBeenCalled();

    expect(
      screen.getByRole("status").textContent
    ).toBe("Form submitted successfully!");
  });

  it("does not produce an update-depth error", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(<SimpleForm />);

    const input = screen.getByLabelText("Email");

    for (let index = 0; index < 50; index++) {
      fireEvent.change(input, {
        target: {
          value: `user${index}@gmail.com`,
        },
      });
    }

    expect(input.value).toBe("user49@gmail.com");

    const errorMessages =
      consoleError.mock.calls.flat().join(" ");

    expect(errorMessages).not.toContain(
      "Maximum update depth exceeded"
    );

    expect(
      screen.getByText("Valid", {
        selector: ".status-valid",
      })
    ).toBeTruthy();
  });
});
