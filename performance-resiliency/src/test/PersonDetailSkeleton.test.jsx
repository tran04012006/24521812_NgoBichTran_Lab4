
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import PersonDetailSkeleton from "../components/PersonDetailSkeleton";

describe("PersonDetailSkeleton", () => {
  it("renders the skeleton container", () => {
    const { container } = render(
      <PersonDetailSkeleton />
    );

    expect(
      container.querySelector(".person-skeleton")
    ).toBeInTheDocument();
  });

  it("preserves shared profile layout classes", () => {
    const { container } = render(
      <PersonDetailSkeleton />
    );

    const skeleton = container.querySelector(
      ".person-skeleton"
    );

    expect(skeleton).toHaveClass(
      "person-card",
      "person-layout"
    );
  });

  it("marks the loading region as busy", () => {
    const { container } = render(
      <PersonDetailSkeleton />
    );

    const loadingRegion = container.querySelector(
      '[aria-busy="true"]'
    );

    expect(loadingRegion).toBeInTheDocument();
    expect(loadingRegion).toHaveAttribute(
      "aria-label",
      "Person details are loading"
    );
  });

  it("provides an accessible loading status", () => {
    render(<PersonDetailSkeleton />);

    const status = screen.getByRole("status");

    expect(status).toHaveTextContent(
      "Loading person details. Please wait."
    );

    expect(status).toHaveAttribute(
      "aria-live",
      "polite"
    );

    expect(status).toHaveAttribute(
      "aria-atomic",
      "true"
    );
  });

  it("hides decorative placeholders", () => {
    const { container } = render(
      <PersonDetailSkeleton />
    );

    const decorativeContent =
      container.querySelector(
        ".skeleton-content [aria-hidden='true']"
      );

    expect(decorativeContent).toBeInTheDocument();

    expect(
      decorativeContent.querySelector(".skeleton-avatar")
    ).toBeInTheDocument();
  });

  it("contains placeholders for profile content", () => {
    const { container } = render(
      <PersonDetailSkeleton />
    );

    expect(
      container.querySelector(".skeleton-name")
    ).toBeInTheDocument();

    expect(
      container.querySelector(".skeleton-role")
    ).toBeInTheDocument();

    expect(
      container.querySelectorAll(".skeleton-label")
    ).toHaveLength(3);

    expect(
      container.querySelectorAll(".skeleton-value")
    ).toHaveLength(3);

    expect(
      container.querySelectorAll(".skeleton-line")
    ).toHaveLength(3);
  });
});
