// src/components/Layout/Sidebar.tsx
import React from 'react';
import { 
  LayoutDashboard, 
  CupSoda 
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <nav>
        <button 
          onClick={() => onPageChange('dashboard')}
          className={`w-full flex items-center gap-2 p-2 rounded mb-2 ${
            currentPage === 'dashboard' 
              ? 'bg-blue-600 text-white' 
              : 'hover:bg-gray-700'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </button>
        <button 
          onClick={() => onPageChange('juice-management')}
          className={`w-full flex items-center gap-2 p-2 rounded ${
            currentPage === 'juice-management' 
              ? 'bg-blue-600 text-white' 
              : 'hover:bg-gray-700'
          }`}
        >
          <CupSoda className="w-5 h-5" />
          Juice Management
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;