export interface ResearchInsight {
  title: string;
  desc: string;
}

export interface UserPersona {
  name: string;
  role: string;
  quote: string;
  painPoint: string;
}

export interface KeyFeature {
  title: string;
  desc: string;
}

export interface OutcomeMetric {
  metric: string;
  label: string;
}

export interface ScreenPreview {
  title: string;
  desc: string;
  tag: string;
}

export interface CaseStudyDetails {
  overview: string;
  role: string;
  timeline: string;
  tools: string[];
  problem: string;
  solution: string;
  researchInsights: ResearchInsight[];
  userPersonas: UserPersona[];
  userFlowSteps: string[];
  keyFeatures: KeyFeature[];
  outcomes: OutcomeMetric[];
  screens: ScreenPreview[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  badge: string;
  coverBg: string;
  darkCoverBg: string;
  accentColor: string;
  behanceUrl: string;
  caseStudy: CaseStudyDetails;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  tag: string;
  color: string;
  bgTint: string;
}

export interface StatCounter {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
  tag?: string;
}

export interface SkillCardData {
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  skills: SkillItem[];
}

export interface BenefitCard {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  type: string;
  description: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  rating: number;
  avatarInitials: string;
  avatarBg: string;
}
