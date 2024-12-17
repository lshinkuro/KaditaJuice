import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const Maps: React.FC = () => (
  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Kunjungi Kami</h2>
        <p className="text-gray-600">
          Temukan kesegaran jus kami di lokasi berikut
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Kadita Juice</h3>
              <p className="text-gray-600 mt-1">
                Jl. Raya Kadita No. 123<br />
                Kecamatan Kadita, Kota Kadita<br />
                Jawa Tengah, Indonesia
              </p>
              <a
                href="https://goo.gl/maps/your-maps-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-500 hover:text-green-600 mt-2"
              >
                Petunjuk Arah →
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900">Jam Operasional</h4>
              <p className="text-gray-600">Setiap Hari: 08.00 - 21.00 WIB</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Kontak</h4>
              <p className="text-gray-600">
                WhatsApp: <a href="tel:+6283824266702" className="text-green-500">+62 838-2426-6702</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR-MAPS-EMBED-CODE"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kadita Juice Location"
          />
        </div>
      </div>
    </div>
  </section>
);