import React from 'react';
import { navItems } from '../../data/nav-items';

const Header: React.FC = () => {
  return (
    <nav className='fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        {/* Logo */}
        <a href='https://flowbite.com/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <span className='text-2xl font-semibold'>Logotipo BoS</span>
        </a>

        {/* Navigation Links */}
        <div id='navbar-sticky' className='hidden w-full items-center justify-between md:flex md:w-auto'>
          <ul className='mt-4 flex flex-col space-y-2 md:mt-0 md:flex-row md:space-x-8 md:space-y-0'>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className='flex items-center gap-2 space-x-3 rtl:space-x-reverse'>
          <button
            type='button'
            className='rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
          >
            Aderir
          </button>
          <button
            type='button'
            className='rounded-lg border bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300'
          >
            Login
          </button>
          <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'
            aria-label='Toggle menu'
          >
            <svg
              className='h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
              aria-hidden='true'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
