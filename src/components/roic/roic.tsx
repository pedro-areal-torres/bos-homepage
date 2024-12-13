import React from 'react';

const Roic: React.FC = () => {
  return (
    <section id='rentabilidade' className='pb-12'>
      {/* Section Header */}
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Rentabilidade</h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>Texto exemplificativo</p>
      </div>

      {/* Content Section */}
      <div className='mt-8 flex flex-col items-center'>
        <div className='mx-auto border border-gray-600 px-80 py-56 text-center'>
          <p>Imagem + Tabela com Track Record</p>
        </div>
      </div>
    </section>
  );
};

export default Roic;
