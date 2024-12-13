import React from 'react';
import { testimonials } from '../../data/testimonials-info';

const TestimonialCard: React.FC<{
  body: string;
  author: { name: string; imageUrl: string };
}> = ({ body, author }) => (
  <div className='pt-8 sm:inline-block sm:w-full sm:px-4'>
    <figure className='rounded-2xl bg-gray-50 p-8 text-sm leading-6'>
      <blockquote className='text-gray-900'>
        <p>{`“${body}”`}</p>
      </blockquote>
      <figcaption className='mt-6 flex items-center gap-x-4'>
        <img className='h-10 w-10 rounded-full bg-gray-50' src={author.imageUrl} alt={`${author.name}'s photo`} />
        <div>
          <div className='font-semibold text-gray-900'>{author.name}</div>
        </div>
      </figcaption>
    </figure>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className='bg-white py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Testemunhos</h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>Texto exemplificativo</p>
        </div>

        {/* Testimonials Grid */}
        <div className='mx-auto flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none'>
          <div className='-mt-16 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3'>
            {testimonials.map(({ body, author }) => (
              <TestimonialCard key={author.name} body={body} author={author} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
