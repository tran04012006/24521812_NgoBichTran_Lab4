
import {
  describe,
  it,
  expect,
  vi,
} from "vitest";

import {
  render,
  screen,
} from "@testing-library/react";

import RouteErrorBoundary from "../components/RouteErrorBoundary";

function WorkingComponent() {
  return <h2>Component loaded successfully</h2>;
}

function BrokenComponent() {
  throw new Error("Simulated rendering failure");
}

describe("RouteErrorBoundary", () => {
  it("renders children when no error occurs", () => {
    render(
      <RouteErrorBoundary>
        <WorkingComponent />
      </RouteErrorBoundary>
    );

    expect(
      screen.getByRole("heading", {
        name: "Component loaded successfully",
      })
    ).toBeInTheDocument();
  });

  it("displays an error fallback when rendering fails", () => {
    const consoleSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    try {
      render(
        <RouteErrorBoundary>
          <BrokenComponent />
        </RouteErrorBoundary>
      );

      expect(
        screen.getByRole("alert")
      ).toBeInTheDocument();

      expect(
        screen.getByRole("heading", {
          name: "Unable to load this page",
        })
      ).toBeInTheDocument();

      expect(
        screen.getByRole("button", {
          name: "Reload page",
        })
      ).toBeInTheDocument();
    } finally {
      consoleSpy.mockRestore();
    }
  });

  it("provides an accessible error description", () => {
    const consoleSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    try {
      render(
        <RouteErrorBoundary>
          <BrokenComponent />
        </RouteErrorBoundary>
      );

      const alert = screen.getByRole("alert");

      expect(alert).toHaveAttribute(
        "aria-labelledby",
        "route-error-title"
      );

      expect(alert).toHaveAttribute(
        "aria-describedby",
        "route-error-description"
      );
    } finally {
      consoleSpy.mockRestore();
    }
  });
});
