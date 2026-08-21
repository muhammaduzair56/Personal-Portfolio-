import { describe, expect, it } from "vitest";
import { getActiveSection, getContactCtaConversionEvent, getDrawerCloseEvent, getScrollProgress, getSectionFunnelEvent } from "./Home";

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

describe("getDrawerCloseEvent", () => {
  it("creates a privacy-conscious post-navigation event payload", () => {
    expect(getDrawerCloseEvent("projects", 43, "/")).toEqual({
      event: "mobile_drawer_closed_after_navigation",
      section: "projects",
      progress: 43,
      path: "/",
    });
  });
});

describe("getSectionFunnelEvent", () => {
  it("creates stable navigation, reached, and engaged funnel stages", () => {
    expect(getSectionFunnelEvent("drawer_navigation", "skills", 50)).toEqual({
      event: "mobile_section_funnel",
      stage: "drawer_navigation",
      section: "skills",
      progress: 50,
    });
    expect(getSectionFunnelEvent("section_reached", "skills", 52).stage).toBe("section_reached");
    expect(getSectionFunnelEvent("section_engaged", "skills", 60).stage).toBe("section_engaged");
  });
});

describe("getContactCtaConversionEvent", () => {
  it("creates a conversion payload tied to the engaged section stage", () => {
    expect(getContactCtaConversionEvent("skills", "hero_talk", 61)).toEqual({
      event: "mobile_contact_cta_conversion",
      stage: "section_engaged",
      sourceSection: "skills",
      cta: "hero_talk",
      progress: 61,
    });
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
