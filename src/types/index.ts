/**
 * Project data structure
 * Each project card on the Work page uses this structure
 */
export interface Project {
  id: number;                    // Unique identifier for the project
  title: string;                 // Project name (e.g., "Recruit", "FlowTrack")
  category: string;              // Category tag (e.g., "Product Design", "Landing Page")
  metric: string;                // Short description or achievement (e.g., "Conversion Focused")
  size: "small" | "large";       // Card size in grid - "small" or "large"
  link?: string;                 // Optional: External link (Behance, Dribbble, live site) - if provided, clicking opens this link
  externalLink?: string;         // Deprecated: Use 'link' instead
  imageType: "url" | "component" | "figma"; // Type of image to display
  image?: string;                // For imageType "url" - direct image URL
  imageComponent?: any;          // For imageType "component" - React component to render
  figmaAsset?: string;           // For imageType "figma" - imported Figma asset
  svgViewBox?: string;           // Optional: viewBox for SVG components (e.g., "0 0 1920 1080")
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