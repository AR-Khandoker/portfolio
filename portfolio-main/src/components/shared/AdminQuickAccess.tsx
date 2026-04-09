/**
 * Admin Quick Access Card
 * Use this component anywhere to provide a quick link to the admin dashboard
 */

import { Link } from 'react-router-dom';
import { Lock, Plus, Pencil, Upload } from 'lucide-react';
import { Button } from '../ui/button';

export function AdminQuickAccess() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <Link to="/admin/projects">
        <div className="bg-black text-white rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all hover:scale-105 max-w-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Lock className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Admin Dashboard</h3>
              <p className="text-white/60 text-xs">Manage your projects</p>
            </div>
          </div>
          
          <div className="flex gap-2 mb-4">
            <div className="flex items-center gap-1 text-xs text-white/80 bg-white/10 px-2 py-1 rounded">
              <Plus className="w-3 h-3" />
              Add
            </div>
            <div className="flex items-center gap-1 text-xs text-white/80 bg-white/10 px-2 py-1 rounded">
              <Pencil className="w-3 h-3" />
              Edit
            </div>
            <div className="flex items-center gap-1 text-xs text-white/80 bg-white/10 px-2 py-1 rounded">
              <Upload className="w-3 h-3" />
              Upload
            </div>
          </div>
          
          <Button className="w-full bg-secondary hover:bg-secondary/90 text-black">
            Open Admin Panel →
          </Button>
        </div>
      </Link>
    </div>
  );
}
