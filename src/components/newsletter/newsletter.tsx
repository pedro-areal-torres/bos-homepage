import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className='bg-white dark:bg-green-800'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-md text-center'>
          {/* Header */}
          <h2 className='mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
            Quer receber mais informação sobre ações?
          </h2>
          <p className='pb-6 text-gray-300'>Enviamos artigos (texto exemplificativo)</p>

          {/* Newsletter Form */}
          <form action='#' className='gap-6 space-y-4 sm:flex sm:flex-wrap sm:justify-center sm:space-y-0'>
            {/* Email Input */}
            <div className='relative flex w-full max-w-screen-sm'>
              <input
                type='email'
                id='email'
                className='focus:ring-primary-500 focus:border-primary-500 w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 sm:rounded-none sm:rounded-l-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400'
                placeholder='Enter your email'
                required
              />
              <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg
                  className='h-5 w-5 text-gray-500 dark:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                </svg>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='bg-primary-700 dark:focus:ring-primary-800 w-60 rounded-lg border border-transparent px-5 py-3 text-sm font-medium text-white ring-1 ring-inset ring-white hover:bg-white hover:text-green-800 focus:ring-4 sm:rounded-lg'
            >
              Junte-se à nossa newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
