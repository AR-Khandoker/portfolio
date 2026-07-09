/**
 * Motion Videos API — KV Store
 * CRUD for the Motion Graphics section.
 * KV prefix: "motion:"
 */

import { Hono } from "npm:hono";
import * as kv from "./kv_new.tsx";

const app = new Hono();

let initialized = false;

async function ensureInitialized() {
  if (initialized) return;
  try {
    const existing = await kv.getByPrefix('motion:');
    if (!existing || existing.length === 0) {
      const seed = [
        {
          id: '1',
          title: 'Brand Identity Animation',
          category: 'Motion Poster',
          description: 'Dynamic brand reveal animation blending typography, logo motion and colour storytelling.',
          thumbnail_url: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop',
          video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          client: 'Tech Startup',
          year: '2024',
          featured: true,
          order_index: 1,
        },
        {
          id: '2',
          title: 'Product Launch Reel',
          category: 'Visual Effects',
          description: 'High-energy product reveal with kinetic typography and seamless transitions.',
          thumbnail_url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop',
          video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          client: 'Consumer Electronics',
          year: '2024',
          featured: false,
          order_index: 2,
        },
        {
          id: '3',
          title: 'University Promo Video',
          category: 'Brand Video',
          description: 'Full promotional video combining motion graphics, live footage overlays and brand typography.',
          thumbnail_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop',
          video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          client: 'Daffodil International University',
          year: '2023',
          featured: false,
          order_index: 3,
        },
      ];
      for (const v of seed) await kv.set(`motion:${v.id}`, v);
    }
    initialized = true;
  } catch (err) {
    console.error('motion_db init error:', err);
  }
}

// GET all
app.get('/make-server-4ba1cc9d/motion-videos', async (c) => {
  try {
    await ensureInitialized();
    const videos = await kv.getByPrefix('motion:');
    const sorted = (videos || []).sort((a: any, b: any) => (a.order_index || 0) - (b.order_index || 0));
    return c.json({ success: true, videos: sorted, count: sorted.length });
  } catch (err) {
    return c.json({ success: false, error: 'Failed to fetch motion videos' }, 500);
  }
});

// GET single
app.get('/make-server-4ba1cc9d/motion-videos/:id', async (c) => {
  try {
    await ensureInitialized();
    const id = c.req.param('id');
    const video = await kv.get(`motion:${id}`);
    if (!video) return c.json({ success: false, error: 'Not found' }, 404);
    return c.json({ success: true, video });
  } catch (err) {
    return c.json({ success: false, error: 'Failed to fetch video' }, 500);
  }
});

// POST create
app.post('/make-server-4ba1cc9d/motion-videos', async (c) => {
  try {
    await ensureInitialized();
    const body = await c.req.json();
    const existing = await kv.getByPrefix('motion:');
    const maxId = (existing || []).reduce((m: number, v: any) => Math.max(m, parseInt(v.id) || 0), 0);
    const newId = (maxId + 1).toString();
    const video = {
      id: newId,
      title: body.title || '',
      category: body.category || 'Animation',
      description: body.description || '',
      thumbnail_url: body.thumbnail_url || '',
      video_url: body.video_url || '',
      client: body.client || '',
      year: body.year || new Date().getFullYear().toString(),
      featured: body.featured || false,
      order_index: body.order_index || maxId + 1,
    };
    await kv.set(`motion:${newId}`, video);
    return c.json({ success: true, video, message: 'Motion video created' });
  } catch (err) {
    return c.json({ success: false, error: 'Failed to create video' }, 500);
  }
});

// PUT update
app.put('/make-server-4ba1cc9d/motion-videos/:id', async (c) => {
  try {
    await ensureInitialized();
    const id = c.req.param('id');
    const existing = await kv.get(`motion:${id}`);
    if (!existing) return c.json({ success: false, error: 'Not found' }, 404);
    const body = await c.req.json();
    const updated = { ...existing, ...body, id };
    await kv.set(`motion:${id}`, updated);
    return c.json({ success: true, video: updated });
  } catch (err) {
    return c.json({ success: false, error: 'Failed to update video' }, 500);
  }
});

// DELETE
app.delete('/make-server-4ba1cc9d/motion-videos/:id', async (c) => {
  try {
    await ensureInitialized();
    const id = c.req.param('id');
    const existing = await kv.get(`motion:${id}`);
    if (!existing) return c.json({ success: false, error: 'Not found' }, 404);
    await kv.del(`motion:${id}`);
    return c.json({ success: true, message: 'Deleted' });
  } catch (err) {
    return c.json({ success: false, error: 'Failed to delete video' }, 500);
  }
});

export default app;
