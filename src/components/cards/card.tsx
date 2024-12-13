import React from 'react';

interface Props {
  img: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ img, title, description }) => {
  return (
    <div className='w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow'>
      <div className='flex flex-col items-center py-6'>
        <div className='w-14 py-2'>{img}</div>
        <h5 className='text-lg font-medium text-gray-900'>{title}</h5>
        <span className='px-6 py-2 text-center text-sm text-gray-500'>{description}</span>
      </div>
    </div>
  );
};

export default Card;
