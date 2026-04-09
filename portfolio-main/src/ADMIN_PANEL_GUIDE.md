# Admin Panel Guide

Easy-to-use interface for managing your portfolio projects!

---

## 🎯 Quick Access

**URL:** `/admin/projects`

You can access the admin panel from:
- Desktop navigation (top right - purple "Admin" link)
- Mobile menu (purple "Admin" link with lock icon)
- Direct URL: `https://your-site.com/admin/projects`

---

## ✨ Features

### ✅ What You Can Do

- **View All Projects** - See all your portfolio projects in a grid
- **Add New Projects** - Create projects with a simple form
- **Edit Projects** - Update any project details
- **Delete Projects** - Remove projects you no longer need
- **No JSON Required** - User-friendly forms instead of raw data editing

### 🎨 Project Fields

When creating or editing a project, you can set:

| Field | Required | Description |
|-------|----------|-------------|
| **Title** | ✅ Yes | Project name (e.g., "Recruit") |
| **Category** | ✅ Yes | Type of work (e.g., "Product Design") |
| **Metric/Tagline** | ✅ Yes | Brief description (e.g., "Conversion Focused") |
| **Project Thumbnail** | ✅ Yes | Upload image from your computer |
| **Description** | ❌ Optional | Longer project description |
| **Project Link** | ❌ Optional | External URL (Behance, Dribbble, live site, etc.) |
| **Client** | ❌ Optional | Client name |
| **Year** | ❌ Optional | Project year |
| **Card Size** | ✅ Yes | Small or Large (affects layout) |
| **Display Order** | ✅ Yes | Number for sorting (lower = appears first) |
| **Featured** | ✅ Yes | Show on homepage? (toggle switch) |

---

## 📝 How to Use

### Creating a New Project

1. Click **"Add Project"** button (top right)
2. Fill in the form:
   - **Title:** Your project name
   - **Category:** What type of project is it?
   - **Metric:** A catchy tagline or key metric
   - **Project Thumbnail:** Click "Choose File" and select an image
   - **Click "Upload"** to upload the image (shows progress bar)
   - **Description:** (Optional) Detailed description
   - **Project Link:** (Optional) External URL (Behance, Dribbble, live site, etc.)
   - **Client:** (Optional) Who was it for?
   - **Year:** (Optional) When was it done?
   - **Card Size:** Choose Small or Large
   - **Display Order:** Enter a number (1 = first, 2 = second, etc.)
   - **Featured:** Toggle ON to show on homepage
3. Click **"Create"**
4. Done! Your project appears immediately

### Editing an Existing Project

1. Find the project card
2. Click **"Edit"** button
3. Update any fields
4. Click **"Update"**
5. Changes save instantly!

### Deleting a Project

1. Find the project card
2. Click the **trash icon** (🗑️)
3. Confirm deletion
4. Project is removed from KV store

---

## 💡 Pro Tips

### Display Order Strategy

Use increments of 10 for easy reordering:
- Project 1: `10`
- Project 2: `20`
- Project 3: `30`

This way, you can insert new projects between existing ones without renumbering everything!

### Card Size Strategy

**Large Cards:**
- Best for hero projects
- More visual impact
- Use for your strongest work

**Small Cards:**
- Good for secondary projects
- Creates visual variety
- More projects fit above the fold

### Featured Projects

- Featured projects appear on homepage
- Limit to 3-6 featured projects for best impact
- Choose your absolute best work
- Mix of large and small creates nice grid

### Project Links

- When you add a **Project Link**, clicking the project card will open that URL in a new tab
- Perfect for linking to:
  - Behance case studies
  - Dribbble shots
  - Live websites
  - GitHub repositories
  - Any external URL
- If you **don't add a link**, the project card will still display but won't be clickable
- Examples:
  - `https://behance.net/gallery/123456789/My-Project`
  - `https://dribbble.com/shots/123456789-My-Design`
  - `https://myproject.com`

---

## 🔄 How It Works (Technical)

### Backend Integration

The admin panel connects directly to your KV store:

1. **Create:** Generates new project ID, saves to `project:X`
2. **Read:** Fetches all `project:*` keys from KV store
3. **Update:** Overwrites existing `project:X` data
4. **Delete:** Removes `project:X` from KV store

### Image Upload System

Images are stored in Supabase Storage:

1. **Upload:** File is sent to `/upload-image` endpoint
2. **Storage:** Saved to `make-4ba1cc9d-project-images` bucket
3. **URL Generation:** Creates a signed URL (valid for 1 year)
4. **Auto-Setup:** Bucket is created automatically on first upload
5. **Security:** Private bucket with signed URLs for access

**Supported formats:** JPG, PNG, GIF, WebP  
**Max size:** 5MB per image  
**Storage:** All images stored securely in Supabase

### Real-Time Updates

- All changes save to Supabase KV store immediately
- No page refresh needed in admin panel
- Frontend pages update on next load
- No caching issues!

### Data Format

Behind the scenes, projects are stored as JSON in the `kv_store_4ba1cc9d` table:

```json
{
  "id": "1",
  "title": "Recruit",
  "category": "Product Design",
  "metric": "Conversion Focused",
  "size": "large",
  "image_url": "https://images.unsplash.com/...",
  "featured": true,
  "order_index": 1,
  "description": "",
  "project_link": "",
  "client": "",
  "year": "2024"
}
```

But you never need to see this - the admin panel handles it for you!

---

## 🆘 Troubleshooting

### Projects Not Saving?

**Check:**
- Are all required fields filled in?
- Did you upload an image successfully?
- Check browser console (F12) for errors

### Images Not Uploading?

**Solutions:**
- Make sure file is under 5MB
- Use JPG, PNG, GIF, or WebP format
- Check your internet connection
- Try a smaller image
- Look for error messages in the upload progress

### Upload Button Disabled?

**Reasons:**
- No file selected yet (click "Choose File" first)
- Image already uploaded (green checkmark visible)
- Currently uploading (wait for progress to finish)

### Can't Delete Project?

**Make sure:**
- You confirmed the deletion dialog
- You have internet connection
- Check console for error messages

### Changes Not Appearing on Site?

**Try:**
1. Refresh the homepage/work page
2. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
3. Check if project is actually saved (reload admin panel)

---

## 🔐 Security Note

The admin panel is currently **publicly accessible** via the navigation menu. 

For a production site, you should:
- Add authentication (username/password)
- Restrict access to authorized users only
- Use Supabase Auth for login

**Current setup is fine for:**
- Personal portfolios
- Internal use
- Development/testing

---

## 🎓 Next Steps

### Want to Customize the Admin Panel?

The admin panel is located at:
```
/pages/AdminProjectsPage.tsx
```

You can modify:
- Form fields
- Styling
- Validation rules
- Layout

### Want to Add More Content Types?

Currently, the admin panel only manages projects. You could extend it to manage:
- About content
- Services
- Testimonials
- Blog posts

**How:**
1. Create new admin page (e.g., `/pages/AdminAboutPage.tsx`)
2. Add routes in backend (e.g., `/supabase/functions/server/about_db.tsx`)
3. Add route in `/App.tsx`
4. Link from admin navigation

---

## 📚 Related Documentation

- **Backend API:** `/supabase/functions/server/projects_db.tsx`
- **KV Store Guide:** `/CONTENT_MANAGEMENT_GUIDE.md`
- **Quick Start:** `/QUICK_START.md`

---

## 🎉 Summary

The admin panel makes managing your portfolio **effortless**:

✅ No JSON editing required  
✅ User-friendly forms  
✅ Instant updates  
✅ Full CRUD operations  
✅ Image upload from local files  
✅ Live preview before saving  
✅ Progress bars for uploads  
✅ Mobile-friendly  
✅ Integrated with KV store + Supabase Storage  

**Just click, upload, and publish!** 🚀

---

**Questions?** Check the main README or CONTENT_MANAGEMENT_GUIDE.md