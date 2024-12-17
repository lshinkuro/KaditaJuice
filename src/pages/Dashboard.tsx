// src/App.tsx
import React, { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Breadcrumb from '../components/Layout/Breadcrump';
import DashboardPage from './DashboardPage';
import JuiceManagementPage from './JuiceManagementPage';
import { JuiceProvider } from '../redux/JuiceContext';

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('dashboard');

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'juice-management':
        return <JuiceManagementPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <JuiceProvider>
      <div className="flex h-screen bg-gray-100">
        <Sidebar 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
        />
        
        <div className="flex-1 overflow-y-auto">
          <Breadcrumb currentPage={currentPage} />
          {renderPage()}
        </div>
      </div>
    </JuiceProvider>
  );
};

export default Dashboard;