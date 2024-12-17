import React from 'react';
import { UserDetails } from '../../types';

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
  <div className="space-y-4 mt-4">
    <h3 className="font-semibold text-lg">Data Pemesan</h3>
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Nama
      </label>
      <input
        type="text"
        id="name"
        value={userDetails.name}
        onChange={(e) => onChange({ ...userDetails, name: e.target.value })}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        required
      />
    </div>
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
        Nomor Telepon
      </label>
      <input
        type="tel"
        id="phone"
        value={userDetails.phone}
        onChange={(e) => onChange({ ...userDetails, phone: e.target.value })}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        required
      />
    </div>
    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
        Alamat
      </label>
      <textarea
        id="address"
        value={userDetails.address}
        onChange={(e) => onChange({ ...userDetails, address: e.target.value })}
        rows={3}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        required
      />
    </div>
    {error && (
      <p className="text-red-500 text-sm">{error}</p>
    )}
  </div>
);