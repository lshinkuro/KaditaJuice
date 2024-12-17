// src/pages/DashboardPage.tsx
import React, { useContext } from 'react';
import { JuiceContext } from '../redux/JuiceContext';

const DashboardPage: React.FC = () => {
  const { juices } = useContext(JuiceContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Total Juice</h2>
          <p className="text-2xl">{juices.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Total Tipe Juice</h2>
          <p className="text-2xl">
            {new Set(juices.map(j => j.tipe)).size}
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Total Penjualan</h2>
          <p className="text-2xl">
            Rp {juices.reduce((total, juice) => total + juice.harga, 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;