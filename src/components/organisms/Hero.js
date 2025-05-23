// components/VenueHeroSection.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { dataSite } from '@/data';

const headlineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, type: 'spring', stiffness: 100, delay: 0.5 },
  },
};

const ctaButtonVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 150, damping: 10, delay: 0.8 },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 8px 20px rgba(204, 85, 0, 0.4)', // Accent color shadow
  },
};

const infoBlockVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 1 },
  },
};

const swirlVariants = {
  hidden: { opacity: 0, pathLength: 0, rotate: -45 },
  visible: {
    opacity: 1,
    pathLength: 1,
    rotate: 0,
    transition: { duration: 1.2, ease: 'easeInOut', delay: 1.2 },
  },
};

const VenueHeroSection = () => {
  return (
    <div className='relative container mx-auto px-6 pt-32 pb-16 md:pt-40 min-h-screen flex flex-col justify-center z-10'>
      <div className='grid md:grid-cols-12 gap-8 items-center'>
        {/* Left Textual Content & Info Block */}
        <div className='md:col-span-6 lg:col-span-5 text-center md:text-left'>
          <motion.h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
            <motion.span
              variants={headlineVariants}
              custom={0}
              className='block'
            >
              Host <strong className='text-orange-600'>Unforgettable</strong>
            </motion.span>
            <motion.span
              variants={headlineVariants}
              custom={1}
              className='block'
            >
              Gatherings in Our
            </motion.span>
            <motion.span
              variants={headlineVariants}
              custom={2}
              className='block text-green-600'
            >
              Elegant Spaces
            </motion.span>
          </motion.h1>

          <motion.div variants={infoBlockVariants} className='mt-10 md:mt-12'>
            <p className='text-lg font-semibold text-gray-700'>
              100+ Successful Events Hosted
            </p>
            <div className='w-20 h-0.5 bg-orange-400 my-2 mx-auto md:mx-0'></div>{' '}
            {/* Squiggle replacement */}
            <p className='text-sm text-gray-600 mb-4 max-w-xs mx-auto md:mx-0'>
              Your perfect setting for memorable weddings, corporate functions,
              and grand conventions.
            </p>
            <div className='flex justify-center md:justify-start space-x-2'>
              {[
                {
                  src: dataSite.image_hero,
                  alt: 'Wedding Event',
                },
                {
                  src: dataSite.image_hero2,
                  alt: 'Conference Event',
                },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className='w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-md'
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.15 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={48}
                    height={48}
                    objectFit='cover'
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Image Content */}
        <div className='md:col-span-6 lg:col-span-7 mt-10 md:mt-0 flex justify-center items-center relative'>
          <motion.div
            className='relative w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] lg:w-[380px] lg:h-[570px]'
            variants={imageVariants}
          >
            {/* Dashed Oval Frame */}
            <div className='absolute inset-0 border-2 border-dashed border-orange-400 rounded-[50%] transform scale-110 lg:scale-125 opacity-80'></div>
            <Image
              src={dataSite.image_hero}
              alt='Elegant Event Venue'
              layout='fill'
              objectFit='cover'
              className='rounded-[50%] shadow-2xl'
              priority
            />
            <motion.div
              className='absolute -top-4 -right-4 sm:top-0 sm:right-0 md:top-2 md:right-2'
              variants={ctaButtonVariants}
              whileHover='hover'
            >
              <Link href='/venues' legacyBehavior>
                <a className='bg-orange-600 text-white text-sm sm:text-base font-semibold px-6 py-6 sm:px-8 sm:py-8 rounded-full shadow-lg hover:bg-orange-700 transition-colors flex flex-col items-center justify-center leading-tight w-28 h-28 sm:w-32 sm:h-32'>
                  Explore <span className='mt-0.5'>Venues</span>
                </a>
              </Link>
            </motion.div>
          </motion.div>
          {/* Decorative Swirl */}
          <motion.svg
            className='absolute -bottom-10 -right-5 md:-bottom-16 md:-right-8 w-24 h-24 text-orange-500 opacity-80'
            viewBox='0 0 100 100'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            variants={swirlVariants}
          >
            <motion.path
              d='M 20 80 Q 50 100, 80 80 T 80 20 Q 50 0, 20 20 T 20 80'
              stroke='currentColor'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              variants={swirlVariants} // Re-apply for pathLength animation
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default VenueHeroSection;

// In your tailwind.config.js, you might want to add the cream color:
// theme: {
//   extend: {
//     colors: {
//       'cream-100': '#FFF7F0', // Example cream color
//     },
//   },
// },
