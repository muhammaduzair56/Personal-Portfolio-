import { describe, expect, it } from "vitest";
import { getActiveSection } from "./Home";

describe("getActiveSection", () => {
  const sections = [
    { id: "contact", offsetTop: 1200 },
    { id: "skills", offsetTop: 760 },
    { id: "projects", offsetTop: 420 },
    { id: "about", offsetTop: 160 },
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
