/**
 * ═══════════════════════════════════════════════════════════════════════════
 * AUTH ROUTES - Admin Authentication
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles admin user signup using Supabase Auth
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { Hono } from "npm:hono";
import { createClient } from "npm:@supabase/supabase-js@2.39.3";

const app = new Hono();

// Create admin user (one-time setup)
app.post("/make-server-4ba1cc9d/auth/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return c.json(
        { success: false, error: "Email and password are required" },
        400
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json(
        { success: false, error: "Invalid email format" },
        400
      );
    }

    // Validate password length
    if (password.length < 6) {
      return c.json(
        { success: false, error: "Password must be at least 6 characters" },
        400
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseKey) {
      console.error('❌ Missing Supabase environment variables');
      return c.json(
        { success: false, error: "Server configuration error" },
        500
      );
    }

    // Create Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Create user
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name: name || 'Admin' },
      // Automatically confirm the user's email since an email server hasn't been configured
      email_confirm: true,
    });

    if (error) {
      // If user already exists, return success (idempotent operation)
      if (error.message?.includes('already been registered') || error.code === 'email_exists') {
        console.log('✅ Admin user already exists:', email);
        return c.json({
          success: true,
          message: 'Admin account already exists',
          userExists: true,
        });
      }
      
      console.error('❌ Signup error:', error);
      return c.json(
        { success: false, error: error.message },
        400
      );
    }

    console.log('✅ Admin user created successfully:', email);

    return c.json({
      success: true,
      message: 'Admin account created successfully',
      user: {
        id: data.user?.id,
        email: data.user?.email,
      },
    });

  } catch (err: any) {
    console.error('❌ Signup error:', err);
    return c.json(
      { success: false, error: err.message || 'Internal server error' },
      500
    );
  }
});

export default app;