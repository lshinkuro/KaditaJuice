import React from 'react';
import { Link } from 'react-scroll';

interface LinkItem {
  name: string;
  to?: string;
  href?: string;
}

interface LinkSection {
  title: string;
  items: LinkItem[];
}

const links: LinkSection[] = [
  {
    title: 'Menu',
    items: [
      { name: 'Fresh Juices', to: 'fresh-juices' },
      { name: 'Alpukat Kocok', to: 'alpukat-kocok' },
      { name: 'Best Seller', to: 'best-seller' },
    ]
  },
  {
    title: 'Perusahaan',
    items: [
      { name: 'Tentang Kami', to: 'about' },
      { name: 'Lokasi', to: 'maps' },
      { name: 'Karir', to: 'career' },
    ]
  },
  {
    title: 'Hubungi Kami',
    items: [
      { name: 'WhatsApp', href: 'https://wa.me/6283824266702' },
      { name: 'Instagram', href: 'https://instagram.com/kadita.juice' },
      { name: 'Facebook', href: 'https://facebook.com/kadita.juice' },
    ]
  }
];

export const FooterLinks: React.FC = () => (
  <div 
    className="grid grid-cols-2 md:grid-cols-3 gap-8" 
    aria-label="Footer Navigation"
  >
    {links.map((section) => (
      <div key={section.title}>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
          {section.title}
        </h3>
        <ul className="mt-4 space-y-4">
          {section.items.map((item) => (
            <li key={item.name}>
              {item.to ? (
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-base text-gray-300 hover:text-white cursor-pointer transition-colors"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="text-base text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.name} page`}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);