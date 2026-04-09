/**
 * ═══════════════════════════════════════════════════════════════════════════
 * IMAGE UPLOAD HANDLER - Using Supabase Storage
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles image uploads for project thumbnails
 * Stores files in Supabase Storage bucket and returns signed URLs
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { Hono } from "npm:hono";
import { createClient } from "npm:@supabase/supabase-js@2.39.3";

const app = new Hono();

const BUCKET_NAME = 'make-4ba1cc9d-project-images';

// Get Supabase client with service role
function getSupabaseClient() {
  const url = Deno.env.get('SUPABASE_URL');
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  
  if (!url || !key) {
    console.error('❌ Missing Supabase environment variables in upload_handler');
    throw new Error('Missing Supabase configuration');
  }

  return createClient(url, key);
}

// Initialize storage bucket
let bucketInitialized = false;

async function ensureBucketExists() {
  if (bucketInitialized) return;

  try {
    const supabase = getSupabaseClient();
    
    console.log('🪣 Checking if storage bucket exists...');
    
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME);
    
    if (!bucketExists) {
      console.log('📦 Creating storage bucket...');
      const { error } = await supabase.storage.createBucket(BUCKET_NAME, {
        public: false, // Private bucket for security
        fileSizeLimit: 5242880, // 5MB limit
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
      });
      
      if (error) {
        console.error('❌ Error creating bucket:', error);
      } else {
        console.log('✅ Storage bucket created!');
      }
    } else {
      console.log('✅ Storage bucket already exists');
    }
    
    bucketInitialized = true;
  } catch (error) {
    console.error('❌ Bucket initialization error:', error);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// Route: POST /upload-image
// Upload an image and return the signed URL
// ═══════════════════════════════════════════════════════════════════════════
app.post('/make-server-4ba1cc9d/upload-image', async (c) => {
  try {
    await ensureBucketExists();
    
    console.log('📤 Processing image upload...');
    
    // Get the uploaded file from form data
    const formData = await c.req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return c.json({
        success: false,
        error: 'No file provided'
      }, 400);
    }
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      return c.json({
        success: false,
        error: 'File must be an image'
      }, 400);
    }
    
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return c.json({
        success: false,
        error: 'File size must be less than 5MB'
      }, 400);
    }
    
    // Generate unique filename
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(7);
    const fileExt = file.name.split('.').pop() || 'jpg';
    const fileName = `project-${timestamp}-${randomStr}.${fileExt}`;
    
    console.log(`📁 Uploading file: ${fileName}`);
    
    // Convert file to ArrayBuffer
    const fileBuffer = await file.arrayBuffer();
    
    // Upload to Supabase Storage
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, fileBuffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false
      });
    
    if (error) {
      console.error('❌ Upload error:', error);
      return c.json({
        success: false,
        error: 'Failed to upload file',
        details: error.message
      }, 500);
    }
    
    console.log(`✅ File uploaded: ${data.path}`);
    
    // Create a signed URL (valid for 1 year)
    const { data: urlData, error: urlError } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(fileName, 31536000); // 1 year in seconds
    
    if (urlError) {
      console.error('❌ Error creating signed URL:', urlError);
      return c.json({
        success: false,
        error: 'Failed to create signed URL',
        details: urlError.message
      }, 500);
    }
    
    console.log(`🔗 Signed URL created`);
    
    return c.json({
      success: true,
      url: urlData.signedUrl,
      fileName: fileName,
      message: 'Image uploaded successfully'
    });
    
  } catch (error) {
    console.error('❌ Error uploading image:', error);
    return c.json({
      success: false,
      error: 'Failed to upload image',
      details: error.message
    }, 500);
  }
});

export default app;
