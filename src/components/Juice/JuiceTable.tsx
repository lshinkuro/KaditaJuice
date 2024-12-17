// src/components/Juice/JuiceTable.tsx
import React, { useContext } from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { JuiceContext } from '../../redux/JuiceContext';
import { Juice } from '../../types';

interface JuiceTableProps {
  onEditJuice: (juice: Juice) => void;
}

const JuiceTable: React.FC<JuiceTableProps> = ({ onEditJuice }) => {
  const { juices, hapusJuice } = useContext(JuiceContext);

  return (
    <div className="bg-white shadow-md rounded m-6 mt-0">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">Foto</th>
            <th className="p-3 text-left">Nama</th>
            <th className="p-3 text-left">Deskripsi</th>
            <th className="p-3 text-left">Harga</th>
            <th className="p-3 text-left">Tipe</th>
            <th className="p-3 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {juices.map((juice) => (
            <tr key={juice.id} className="border-b hover:bg-gray-50">
              <td className="p-3">
                {juice.foto && (
                  <img 
                    src={juice.foto} 
                    alt={juice.nama} 
                    className="w-16 h-16 object-cover rounded"
                  />
                )}
              </td>
              <td className="p-3">{juice.nama}</td>
              <td className="p-3">{juice.deskripsi}</td>
              <td className="p-3">Rp {juice.harga.toLocaleString()}</td>
              <td className="p-3">{juice.tipe}</td>
              <td className="p-3 flex gap-2">
                <button 
                  onClick={() => onEditJuice(juice)} 
                  className="text-blue-500 hover:text-blue-700"
                  title="Edit"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => hapusJuice(juice.id!)} 
                  className="text-red-500 hover:text-red-700"
                  title="Hapus"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JuiceTable;