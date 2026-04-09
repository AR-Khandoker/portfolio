/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SUPABASE CLIENT SINGLETON
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Single shared instance of Supabase client to avoid multiple instances
 * Import this instead of creating new clients
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

// Create a single shared instance
export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      storageKey: 'admin-auth-token',
    }
  }
);
