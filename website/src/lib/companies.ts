import { readFileSync } from "node:fs";

type Section = "Nearshores / Outsourcing" | "Empresas nacionales";

export interface Company {
  name: string;
  url: string;
  section: Section;
  /** Tag groups as displayed in the README, e.g. ["LATAM"] or ["Colombia", "Bogotá, Medellín"] */
  tags: string[];
  /** Every expanded tag: LATAM, Colombia, plus each individual city */
  all: string[];
}

const SECTIONS: Section[] = ["Nearshores / Outsourcing", "Empresas nacionales"];

export function getCompanies(): Company[] {
  const readmePath = new URL("../../../README.md", import.meta.url);
  const readme = readFileSync(readmePath, "utf8");

  const companies: Company[] = [];

  let section: Section | null = null;

  for (const line of readme.split("\n")) {
    const heading = line.match(/^## (.+)$/);
    if (heading) {
      const found = SECTIONS.find((s) => heading[1].trim() === s);
      section = found ?? section;
      continue;
    }
    if (!section) continue;

    const match = line.match(/^- \[(.+?)\]\((\S+?)\)\s+-\s+\*(.+)\*\s*$/);
    if (!match) continue;

    const tags = [...match[3].matchAll(/\(([^)]+)\)/g)].map((tag) => tag[1]);
    const all = tags.flatMap((tag) => tag.split(",").map((v) => v.trim()));
    companies.push({ name: match[1], url: match[2], section, tags, all });
  }

  return companies;
}

export function getCities(companies: Company[]): string[] {
  const nonCities = ["LATAM", "Colombia"];
  return [...new Set(companies.flatMap((c) => c.all).filter((tag) => !nonCities.includes(tag)))].sort();
}
