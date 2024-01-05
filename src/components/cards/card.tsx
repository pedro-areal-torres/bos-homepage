import React from 'react';

const Card = ({ img, title, description }) => {
  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
      <div className='flex flex-col items-center py-6'>
        <div className='w-14 py-2'>{img}</div>
        <h5 className='text-lg font-medium text-gray-900 '>{title}</h5>
        <span className='text-sm text-gray-500 text-center py-2 px-6'>
          {description}
        </span>
      </div>
    </div>
  );
};

export default Card;
