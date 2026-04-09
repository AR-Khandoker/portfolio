/**
 * ═══════════════════════════════════════════════════════════════════════════
 * USE PROJECTS HOOK
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * React hook for fetching projects from Supabase backend
 * Automatically handles loading states and errors
 * 
 * Usage:
 * const { projects, loading, error, refetch } = useProjects();
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { useState, useEffect, useCallback } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import type { Project } from '../types';

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d/projects`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data.success) {
        // Map database fields to frontend format
        const validProjects = (data.projects || [])
          .filter((project: any) => project && project.id)
          .map((project: any) => ({
            id: project.id,
            title: project.title || 'Untitled',
            category: project.category || 'Product Design',
            metric: project.metric || '',
            size: project.size || 'small',
            link: project.link || '',
            externalLink: project.external_link || project.externalLink || '',
            imageType: 'url',
            image: project.image_url || project.image || '',
            figmaAsset: '',
            imageComponent: null,
            svgViewBox: '0 0 1920 1080',
          }));
        
        console.log(`✅ Loaded ${validProjects.length} projects from KV store`);
        setProjects(validProjects);
      } else {
        console.warn('Failed to fetch projects:', data.error);
        throw new Error(data.error || 'Failed to load projects');
      }
    } catch (err) {
      console.warn('Error fetching projects:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      // Set empty array on error to prevent white screen
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }, []); // Empty deps since projectId and publicAnonKey are constants

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects,
  };
}