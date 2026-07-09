import { useState, useEffect, useCallback } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export interface MotionVideo {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail_url: string;
  video_url: string;
  client?: string;
  year?: string;
  featured: boolean;
  order_index: number;
}

interface UseMotionVideosReturn {
  videos: MotionVideo[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

// Motion videos are stored via the /projects endpoint with metric === '__motion__'
// so they work without a separate edge function deployment.
// Field mapping: thumbnail_url → image_url, video_url → link
export function useMotionVideos(): UseMotionVideosReturn {
  const [videos, setVideos] = useState<MotionVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d/projects`,
        { headers: { Authorization: `Bearer ${publicAnonKey}` } },
      );

      if (!res.ok) throw new Error(`Server error ${res.status}`);

      const data = await res.json();
      if (data.success) {
        const motionItems = (data.projects || [])
          .filter((p: any) => p.metric === '__motion__')
          .map((p: any): MotionVideo => ({
            id: p.id,
            title: p.title || '',
            category: p.category || 'Animation',
            description: p.description || '',
            thumbnail_url: p.image_url || '',
            video_url: p.link || '',
            client: p.client || '',
            year: p.year || '',
            featured: p.featured || false,
            order_index: p.order_index || 0,
          }))
          .sort((a: MotionVideo, b: MotionVideo) => a.order_index - b.order_index);

        setVideos(motionItems);
      } else {
        throw new Error(data.error || 'Failed to load videos');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setVideos([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return { videos, loading, error, refetch: fetchVideos };
}
