import React from 'react';

import { mainLinks, socialLinks } from '../data/footer-links';

const Footer: React.FC = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8'>
        <nav className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12' aria-label='Footer'>
          {mainLinks.map(({ name, href }) => (
            <div key={name} className='pb-6'>
              <a href={href} className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
                {name}
              </a>
            </div>
          ))}
        </nav>
        <div className='mt-10 flex justify-center space-x-10'>
          {socialLinks.map(({ name, href, icon }) => (
            <a key={name} href={href} className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>{name}</span>
              {icon}
            </a>
          ))}
        </div>
        <p className='mt-10 text-center text-xs leading-5 text-gray-500'>&copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
