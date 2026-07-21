/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'Full Stack' | 'Frontend' | 'AI/Automation';
  description: string;
  tags: string[];
  featured: boolean;
}

export interface ExperienceEntry {
  period: string;
  title: string;
  company: string;
  current: boolean;
  highlights: string[];
  skills: { name: string; percentage: number }[];
}

export interface EducationEntry {
  period: string;
  title: string;
  institution: string;
  score: string;
  highlights: string[];
  skills: { name: string; percentage: number }[];
}

export interface CertificateEntry {
  id: string;
  no: string;
  issuer: string;
  year: string;
  title: string;
  link: string;
  score?: string;
  accent: 'purple' | 'amber' | 'green';
}

export interface DisciplineEntry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string; // From lucide-react (like 'Code', 'Cpu', 'Palette', 'Server', 'Cloud')
  skills: { name: string; percentage: number }[];
  competencies: string[];
  linkText: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database & Tools' | 'Soft / Other';
  iconName: string;
}

export interface TimelineNode {
  year: string;
  title: string;
  body: string;
  tag: string;
  iconName: string;
}
