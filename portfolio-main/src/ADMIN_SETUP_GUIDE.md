# Admin Authentication Setup Guide

Your admin panel is now password-protected! Follow these steps to create your admin account and start managing your portfolio.

---

## 🔐 First-Time Setup

### Step 1: Create Your Admin Account

To create an admin account, you need to call the signup API endpoint. You can do this using one of these methods:

#### Option A: Using Browser Console (Easiest)

1. Open your website in a browser
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. Paste and run this code (replace with your details):

```javascript
fetch('https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-4ba1cc9d/auth/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ANON_KEY'
  },
  body: JSON.stringify({
    email: 'admin@example.com',
    password: 'your-secure-password',
    name: 'Admin'
  })
})
.then(res => res.json())
.then(data => console.log('✅ Account created:', data))
.catch(err => console.error('❌ Error:', err));
```

**Where to find your credentials:**
- Find `YOUR_PROJECT_ID` and `YOUR_ANON_KEY` in `/utils/supabase/info.tsx`

#### Option B: Using curl (Command Line)

```bash
curl -X POST \
  https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-4ba1cc9d/auth/signup \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -d '{
    "email": "admin@example.com",
    "password": "your-secure-password",
    "name": "Admin"
  }'
```

#### Option C: Using Postman/Insomnia

1. **Method:** POST
2. **URL:** `https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-4ba1cc9d/auth/signup`
3. **Headers:**
   - `Content-Type`: `application/json`
   - `Authorization`: `Bearer YOUR_ANON_KEY`
4. **Body (JSON):**
```json
{
  "email": "admin@example.com",
  "password": "your-secure-password",
  "name": "Admin"
}
```

### Step 2: Login to Admin Panel

Once your account is created:

1. Go to `/admin/login` on your website
2. Enter your email and password
3. Click **Sign In**
4. You'll be redirected to the admin panel at `/admin/projects`

---

## 🎯 How It Works

### Protected Routes

The following routes are now password-protected:
- `/admin/projects` - Projects management panel

### Public Routes

These routes are still publicly accessible:
- `/` - Homepage
- `/work` - Works page
- `/about` - About page
- `/contact` - Contact page
- `/admin/login` - Login page

### Session Management

- Your session persists across browser refreshes
- Sessions are managed by Supabase Auth
- Click **Logout** in the admin panel to end your session
- If you're logged in and visit `/admin/login`, you'll be redirected to the admin panel

---

## 🔑 Password Requirements

- Minimum 6 characters
- Valid email format required
- Passwords are securely hashed by Supabase

---

## 🆘 Troubleshooting

### "Invalid email or password" error

**Possible causes:**
1. Account doesn't exist yet - run the signup script first
2. Wrong email or password - double-check your credentials
3. Caps Lock is on

### Can't access admin panel

**Solutions:**
1. Make sure you're logged in - visit `/admin/login`
2. Check browser console (F12) for errors
3. Try clearing browser cache and cookies
4. Logout and login again

### Forgot password?

Currently, there's no "forgot password" feature. To reset:

1. Go to Supabase Dashboard → Authentication → Users
2. Find your user
3. Click "..." → Reset password
4. Or create a new admin user using the signup script

### Multiple admin accounts

You can create multiple admin accounts by running the signup script with different email addresses. Each admin will have full access to the admin panel.

---

## 🔐 Security Best Practices

### ✅ Do's

- Use a strong, unique password
- Don't share your admin credentials
- Logout when using shared computers
- Use a password manager
- Keep your Supabase keys secure

### ❌ Don'ts

- Don't use simple passwords like "123456" or "password"
- Don't commit your credentials to Git
- Don't share your admin login URL publicly
- Don't reuse passwords from other sites

---

## 🚀 Next Steps

After logging in, you can:

1. ✅ Add new projects
2. ✅ Edit existing projects
3. ✅ Delete projects
4. ✅ Upload project images
5. ✅ Add project links (Behance, Dribbble, etc.)
6. ✅ Manage featured projects

All changes are saved instantly to the KV store!

---

## 📚 Related Documentation

- **Admin Panel Guide:** `/ADMIN_PANEL_GUIDE.md`
- **Content Management:** `/CONTENT_MANAGEMENT_GUIDE.md`
- **Quick Start:** `/QUICK_START.md`

---

## 🎉 Summary

Your admin panel is now secure with password protection! 

**To get started:**
1. Run the signup script in browser console
2. Visit `/admin/login`
3. Enter your credentials
4. Start managing your portfolio!

**Questions?** Check the troubleshooting section or the other documentation files.

🔒 **Your portfolio is now protected!**
