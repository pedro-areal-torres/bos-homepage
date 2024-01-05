import React from 'react';

const Presentation: React.FC = () => {
  return (
    <div className='bg-green-800'>
      <div className='relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center pt-44 lg:px-0'>
        <h1 className='text-4xl font-bold tracking-tight text-white lg:text-6xl'>
          Serviço Profissional de Apoio ao Investidor em Ações
        </h1>
        <p className='mt-6 text-xl text-white'>
          Análises diárias para identificar as melhores oportunidades de
          investimento, fornecendo os detalhes ... (texto incompleto
          exemplificativo)
        </p>
        <div className='flex gap-4'>
          <a
            href='#servico'
            className='mt-8 inline-block rounded-md border border-transparent bg-transparent border-white text-white px-8 py-3 text-base font-medium hover:bg-green-700'
          >
            O nosso Serviço
          </a>
          <a
            href='#rentabilidade'
            className='mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100'
          >
            Histórico de Rentabilidade
          </a>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
