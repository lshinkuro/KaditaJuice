import React from 'react';
import { UserDetails } from '../../types';
import { User, Phone, MapPin } from 'lucide-react';

interface UserDetailsFormProps {
  userDetails: UserDetails;
  onChange: (details: UserDetails) => void;
  error: string;
}

export const UserDetailsForm: React.FC<UserDetailsFormProps> = ({
  userDetails,
  onChange,
  error
}) => (
  <div className="space-y-6 mt-6 max-w-2xl mx-auto">
    <div className="border-b border-gray-200 pb-4">
      <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <User className="w-6 h-6 text-green-600" />
        Data Pemesan
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Mohon isi data pemesan dengan lengkap dan benar
      </p>
    </div>

    <div className="space-y-5">
      <div className="relative">
        <label 
          htmlFor="name" 
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Nama Lengkap
        </label>
        <input
          type="text"
          id="name"
          placeholder="Masukkan nama lengkap Anda"
          value={userDetails.name}
          onChange={(e) => onChange({ ...userDetails, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm placeholder:text-gray-400 text-gray-800"
          required
        />
      </div>

      <div className="relative">
        <label 
          htmlFor="phone" 
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Nomor Telepon
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="Contoh: 08123456789"
            value={userDetails.phone}
            onChange={(e) => onChange({ ...userDetails, phone: e.target.value })}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm placeholder:text-gray-400 text-gray-800"
            required
          />
        </div>
      </div>

      <div className="relative">
        <label 
          htmlFor="address" 
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Alamat Lengkap
        </label>
        <div className="relative">
          <div className="absolute top-3 left-4">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="address"
            placeholder="Masukkan alamat lengkap pengiriman"
            value={userDetails.address}
            onChange={(e) => onChange({ ...userDetails, address: e.target.value })}
            rows={4}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200 bg-white shadow-sm placeholder:text-gray-400 text-gray-800 resize-none"
            required
          />
        </div>
      </div>
    </div>

    {error && (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md mt-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-red-700">
              {error}
            </p>
          </div>
        </div>
      </div>
    )}
  </div>
);

export default UserDetailsForm;