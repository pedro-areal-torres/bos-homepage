import React from 'react';

import { posts } from '../../data/blog-posts';

const Blog: React.FC = () => {
  const PostCard: React.FC<(typeof posts)[number]> = ({ id, title, href, description, imageUrl, date, datetime }) => (
    <article key={id} className='flex flex-col items-start justify-between'>
      <div className='relative w-full'>
        <img
          src={imageUrl}
          alt={title}
          className='aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
        />
        <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
      </div>
      <div className='max-w-xl'>
        <div className='group relative'>
          <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
            <a href={href}>
              <span className='absolute inset-0' />
              {title}
            </a>
          </h3>
          <p className='mt-2 line-clamp-3 text-sm leading-6 text-gray-600'>{description}</p>
        </div>
        <div className='mt-4 flex items-center gap-x-4 text-xs'>
          <time dateTime={datetime} className='text-gray-500'>
            {date}
          </time>
        </div>
      </div>
    </article>
  );

  return (
    <section className='bg-white py-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Análises às Empresas</h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>Conheça o nosso trabalho</p>
        </div>

        {/* Posts Grid */}
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className='mt-12 flex flex-col items-center justify-center gap-6'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='mt-2 text-lg leading-8 text-gray-600'>Lista completa de empresas analisadas</p>
        </div>
        <div className='flex flex-row gap-2'>
          {['Empresas Europeias', 'Empresas Americanas'].map((label, index) => (
            <a
              key={index}
              href='#'
              className='mb-4 inline-block rounded-md border border-green-800 bg-transparent px-8 py-3 text-base font-medium text-green-800 hover:bg-green-800 hover:text-white'
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
