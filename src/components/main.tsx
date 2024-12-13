import React from 'react';

// Import sections as a group for cleaner imports
import Newsletter from './newsletter/newsletter';
import About from './about/about';
import Testimonials from './testimonials/testimonials';
import Roic from './roic/roic';
import Presentation from './presentation/presentation';
import Service from './service/service';
import Blog from './blog/blog';

const SectionDivider: React.FC<{ className?: string }> = ({ className }) => (
  <hr className={`border-grey-600 ${className || ''}`} />
);

const Main: React.FC = () => {
  return (
    <main className='grid'>
      <Presentation />
      <SectionDivider className='h-1 border-green-600' />
      <Blog />
      <SectionDivider />
      <Service />
      <SectionDivider className='py-6' />
      <Roic />
      <SectionDivider />
      <About />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Main;
