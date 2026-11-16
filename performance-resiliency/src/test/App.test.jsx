
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import App from "../App";

function renderApp(initialRoute = "/") {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>
  );
}

describe("App routing and navigation", () => {
  it("renders the Home page", () => {
    renderApp();

    expect(
      screen.getByRole("heading", {
        name: "Welcome to the Performance Lab",
      })
    ).toBeInTheDocument();
  });

  it("renders the main navigation", () => {
    renderApp();

    expect(
      screen.getByRole("navigation", {
        name: "Main navigation",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Home",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Person Detail",
      })
    ).toBeInTheDocument();
  });

  it("navigates to PersonDetail", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.click(
      screen.getByRole("link", {
        name: "Person Detail",
      })
    );

    expect(
      await screen.findByRole("heading", {
        name: "Alex Johnson",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("Software Engineer")
    ).toBeInTheDocument();
  });

  it("navigates back to Home", async () => {
    const user = userEvent.setup();

    renderApp("/person");

    expect(
      await screen.findByRole("heading", {
        name: "Alex Johnson",
      })
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("link", {
        name: "Home",
      })
    );

    expect(
      screen.getByRole("heading", {
        name: "Welcome to the Performance Lab",
      })
    ).toBeInTheDocument();
  });

  it("renders a not-found page", () => {
    renderApp("/unknown-route");

    expect(
      screen.getByRole("heading", {
        name: "Page not found",
      })
    ).toBeInTheDocument();
  });

  it("provides a skip navigation link", () => {
    renderApp();

    const skipLink = screen.getByRole("link", {
      name: "Skip to main content",
    });

    expect(skipLink).toHaveAttribute(
      "href",
      "#main-content"
    );

    expect(
      screen.getByRole("main")
    ).toHaveAttribute("id", "main-content");
  });

  it("supports keyboard navigation", async () => {
    const user = userEvent.setup();

    renderApp();

    await user.tab();

    expect(
      screen.getByRole("link", {
        name: "Skip to main content",
      })
    ).toHaveFocus();

    await user.tab();

    expect(
      screen.getByRole("link", {
        name: "Home",
      })
    ).toHaveFocus();

    await user.tab();

    expect(
      screen.getByRole("link", {
        name: "Person Detail",
      })
    ).toHaveFocus();

    await user.keyboard("{Enter}");

    expect(
      await screen.findByRole("heading", {
        name: "Alex Johnson",
      })
    ).toBeInTheDocument();
  });
});
