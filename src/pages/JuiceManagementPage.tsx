// src/pages/JuiceManagementPage.tsx
import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import JuiceTable from '../components/Juice/JuiceTable';
import JuiceModal from '../components/Juice/JuiceModal';
import { Juice } from '../types';

const JuiceManagementPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJuice, setSelectedJuice] = useState<Juice | undefined>(undefined);

  const handleEditJuice = (juice: Juice) => {
    setSelectedJuice(juice);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJuice(undefined);
  };

  return (
    <>
      {/* Header Juice Management */}
      <div className="flex justify-between items-center mb-6 p-6 pb-0">
        <h1 className="text-3xl font-bold">Daftar Juice</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          <PlusCircle className="w-5 h-5" />
          Tambah Juice Baru
        </button>
      </div>
      
      {/* Juice Table */}
      <JuiceTable onEditJuice={handleEditJuice} />

      {/* Juice Modal */}
      <JuiceModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        initialJuice={selectedJuice} 
      />
    </>
  );
};

export default JuiceManagementPage;