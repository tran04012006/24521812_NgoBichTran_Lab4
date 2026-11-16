
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axe from "axe-core";

import App from "../App";
import PersonDetailSkeleton from "../components/PersonDetailSkeleton";

function renderApp(route = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
}

async function checkAccessibility() {
  const results = await axe.run(document, {
    rules: {
      // jsdom cannot calculate actual color contrast.
      // We will test this manually in a real browser.
      "color-contrast": {
        enabled: false,
      },
    },
  });

  expect(
    results.violations,
    JSON.stringify(results.violations, null, 2)
  ).toHaveLength(0);
}

describe("Automated accessibility checks", () => {
  it("Home has no detected accessibility violations", async () => {
    renderApp("/");
    await checkAccessibility();
  });

  it("PersonDetail has no detected accessibility violations", async () => {
    renderApp("/person");

    await screen.findByRole("heading", {
      name: "Alex Johnson",
    });

    await checkAccessibility();
  });

  it("Skeleton has no detected accessibility violations", async () => {
    render(
      <main>
        <PersonDetailSkeleton />
      </main>
    );

    await checkAccessibility();
  });
});
