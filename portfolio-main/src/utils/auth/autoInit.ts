/**
 * ═══════════════════════════════════════════════════════════════════════════
 * AUTO ADMIN ACCOUNT INITIALIZATION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Automatically creates the default admin account on first app load
 * No manual setup required
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { projectId, publicAnonKey } from '../supabase/info';
import { DEFAULT_ADMIN_EMAIL, DEFAULT_ADMIN_PASSWORD } from './constants';

let isInitialized = false;

/**
 * Auto-create admin account if it doesn't exist
 * Runs once per app session
 */
export async function initializeAdminAccount() {
  // Only run once
  if (isInitialized) return;
  isInitialized = true;

  // Check if we've already created the account
  const alreadyCreated = localStorage.getItem('admin_account_created');
  if (alreadyCreated) {
    console.log('✅ Admin account already initialized');
    return;
  }

  try {
    console.log('🔄 Creating default admin account...');
    
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d/auth/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          email: DEFAULT_ADMIN_EMAIL,
          password: DEFAULT_ADMIN_PASSWORD,
          name: 'Admin'
        })
      }
    );

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error('❌ Failed to parse admin creation response:', text.substring(0, 100));
      return;
    }
    
    if (response.ok && (data.user || data.userExists)) {
      localStorage.setItem('admin_account_created', 'true');
      
      if (data.userExists) {
        console.log('✅ Admin account already exists');
      } else {
        console.log('✅ Admin account created successfully');
        console.log('📧 Email:', DEFAULT_ADMIN_EMAIL);
        console.log('🔑 Password:', DEFAULT_ADMIN_PASSWORD);
      }
    } else {
      console.warn('⚠️ Admin account creation response:', data);
    }
  } catch (error) {
    console.error('❌ Failed to create admin account:', error);
  }
}