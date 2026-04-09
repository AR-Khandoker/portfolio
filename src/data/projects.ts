/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PROJECTS DATA FILE - SINGLE SOURCE OF TRUTH
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This file controls ALL projects displayed on your Work page.
 * 
 * HOW TO ADD A NEW PROJECT:
 * -------------------------
 * 1. Import your image at the top (if using a file)
 * 2. Copy one of the existing project objects below
 * 3. Update the fields:
 *    - id: Use the next available number
 *    - title: Your project name
 *    - category: Choose from categories list at bottom
 *    - metric: Short description or achievement
 *    - size: "small" or "large" (affects card size)
 *    - externalLink: Your Behance/Dribbble URL (optional)
 *    - imageType: "url", "component", or "figma"
 *    - image/imageComponent/figmaAsset: Based on imageType
 * 
 * HOW TO CHANGE A PROJECT LINK:
 * ------------------------------
 * Find the project by title, then update the "externalLink" field
 * 
 * HOW TO REPLACE AN IMAGE:
 * ------------------------
 * Option 1 (URL): Set imageType to "url" and paste image URL in "image" field
 * Option 2 (File): Import image at top, set imageType to "figma", add to "figmaAsset"
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import type { Project } from '../types';

// ═══════════════════════════════════════════════════════════════════════════
// IMAGE IMPORTS
// Add your imported Figma components and assets here
// ═══════════════════════════════════════════════════════════════════════════
import ThankYou from '../imports/ThankYou';
import FlowTrack from '../imports/Frame1000003093';
import Dashboard from '../imports/Dashboard';
import Slide432 from '../imports/Slide432';
import AdveraHeroImage from 'figma:asset/4fd165c17e93579fe56f7a8dcc6bb4ebf02c7b0c.png';
import SaasDashboardImage from 'figma:asset/e0199dca010bfdf4a3d4bf1010d368e7d489a20f.png';
import AdveraPortfolioImage from 'figma:asset/1acd087c8b0bc2c19b8ab9a8e8f2070ce3c7357d.png';

// ═══════════════════════════════════════════════════════════════════════════
// PROJECTS DATA
// ═══════════════════════════════════════════════════════════════════════════
export const projects: Project[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // Project 1: Recruit
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Recruit",
    category: "Product Design",
    metric: "Conversion Focused",
    size: "large",
    // externalLink: "",  // No external link - will go to internal detail page
    imageType: "component",
    imageComponent: ThankYou,
    svgViewBox: "0 0 1920 1080"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Project 2: FlowTrack Mobile
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    title: "FlowTrack",
    category: "Mobile Product",
    metric: "Habit Formation",
    size: "small",
    // externalLink: "",  // No external link - will go to internal detail page
    imageType: "component",
    imageComponent: FlowTrack,
    svgViewBox: "0 0 1170 1195"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Project 3: Swiss Style Landing Page
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    title: "Swiss Style Landing Page",
    category: "Landing Page",
    metric: "-30% Task Time",
    size: "small",
    externalLink: "https://dribbble.com/shots/26764158-Creative-Studio-Portfolio-Swiss-Minimalism-Meets-Modern-Motion?utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Creative%20Studio%20Portfolio%20%7C%20Swiss%20Minimalism%20Meets%20Modern%20Motion&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Creative%20Studio%20Portfolio%20%7C%20Swiss%20Minimalism%20Meets%20Modern%20Motion&utm_medium=Social_Share",
    imageType: "figma",
    figmaAsset: SaasDashboardImage
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Project 4: FlowTrack Web
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    title: "FlowTrack Web",
    category: "SaaS Dashboard",
    metric: "Habit Analytics",
    size: "large",
    // externalLink: "",  // No external link - will go to internal detail page
    imageType: "component",
    imageComponent: Dashboard,
    svgViewBox: "0 0 1440 1024"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Project 6: Finex
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Finex",
    category: "Fintech",
    metric: "Wealth Management",
    size: "large",
    externalLink: "https://dribbble.com/shots/26881347-Finex-AI-Based-Expense-Tracker-Web-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Finex%20-%20AI%20Based%20Expense%20Tracker%20Web%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Finex%20-%20AI%20Based%20Expense%20Tracker%20Web%20Landing%20Page&utm_medium=Social_Share",
    imageType: "component",
    imageComponent: Slide432,
    svgViewBox: "0 0 1920 1080"
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Project 7: Advera Branding
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Advera",
    category: "Branding",
    metric: "Brand Identity",
    size: "small",
    // externalLink: "",  // No external link - will go to internal detail page
    imageType: "figma",
    figmaAsset: AdveraHeroImage
  },

  // ─────────────────────────────────────────────────────────────────────────
  // Project 8: Advera Portfolio
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    title: "Advera Portfolio",
    category: "Landing Page",
    metric: "Conversion Focused",
    size: "large",
    externalLink: "https://dribbble.com/shots/26881458-Advera-Brand-Portfolio-web-landing-page-Conversion-focused?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Advera%20-%20Brand%20Portfolio%20web%20landing%20page%20(Conversion%20focused)&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Advera%20-%20Brand%20Portfolio%20web%20landing%20page%20(Conversion%20focused)&utm_medium=Social_Share",
    imageType: "figma",
    figmaAsset: AdveraPortfolioImage
  },

  // ═════════════════════════════════════════════════════════════════════════
  // TO ADD A NEW PROJECT:
  // Copy the template below, uncomment it, and fill in your details
  // ═════════════════════════════════════════════════════════════════════════
  
  // {
  //   id: 9,                           // ⚠️ Use next available number
  //   title: "Your Project Name",      // ✏️ EDIT THIS
  //   category: "Product Design",      // ✏️ EDIT THIS - choose from categories below
  //   metric: "Your Achievement",      // ✏️ EDIT THIS
  //   size: "large",                   // ✏️ "small" or "large"
  //   externalLink: "https://dribbble.com/your-link",  // ✏️ EDIT THIS - or remove line if no external link
  //   imageType: "url",                // ✏️ Choose: "url", "figma", or "component"
  //   image: "https://your-image-url.jpg",  // ✏️ For imageType: "url"
  //   // figmaAsset: YourImportedImage, // ✏️ For imageType: "figma" (uncomment and add import at top)
  //   // imageComponent: YourComponent, // ✏️ For imageType: "component" (uncomment and add import at top)
  //   // svgViewBox: "0 0 1920 1080"    // ✏️ Only needed for imageType: "component"
  // },
];

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY FILTERS
// These appear as filter buttons on the Work page
// You can add or remove categories here
// ═══════════════════════════════════════════════════════════════════════════
export const categories = [
  "All", 
  "Product Design", 
  "Case Studies", 
  "Landing Page", 
  "Branding",
  "Fintech",
  "Mobile Product",
  "SaaS Dashboard"
];
