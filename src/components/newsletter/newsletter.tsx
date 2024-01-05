import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className='bg-white dark:bg-green-800'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-md sm:text-center'>
          <h2 className='mb-4 text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl dark:text-white'>
            Quer receber mais informação sobre ações?
          </h2>
          <p className='text-gray-300 pb-6'>
            Enviamos artigos (texto exemplificativo)
          </p>
          <form action='#'>
            <div className='items-center mx-auto space-y-4 max-w-screen-sm sm:flex sm:space-y-0 flex-wrap gap-6 justify-center'>
              <div className='relative w-full flex'>
                <label className='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Email
                </label>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <svg
                    className='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                  </svg>
                </div>
                <input
                  className='block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Enter your email'
                  type='email'
                  id='email'
                  required={true}
                />
              </div>
              <div>
                <button
                  type='submit'
                  className='w-60 py-3 px-5 text-sm font-medium text-center text-white rounded-lg ring-1 ring-inset ring-white cursor-pointer bg-primary-700 sm:rounded-lg hover:bg-white hover:text-green-800 focus:ring-4 dark:focus:ring-primary-800'
                >
                  Junte-se à nossa newsletter
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
