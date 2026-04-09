# A R Khandoker Portfolio

High-end portfolio website built with React, Tailwind CSS, and Framer Motion.

---

## ✨ Features

- 🎨 **Minimalist Design** - White aesthetic with purple (#a855f7) accent
- 📱 **Fully Responsive** - Works beautifully on all devices
- ⚡ **Framer Motion** - Smooth animations and parallax effects
- 🗄️ **Supabase Backend** - KV Store database for content management
- 📝 **Multi-Step Contact Form** - Professional contact workflow
- 🔄 **Auto-Initialize** - No setup needed, works immediately!
- 🔐 **Admin Panel** - User-friendly interface to manage projects

---

## 🚀 Quick Start

### Your Website is Already Working!

Just load your portfolio - everything is pre-configured and auto-initialized.

**First Load:**
- Backend automatically seeds 7 sample projects
- About content auto-populates
- Landing page content auto-populates
- You're ready to go! ✅

### Manage Content (Two Options)

**Option 1: Admin Panel (Recommended)**
1. Go to `/admin/projects` on your website
2. Click "Add Project" to create new projects
3. Edit or delete existing projects with one click
4. User-friendly forms - no JSON required!
5. Upload images directly from your computer!

**Option 2: Supabase Dashboard (Advanced)**
1. Go to https://supabase.com/dashboard
2. Select your project
3. Click **Table Editor** → `kv_store_4ba1cc9d`
4. Edit the `value` column (JSON format)
5. Refresh your website - changes appear immediately!

**📖 Full Guide:** See `/QUICK_START.md` for detailed instructions

---

## 📁 Project Structure

```
/
├── components/          # React components
│   ├── layout/         # Header, Footer, Navigation
│   ├── sections/       # Page sections (Hero, FeaturedWork, etc.)
│   ├── shared/         # Reusable components
│   └── ui/             # UI primitives (Button, Card, etc.)
│
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page (manual edits preserved!)
│   ├── WorkPage.tsx    # Projects gallery
│   ├── AboutPage.tsx   # About section
│   └── ContactPage.tsx # Multi-step contact form
│
├── hooks/              # Custom React hooks
│   └── useProjects.ts  # Fetch projects from backend
│
├── supabase/           # Backend (Deno + Hono)
│   └── functions/server/
│       ├── index.tsx         # Main server
│       ├── projects_db.tsx   # Projects API
│       ├── about_db.tsx      # About content API
│       └── landing_db.tsx    # Landing content API
│
├── styles/             # Global styles
│   └── globals.css     # Tailwind v4 + custom styles
│
└── utils/              # Helper functions
    └── supabase/       # Supabase config
```

---

## 🎨 Tech Stack

**Frontend:**
- React 18
- Tailwind CSS v4
- Framer Motion (motion/react)
- TypeScript

**Backend:**
- Supabase (KV Store)
- Deno
- Hono (Web framework)

**Deployment:**
- Figma Make (Auto-deployed)

---

## 📚 Documentation

- **Quick Start:** `/QUICK_START.md` - Get started in 2 minutes
- **Content Management:** `/CONTENT_MANAGEMENT_GUIDE.md` - Full guide to editing content
- **Conversion Details:** `/CONVERSION_COMPLETE.md` - Technical details of KV store setup

---

## 🎯 Content Management

### Projects

**Location:** Supabase Table Editor → `kv_store_4ba1cc9d`  
**Keys:** `project:1`, `project:2`, etc.

**To edit:**
1. Find the project row
2. Click the `value` cell
3. Edit JSON (title, category, image_url, etc.)
4. Save
5. Refresh website

**To add:**
1. Insert new row
2. Key: `project:X` (next number)
3. Value: JSON with project data
4. Save

### About Content

**Keys:** `about:hero`, `about:bio`, `about:skills`

Edit the same way as projects.

### Landing Content

**Keys:** `landing:hero`, `landing:tagline`, `landing:cta`

Edit the same way as projects.

---

## 🔧 Development

### Critical Files (Manual Edits Preserved!)

⚠️ These files contain manual edits - do not overwrite:
- `/components/home/ParallaxHero.tsx` (if exists)
- `/pages/HomePage.tsx`

### Architecture

```
Frontend → API Routes → KV Store Functions → Database
```

- Frontend fetches from `/make-server-4ba1cc9d/projects`
- Backend uses KV store functions (get, getByPrefix, set)
- Data stored in `kv_store_4ba1cc9d` table
- Auto-initializes on first request

### Database

**Table:** `kv_store_4ba1cc9d`  
**Type:** Key-Value Store (PostgreSQL backed)  
**Format:** JSON values

**No migrations needed** - content auto-seeds on first load!

---

## 📊 Current Content

### Projects (Auto-Seeded)

1. **Recruit** - Product Design (Large, Featured)
2. **FlowTrack** - Mobile Product (Small, Featured)
3. **Finex** - Fintech (Large, Featured)
4. **Wellness App** - Health & Fitness (Small)
5. **E-Commerce Platform** - Retail (Large)
6. **Social Network** - Social Media (Small)
7. **Dashboard Analytics** - Data Visualization (Large)

### About Content (Auto-Seeded)

- Hero section
- Bio/Story section
- Skills section

### Landing Content (Auto-Seeded)

- Hero title
- Tagline
- CTA section

---

## 🚀 Deployment

Your site auto-deploys through Figma Make.

**Live URL:** Your Supabase project URL

---

## 🛠️ Customization

### Change Brand Color

Edit `/styles/globals.css`:
```css
--color-primary: #a855f7; /* Purple accent */
```

### Add New Pages

1. Create component in `/pages/`
2. Add route in navigation
3. Deploy automatically

### Modify Layout

Edit components in `/components/layout/`:
- `Navbar.tsx` - Header navigation
- `Footer.tsx` - Footer content
- `MainLayout.tsx` - Page wrapper

---

## 🆘 Troubleshooting

### Projects Not Showing?

**Check console:** Press F12 → Console  
**Expected:** `✅ Loaded X projects from KV store`

**If empty:**
- Load website once (auto-initializes)
- Check Supabase Table Editor
- Verify `kv_store_4ba1cc9d` has data

### JSON Syntax Error?

Use https://jsonlint.com/ to validate your JSON.

### Need to Reset?

Delete all `project:`, `about:`, `landing:` rows from Table Editor.  
Refresh website - auto-seeds again!

---

## 📞 Support

**Documentation:** Check `/CONTENT_MANAGEMENT_GUIDE.md`  
**Supabase Dashboard:** https://supabase.com/dashboard

---

## 📄 License

This is a custom portfolio for A R Khandoker.

---

## 🎉 Status

✅ **Fully Working**  
✅ **Auto-Initialized**  
✅ **Ready to Customize**  
✅ **No Setup Required**

**Happy building!** 🚀

---

**Last Updated:** January 7, 2026  
**Version:** 2.0 (KV Store)  
**Environment:** Figma Make