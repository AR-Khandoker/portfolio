# 📚 Content Management Guide

## ✅ How Your Portfolio Works

Your portfolio is now powered by **Supabase KV Store** - a simple, flexible key-value database that works perfectly within Figma Make's environment.

**No SQL migrations needed** - everything is automatically initialized on first load! 🎉

---

## 🎯 What You Have

### ✅ Auto-Initialized Content

When you first load your portfolio, the backend automatically creates:

**Projects** (7 sample projects):
- Recruit (Product Design)
- FlowTrack (Mobile Product)
- Finex (Fintech)
- Wellness App (Health & Fitness)
- E-Commerce Platform (Retail)
- Social Network (Social Media)
- Dashboard Analytics (Data Visualization)

**About Content** (3 sections):
- Hero section
- Bio/Story section
- Skills section

**Landing Content** (3 sections):
- Hero title
- Tagline
- CTA section

---

## 🎨 Managing Content from Supabase Dashboard

### Step 1: Access Your Database

1. Go to https://supabase.com/dashboard
2. Select your project
3. Click **Table Editor** in left sidebar
4. You'll see the table: **kv_store_4ba1cc9d**

### Step 2: Understanding the KV Store

The `kv_store_4ba1cc9d` table has two columns:
- **key**: Identifies what the data is (e.g., `project:1`, `about:hero`)
- **value**: JSON object containing the actual content

### Step 3: Edit Content

To edit any content:

1. Find the row with the key you want to edit
2. Click on the **value** cell
3. Edit the JSON directly
4. Press Enter or click outside to save
5. Refresh your portfolio website - changes appear immediately!

---

## 📝 Content Structure

### Projects

**Key format**: `project:1`, `project:2`, etc.

**Value structure**:
```json
{
  "id": "1",
  "title": "Project Name",
  "category": "Product Design",
  "metric": "Conversion Focused",
  "size": "large",
  "image_url": "https://images.unsplash.com/...",
  "featured": true,
  "order_index": 1
}
```

**To add a new project**:
1. Click "Insert Row" in Table Editor
2. Key: `project:8` (next available number)
3. Value: Copy structure above and customize

**To delete a project**:
1. Find the row (e.g., `project:5`)
2. Click the row's delete button
3. Confirm deletion

### About Content

**Key format**: `about:hero`, `about:bio`, `about:skills`

**Value structure**:
```json
{
  "section_key": "hero",
  "title": "About Me",
  "content": "Your about text here",
  "is_active": true,
  "order_index": 1
}
```

### Landing Content

**Key format**: `landing:hero`, `landing:tagline`, `landing:cta`

**Value structure**:
```json
{
  "section_key": "hero",
  "title": "A R Khandoker",
  "content": "Product Designer crafting meaningful digital experiences",
  "is_active": true,
  "order_index": 1
}
```

---

## 🔧 Common Tasks

### Change a Project Image

1. Go to Table Editor → `kv_store_4ba1cc9d`
2. Find `project:1` (or whichever project)
3. Click the value field
4. Find `"image_url"` in the JSON
5. Replace with new Unsplash URL or any image URL
6. Save

Example:
```json
{
  "id": "1",
  "title": "Recruit",
  "image_url": "https://images.unsplash.com/photo-NEW-IMAGE-ID?w=1080"
}
```

### Reorder Projects

1. Edit the `order_index` value in each project
2. Lower numbers appear first (1, 2, 3...)
3. Projects will automatically sort on the frontend

### Hide/Show Content Sections

For about or landing sections:
1. Find the section (e.g., `about:bio`)
2. Change `"is_active": true` to `"is_active": false`
3. Section will no longer appear on the website

### Feature/Unfeature Projects

1. Find project in Table Editor
2. Change `"featured": true` to `"featured": false`
3. Non-featured projects won't show on homepage

---

## 🚀 Quick Tips

**✅ Always use valid JSON** - If you break the JSON syntax, the content won't load
- Use a JSON validator: https://jsonlint.com/
- Common mistakes: Missing quotes, extra commas, unbalanced brackets

**✅ Keep backups** - Before major edits, copy the value to a text file

**✅ Test changes** - After editing, refresh your portfolio to verify

**✅ Image URLs** - Use Unsplash or any publicly accessible image URL

---

## 📊 Current Status

**Database**: Supabase KV Store (`kv_store_4ba1cc9d`)  
**Auto-Init**: ✅ Yes (seeds data on first load)  
**SQL Migrations**: ❌ None needed  
**Admin Panel**: ❌ Removed - manage from Supabase Dashboard  
**Frontend**: ✅ Auto-fetches from API  

---

## 🆘 Troubleshooting

### Projects not showing?

**Check console logs**:
1. Press F12 (Developer Tools)
2. Go to Console tab
3. Look for server responses from `/projects` endpoint

**Check server logs**:
1. Backend automatically initializes on first request
2. Should see "✅ Seeded X projects" in logs

### Content not updating?

1. **Hard refresh**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Check KV store**: Verify your changes saved in Table Editor
3. **Valid JSON**: Ensure JSON syntax is correct

### Need to reset everything?

1. Go to Table Editor
2. Delete all rows with keys starting with:
   - `project:`
   - `about:`
   - `landing:`
3. Refresh your portfolio
4. Backend will re-seed with original sample data

---

## 📞 Need Help?

**Database Table**: `kv_store_4ba1cc9d`  
**Supabase Dashboard**: https://supabase.com/dashboard  
**API Endpoint**: `https://YOUR_PROJECT.supabase.co/functions/v1/make-server-4ba1cc9d/projects`  

---

**Last Updated**: January 7, 2026  
**Status**: ✅ Fully Working with KV Store  
**No Setup Required**: Content auto-initializes! 🎉
