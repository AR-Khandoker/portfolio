/**
 * Core type definitions for the portfolio application
 */

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  metric: string;
  size: "small" | "large";
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  company?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  projectType?: string[];
}

export interface MetaData {
  title: string;
  description: string;
  author: string;
  keywords: string[];
}
