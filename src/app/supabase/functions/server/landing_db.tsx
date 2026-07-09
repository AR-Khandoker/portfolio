/**
 * ═══════════════════════════════════════════════════════════════════════════
 * LANDING PAGE CONTENT API - Using KV Store
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles landing page content from KV store
 * Manage content directly from Supabase Table Editor (kv_store_4ba1cc9d table)!
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { Hono } from "npm:hono";
import * as kv from "./kv_new.tsx";

const app = new Hono();

// Auto-initialize with seed data on first request
let initialized = false;

async function ensureInitialized() {
  if (initialized) return;
  
  try {
    console.log('🔍 Checking if landing content exists in KV store...');
    
    // Check if we have any landing content
    const existingContent = await kv.getByPrefix('landing:');
    
    if (!existingContent || existingContent.length === 0) {
      console.log('📦 Seeding initial landing content...');
      
      // Seed initial landing content
      const seedContent = [
        {
          section_key: 'hero',
          title: 'A R Khandoker',
          content: 'Product Designer crafting meaningful digital experiences',
          is_active: true,
          order_index: 1
        },
        {
          section_key: 'tagline',
          title: 'Design Philosophy',
          content: 'Creating user-centered solutions that drive business growth',
          is_active: true,
          order_index: 2
        },
        {
          section_key: 'cta',
          title: 'Let\'s Work Together',
          content: 'Ready to bring your ideas to life',
          is_active: true,
          order_index: 3
        }
      ];
      
      // Store each content section
      for (const content of seedContent) {
        await kv.set(`landing:${content.section_key}`, content);
      }
      
      console.log(`✅ Seeded ${seedContent.length} landing sections!`);
    } else {
      console.log(`✅ Found ${existingContent.length} existing landing sections`);
    }
    
    initialized = true;
  } catch (error) {
    console.error('❌ Initialization error:', error);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// Route: GET /landing
// Returns all landing page content sections
// ═══════════════════════════════════════════════════════════════════════════
app.get('/make-server-4ba1cc9d/landing', async (c) => {
  try {
    await ensureInitialized();
    
    console.log('📥 Fetching landing content from KV store...');
    
    // Get all landing content
    const content = await kv.getByPrefix('landing:');
    
    if (!content) {
      return c.json({ 
        success: true, 
        content: []
      });
    }
    
    // Filter active and sort by order_index
    const activeContent = content
      .filter(c => c.is_active !== false)
      .sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
    
    console.log(`✅ Returning ${activeContent.length} landing sections`);
    
    return c.json({ 
      success: true, 
      content: activeContent
    });
  } catch (error) {
    console.error('❌ Error fetching landing content:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to fetch landing content',
      details: error.message 
    }, 500);
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// Route: GET /landing/:section
// Returns specific section by key
// ═══════════════════════════════════════════════════════════════════════════
app.get('/make-server-4ba1cc9d/landing/:section', async (c) => {
  try {
    await ensureInitialized();
    
    const sectionKey = c.req.param('section');
    console.log(`📥 Fetching landing section: ${sectionKey}`);
    
    const content = await kv.get(`landing:${sectionKey}`);
    
    if (!content || content.is_active === false) {
      return c.json({ 
        success: false, 
        error: 'Section not found' 
      }, 404);
    }
    
    console.log(`✅ Found section: ${content.section_key}`);
    
    return c.json({ 
      success: true, 
      content
    });
  } catch (error) {
    console.error('❌ Error fetching landing section:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to fetch section',
      details: error.message 
    }, 500);
  }
});

export default app;
