// src/components/Juice/JuiceModal.tsx
import React, { useState, useContext, useEffect } from 'react';
import { convertFileToBase64 } from '../../utils/fileUtility';
import { Juice } from '../../types';
import { JuiceContext } from '../../redux/JuiceContext';

interface JuiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialJuice?: Juice;
}

const JuiceModal: React.FC<JuiceModalProps> = ({ 
  isOpen, 
  onClose, 
  initialJuice 
}) => {
  const { tambahJuice, editJuice } = useContext(JuiceContext);
  const [juice, setJuice] = useState<Juice>({
    nama: '',
    deskripsi: '',
    harga: 0,
    tipe: '',
    foto: ''
  });

  useEffect(() => {
    if (initialJuice) {
      setJuice(initialJuice);
    } else {
      // Reset form when opening for new juice
      setJuice({
        nama: '',
        deskripsi: '',
        harga: 0,
        tipe: '',
        foto: ''
      });
    }
  }, [initialJuice, isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setJuice(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const base64 = await convertFileToBase64(file);
        setJuice(prev => ({
          ...prev,
          foto: base64
        }));
      } catch (error) {
        console.error('Error converting file:', error);
      }
    }
  };

  const handleSubmit = () => {
    if (initialJuice) {
      // Edit existing juice
      editJuice(juice);
    } else {
      // Add new juice
      tambahJuice(juice);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl mb-4">
          {initialJuice ? 'Edit Juice' : 'Tambah Juice Baru'}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="nama"
            placeholder="Nama Juice"
            value={juice.nama}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="deskripsi"
            placeholder="Deskripsi"
            value={juice.deskripsi}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            rows={3}
            required
          />
          <input
            type="number"
            name="harga"
            placeholder="Harga"
            value={juice.harga}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
            min="0"
          />
          <select
            name="tipe"
            value={juice.tipe}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Pilih Tipe Juice</option>
            <option value="Buah">Juice Buah</option>
            <option value="Sayur">Juice Sayur</option>
            <option value="Campuran">Juice Campuran</option>
          </select>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
          />
          {juice.foto && (
            <img 
              src={juice.foto} 
              alt="Preview" 
              className="w-32 h-32 object-cover rounded mx-auto"
            />
          )}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              disabled={!juice.nama || !juice.tipe || juice.harga <= 0}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuiceModal;