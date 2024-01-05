import React from 'react';
import {
  ChatBubbleLeftEllipsisIcon,
  PresentationChartLineIcon,
  StarIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Card from '../cards/card';

const Service: React.FC = () => {
  return (
    <div
      id='servico'
      className='flex pt-8 flex-col items-center pb-8 bg-gray-100'
    >
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          O nosso serviço
        </h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          Texto exemplificativo
        </p>
      </div>
      <div className='flex gap-8 items-center py-12 mx-auto max-w-7xl px-6'>
        <Card
          img={<DocumentMagnifyingGlassIcon />}
          title={'Análises diárias'}
          description={
            'Publicação diária de análises a empresas europeias e americanas (texto exemplificativo)'
          }
        />
        <Card
          img={<PresentationChartLineIcon />}
          title={'Acompanhamento de Resultados'}
          description={
            'Texto exemplificativo, texto exemplificativo, texto exemplificativo'
          }
        />
        <Card
          img={<StarIcon />}
          title={'Tops Europeus e Americano'}
          description={
            'Texto exemplificativo, texto exemplificativo, texto exemplificativo'
          }
        />
        <Card
          img={<ChatBubbleLeftEllipsisIcon />}
          title={'Fórum da Comunidade'}
          description={
            'Texto exemplificativo, texto exemplificativo, texto exemplificativo'
          }
        />
      </div>
      <div className='flex items-center'>
        <a
          href='#'
          className='inline-block rounded-md border bg-transparent border-green-800 text-green-800 px-8 py-3 mb-4 text-base font-medium hover:bg-green-800 hover:text-white'
        >
          Perguntas Frequentes
        </a>
      </div>
    </div>
  );
};

export default Service;
