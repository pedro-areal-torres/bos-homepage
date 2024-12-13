import React from 'react';
import {
  ChatBubbleLeftEllipsisIcon,
  PresentationChartLineIcon,
  StarIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Card from '../cards/card';

const serviceCards = [
  {
    icon: <DocumentMagnifyingGlassIcon />,
    title: 'Análises diárias',
    description: 'Publicação diária de análises a empresas europeias e americanas (texto exemplificativo)',
  },
  {
    icon: <PresentationChartLineIcon />,
    title: 'Acompanhamento de Resultados',
    description: 'Texto exemplificativo, texto exemplificativo, texto exemplificativo',
  },
  {
    icon: <StarIcon />,
    title: 'Tops Europeus e Americano',
    description: 'Texto exemplificativo, texto exemplificativo, texto exemplificativo',
  },
  {
    icon: <ChatBubbleLeftEllipsisIcon />,
    title: 'Fórum da Comunidade',
    description: 'Texto exemplificativo, texto exemplificativo, texto exemplificativo',
  },
];

const Service: React.FC = () => {
  return (
    <section id='servico' className='flex flex-col items-center bg-gray-100 pb-8 pt-8'>
      {/* Section Header */}
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>O nosso serviço</h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>Texto exemplificativo</p>
      </div>

      {/* Service Cards */}
      <div className='mx-auto flex max-w-7xl flex-wrap items-center gap-8 px-6 py-12'>
        {serviceCards.map((card, index) => (
          <Card key={index} img={card.icon} title={card.title} description={card.description} />
        ))}
      </div>

      {/* Call to Action */}
      <div className='flex items-center'>
        <a
          href='#'
          className='mb-4 inline-block rounded-md border border-green-800 bg-transparent px-8 py-3 text-base font-medium text-green-800 hover:bg-green-800 hover:text-white'
        >
          Perguntas Frequentes
        </a>
      </div>
    </section>
  );
};

export default Service;
