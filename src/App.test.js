import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("react-parallax", () => ({
  Parallax: ({ children }) => <div data-testid="parallax">{children}</div>
}));

jest.mock("react-reveal/Fade", () => ({ children }) => <>{children}</>);
jest.mock("react-reveal/Slide", () => ({ children }) => <>{children}</>);
jest.mock("typewriter-effect", () => () => <span>Typewriter</span>);

describe("App", () => {
  it("renders primary portfolio sections", () => {
    render(<App />);

    expect(screen.getByText(/about me/i)).toBeInTheDocument();
    expect(screen.getByText(/tech skills/i)).toBeInTheDocument();
    expect(screen.getByText("PROJECTS")).toBeInTheDocument();
    expect(screen.getByText(/medium blogs/i)).toBeInTheDocument();
    expect(screen.getByText(/contact me/i)).toBeInTheDocument();
  });
});
