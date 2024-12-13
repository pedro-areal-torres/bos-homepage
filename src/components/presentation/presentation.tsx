import React from 'react';

const Presentation: React.FC = () => {
  return (
    <section className='bg-green-800'>
      <div className='relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center lg:px-0'>
        {/* Header */}
        <h1 className='text-4xl font-bold tracking-tight text-white lg:text-6xl'>
          Serviço Profissional de Apoio ao Investidor em Ações
        </h1>
        {/* Description */}
        <p className='mt-6 text-xl text-white'>
          Análises diárias para identificar as melhores oportunidades de investimento, fornecendo os detalhes ... (texto
          incompleto exemplificativo)
        </p>
        {/* Call to Actions */}
        <div className='mt-8 flex gap-4'>
          <a
            href='#servico'
            className='inline-block rounded-md border border-transparent border-white bg-transparent px-8 py-3 text-base font-medium text-white hover:bg-green-700'
          >
            O nosso Serviço
          </a>
          <a
            href='#rentabilidade'
            className='inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100'
          >
            Histórico de Rentabilidade
          </a>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
