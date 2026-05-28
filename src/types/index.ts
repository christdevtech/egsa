export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  subHeadline: string;
  primaryCta: string;
  secondaryCta: string;
  countdownDate: string;
}

export interface StrategicPillar {
  title: string;
  description: string;
}

export interface LeadershipMessage {
  name: string;
  role: string;
  message: string;
}

export interface ExcoMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface AboutContent {
  heritage: string;
  motto: string;
  image?: string;
  leadershipMessages: LeadershipMessage[];
}

export interface JubileeEvent {
  title: string;
  date: string;
  location?: string;
  status?: string;
  highlight?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
  image?: string;
}

export interface ITCenter {
  name: string;
  donor: string;
}

export interface LegacyProjectContent {
  purpose: string;
  itCenters: ITCenter[];
  infrastructure: {
    safeSpace: string;
    completed: string;
    upcoming: string;
  }
}

export interface MerchandiseItem {
  name: string;
  description: string;
  image?: string;
  backImage?: string;
}

export interface GiveBackContent {
  endowmentFund: string;
  merchandise: MerchandiseItem[];
}

export interface ContactContent {
  address: string;
  phone: string;
  web: string;
  socials: string;
}

export interface AlumniContent {
  intro: string;
  registeredSets: number[];
}

export interface FooterContent {
  copyright: string;
  motto: string;
  developer: string;
}

export interface WebsiteContent {
  navigation: NavItem[];
  hero: HeroContent;
  strategicPillars: StrategicPillar[];
  about: AboutContent;
  exco: ExcoMember[];
  events: JubileeEvent[];
  achievements: Achievement[];
  legacy: LegacyProjectContent;
  giveBack: GiveBackContent;
  contact: ContactContent;
  alumni: AlumniContent;
  footer: FooterContent;
}
