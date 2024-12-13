import React from 'react';

const About: React.FC = () => {
  return (
    <section className='overflow-hidden bg-gray-100'>
      <div className='mx-auto flex max-w-7xl flex-col gap-4 px-6 pb-12 pt-14 sm:pt-60 lg:px-8 lg:pt-12'>
        {/* Section Header */}
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Sobre nós</h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>Quem produz as análises e gere os TOPs?</p>
        </div>

        {/* Content Section */}
        <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
          {/* Text Content */}
          <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
            {[...Array(2)].map((_, idx) => (
              <p key={idx} className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate repellat voluptates officia
                iste! Ex, velit? Ipsa beatae quos modi architecto consequuntur nesciunt explicabo nisi recusandae earum
                ducimus, eos eum?
              </p>
            ))}
          </div>

          {/* Image Section */}
          <div className='mt-36 flex justify-end gap-8 border border-gray-300 py-28 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
            <p className='text-center'>Imagem do César + Respetivos Certificados (igual ao que está neste momento)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
