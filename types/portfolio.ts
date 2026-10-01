/**
 * A piece of content that is either confirmed (plain string)
 * or still needs to be checked. Unconfirmed values render
 * with the yellow <TbdTag /> so they are easy to spot.
 */
export type Info = string | { tbd: string };

export interface Stat {
  value: Info;
  label: string;
  count?: number;
  suffix?: string;
}

export interface SpecialismArea {
  icon: 'chart' | 'agent' | 'dna' | 'network';
  title: string;
  description: string;
  tags: string[];
}

export interface FeaturedProject {
  eyebrow: string;
  title: string;
  highlight: string;
  summary: string;
  approach: Info;
  meta: { label: string; value: Info }[];
  kpis: { label: string; value: Info }[];
  pipeline: { title: string; description: string; note?: Info }[];
  links: { label: string; href: Info; primary?: boolean }[];
}

export type WorkPreview = { type: 'image'; src: string } | { type: 'terminal'; title: string; lines: string[] };

export interface WorkItem {
  title: string;
  badge?: string;
  year: Info;
  description: string;
  stack: string;
  kind: string;
  href?: string;
  preview: WorkPreview;
}

export interface ExperienceItem {
  from: Info;
  to: string;
  company: string;
  role: string;
  badge: string;
  highlights: string[];
}

export interface ToolkitGroup {
  title: string;
  items: { label: string; sub?: string }[];
}
