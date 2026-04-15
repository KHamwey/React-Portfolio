import React from "react";
import { render, screen } from "@testing-library/react";
import BlogSection from "./views/blog-section/BlogSection";
import Contact from "./views/contact/Contact";

describe("External link hygiene", () => {
  it("adds noopener noreferrer to new-tab links in Blog section", () => {
    render(<BlogSection />);

    const links = screen.getAllByRole("link");
    const externalLinks = links.filter((link) => link.target === "_blank");

    expect(externalLinks.length).toBeGreaterThan(0);
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
      expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
    });
  });

  it("adds noopener noreferrer to new-tab links in Contact section", () => {
    render(<Contact />);

    const links = screen.getAllByRole("link");
    const externalLinks = links.filter((link) => link.target === "_blank");

    expect(externalLinks.length).toBeGreaterThan(0);
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
      expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
    });
  });
});
