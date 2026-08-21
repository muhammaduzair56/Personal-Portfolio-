import { describe, expect, it } from "vitest";
import { getActiveSection, getScrollProgress } from "./Home";

describe("getActiveSection", () => {
  const sections = [
    { id: "contact", top: 1200 },
    { id: "skills", top: 760 },
    { id: "projects", top: 420 },
    { id: "about", top: 160 },
  ];

  it("keeps navigation neutral before the first tracked section", () => {
    expect(getActiveSection(sections, 90)).toBe("");
  });

  it("returns the latest section whose top has crossed the scroll marker", () => {
    expect(getActiveSection(sections, 500)).toBe("projects");
    expect(getActiveSection(sections, 900)).toBe("skills");
    expect(getActiveSection(sections, 1400)).toBe("contact");
  });
});

describe("getScrollProgress", () => {
  it("returns zero when the page has no scrollable height", () => {
    expect(getScrollProgress(0, 800, 800)).toBe(0);
  });

  it("clamps scroll progress between zero and one hundred", () => {
    expect(getScrollProgress(-20, 800, 1800)).toBe(0);
    expect(getScrollProgress(1200, 800, 1800)).toBe(100);
  });

  it("returns the current percentage through the scrollable page", () => {
    expect(getScrollProgress(500, 800, 1800)).toBe(50);
  });
});
