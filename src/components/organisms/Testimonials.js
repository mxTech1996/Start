// components/TestimonialCarouselSection.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaRegCommentAlt } from 'react-icons/fa'; // Quote icon example

// Helper function to get initials
const getInitials = (nameStr) => {
  if (!nameStr) return '?';
  const nameOnly = nameStr.split(',')[0].trim(); // Get the name part before any comma
  const nameParts = nameOnly.split(' ');
  if (nameParts.length === 0 || nameParts[0] === '') return '?';
  if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
  return (
    nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)
  ).toUpperCase();
};

// Testimonial Content Component (renders a single testimonial)
const TestimonialContent = ({ testimonial }) => {
  const { name: nameStr, description, image } = testimonial;

  let displayName = nameStr;
  let displayTitle = '';
  const commaIndex = nameStr.indexOf(',');
  if (commaIndex !== -1) {
    displayName = nameStr.substring(0, commaIndex).trim();
    displayTitle = nameStr.substring(commaIndex + 1).trim();
  }
  const initials = getInitials(displayName);

  return (
    <div className='flex flex-col items-center text-center px-4 sm:px-8 md:px-12 py-8 relative z-10'>
      {/* Optional: Small decorative icon above quote if desired, instead of the fox */}
      {/* <FaRegCommentAlt className="text-3xl text-orange-400 mb-4" /> */}

      <motion.blockquote
        className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-6 leading-snug max-w-xl'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        &quot;{description}&quot;
      </motion.blockquote>
      <motion.div
        className='flex items-center'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {image ? (
          <div className='relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-3 shadow-md'>
            <Image
              src={image}
              alt={displayName}
              layout='fill'
              objectFit='cover'
            />
          </div>
        ) : (
          <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 font-bold text-xl sm:text-2xl mr-3 shadow-md'>
            {initials}
          </div>
        )}
        <div>
          <p className='text-sm sm:text-base font-bold text-orange-600'>
            {displayName}
          </p>
          {displayTitle && (
            <p className='text-xs sm:text-sm text-gray-500'>{displayTitle}</p>
          )}
          {/* Date was in original image, but not in your data structure */}
        </div>
      </motion.div>
    </div>
  );
};

// Main Carousel Section Component
const TestimonialCarouselSection = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0 for initial, 1 for next, -1 for prev

  if (!testimonials || testimonials.length === 0) {
    return null; // Or some placeholder if no testimonials
  }

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 20,
        // duration: 0.4,
        // ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        // duration: 0.3,
        // ease: [0.4, 0, 0.2, 1],
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    }),
  };

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) {
        newIndex = testimonials.length - 1;
      } else if (newIndex >= testimonials.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  // Subtle decorative elements inspired by the original, adapted for elegance
  const decorativeElements = [
    // Soft circle 1
    {
      id: 1,
      className:
        'absolute top-10 left-5 w-20 h-20 bg-rose-200/30 rounded-full blur-lg opacity-70',
      initial: { scale: 0.5, opacity: 0 },
      animate: {
        scale: 1,
        opacity: 0.5,
        transition: {
          delay: 0.5,
          duration: 1.5,
          yoyo: Infinity,
          ease: 'easeInOut',
        },
      },
    },
    // Soft circle 2
    {
      id: 2,
      className:
        'absolute bottom-16 right-10 w-24 h-24 bg-orange-200/20 rounded-full blur-xl opacity-60',
      initial: { scale: 0.5, opacity: 0 },
      animate: {
        scale: 1,
        opacity: 0.4,
        transition: {
          delay: 0.8,
          duration: 1.8,
          yoyo: Infinity,
          ease: 'easeInOut',
        },
      },
    },
    // Simple line swirl (SVG example)
    {
      id: 3,
      svg: true,
      className:
        'absolute bottom-5 left-10 w-16 h-16 text-orange-300/70 opacity-80',
      initial: { pathLength: 0, opacity: 0 },
      animate: {
        pathLength: 1,
        opacity: 1,
        transition: { delay: 1, duration: 1.5, ease: 'circOut' },
      },
    },
  ];

  return (
    <section
      id='testimonials'
      className='py-16 md:py-24 bg-rose-50 relative overflow-hidden'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        {/* Decorative elements */}
        {decorativeElements.map((el) =>
          !el.svg ? (
            <motion.div
              key={el.id}
              className={el.className}
              initial={el.initial}
              animate={el.animate}
            />
          ) : (
            <motion.svg
              key={el.id}
              className={el.className}
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <motion.path
                d='M5 45 C15 5, 35 55, 45 15'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                initial={el.initial}
                animate={el.animate}
              />
            </motion.svg>
          )
        )}

        <motion.p
          className='text-center text-sm font-semibold text-orange-600 uppercase tracking-wider mb-4 md:mb-0' // Positioned above the cloud
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hear From Our Satisfied Clients
        </motion.p>

        <div className='relative w-full max-w-2xl lg:max-w-3xl mx-auto mt-8 md:mt-12'>
          {/* Cloud-like background shape using SVG */}
          <svg
            className='absolute inset-0 w-full h-full text-white drop-shadow-xl' // White cloud, or very light peach e.g. rose-100
            viewBox='0 0 300 200' // Adjust viewBox for desired aspect ratio
            preserveAspectRatio='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <motion.path
              d='M51.3,2.4C20.8,2.4,0,29.3,0,66.5s21.2,67.5,55.9,70.2c21.3,1.7,38.8-14.1,39.1-34.6
                 c0.1-9.5-3.1-17.9-8.3-24.5c-1.3-1.6-2.6-3.2-3.7-5c-5.5-8.7-0.3-20.4,9.6-24.2c12.6-4.8,27.1-0.1,33.5,11.2
                 c2.1,3.7,3.4,7.8,3.8,12c0.9,9.3-2.2,18.3-8.1,25.2c-1.9,2.2-3.9,4.3-5.8,6.5c-7.4,8.4-4.4,21.4,5.8,25.8
                 c13.1,5.7,28.5-0.3,35.3-12.4c2.8-4.9,4.3-10.4,4.3-16.1c0-17.7-10.1-33.1-25.1-39.8c-12.2-5.5-26.1-3.1-35.8,5.9
                 c-2.2,2-4,4.2-5.5,6.7c-6.2,10.7-20.9,14.5-32.2,9.2c-13.1-6.1-20-20.6-15.3-34.1C46.7,16.7,53.7,6.8,65.2,3.4
                 C90.5-5.1,112.8,13.7,113.9,39.4c0.3,7.9-1.7,15.5-5.5,22.1c-1,1.7-2,3.4-2.9,5.1c-4.5,8.7,0.3,20.4,9.6,24.2
                 c12.6,4.8,27.1-0.1,33.5-11.2c6.2-10.8,5.2-24.7-2.4-34.4c-2.8-3.6-6-6.8-9.5-9.5c-10.1-7.6-12.5-21.7-5.2-32.5
                 c8.3-12.2,24-17.2,37.6-12.7c17.3,5.7,28.4,22.6,26.9,40.1c-0.7,8.9-4.2,17.1-9.6,23.5c-1.3,1.6-2.6,3.2-3.7,5
                 c-5.5,8.7-0.3,20.4,9.6,24.2c12.6,4.8,27.1-0.1,33.5-11.2c5.5-9.5,4.5-21.4-2.4-29.6c-12.5-14.8-35.3-17.7-50.7-6.3
                 c-3.1,2.3-5.7,5-7.8,8c-9.1,13.2-27.8,16.1-41.9,6.9c-14.3-9.3-20.4-26.5-13.9-41.2C196.9,21.4,219.4,2.4,248.7,2.4
                 S300,29.3,300,66.5s-20.8,64.1-51.3,64.1c-28.3,0-50.5-25.3-51.3-58.8c-0.2-7.8,2.1-15.2,6.2-21.4c1.1-1.7,2.2-3.3,3.3-5
                 c4.6-7.1,2.8-16.7-4.1-21.6c-8.1-5.7-18.8-3.3-23.8,4.8c-3.7,6-3.9,13.4-0.6,19.7c0.8,1.6,1.7,3.1,2.6,4.6
                 c4.5,7.1,3.2,16.9-3.3,22.2c-10.1,8.4-24.8,6.7-32.2-3.8c-3.1-4.3-4.8-9.5-4.8-14.9c0-15,8.8-28.1,22.1-33.4
                 c12.6-4.9,26.7,0.1,33.5,11.2c2.1,3.4,3.4,7.1,3.8,11.1c0.9,9.3-2.2,18.3-8.1,25.2c-1.9,2.2-3.9,4.3-5.8,6.5
                 c-7.4,8.4-4.4,21.4,5.8,25.8c13.1,5.7,28.5-0.3,35.3-12.4c4.2-7.5,4.2-16.9,0-24.3c-5.3-9.3-17-13.1-27.8-9.2
                 c-3.1,1.1-5.9,2.6-8.3,4.4c-9.9,7.1-24.1,5.9-32.6-2.9c-4.3-4.5-6.7-10.2-6.7-16.1c0-14.2,9.4-26.7,22.9-31.4
                 c11.8-4.1,24.5-0.3,32.2,8.3c2.2,2.5,3.9,5.2,5.1,8c4.5,10.3,16.5,15.3,27.8,12.4c10.6-2.8,18.8-11.2,20.4-22.1
                 c0.7-4.9-0.3-9.8-2.9-14.2c-5.3-9.1-16.1-13.2-26.9-10.4c-3.1,0.8-5.9,2-8.3,3.7c-10.6,7.5-25.1,6.5-33.5-2.4
                 c-4.5-4.9-7.1-11.1-7.1-17.7C51.3,2.4,20.8,2.4,51.3,2.4z' // Simplified cloud path. You might want a more complex one.
              fill='currentColor' // Uses text-white from className
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            />
          </svg>

          {/* Carousel Content Area */}
          <div className='relative min-h-[300px] sm:min-h-[350px] flex items-center justify-center'>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                className='absolute w-full'
                drag='x'
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragEnd={(event, { offset, velocity }) => {
                  const swipeThreshold = 50; // Minimum drag distance to trigger navigation
                  if (offset.x > swipeThreshold) {
                    navigate(-1); // Previous
                  } else if (offset.x < -swipeThreshold) {
                    navigate(1); // Next
                  }
                }}
              >
                <TestimonialContent testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {testimonials.length > 1 && (
            <>
              <motion.button
                onClick={() => navigate(-1)}
                className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 p-2 rounded-full bg-white/70 hover:bg-white text-orange-500 shadow-md hover:text-orange-600 z-20'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={() => navigate(1)}
                className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 p-2 rounded-full bg-white/70 hover:bg-white text-orange-500 shadow-md hover:text-orange-600 z-20'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight size={20} />
              </motion.button>
            </>
          )}
        </div>

        {/* Dot Indicators */}
        {testimonials.length > 1 && (
          <div className='flex justify-center space-x-2 mt-8'>
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  currentIndex === index
                    ? 'bg-orange-500 scale-125'
                    : 'bg-orange-200 hover:bg-orange-300'
                }`}
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0.6,
                  scale: currentIndex === index ? 1.25 : 1,
                }}
                whileHover={{ scale: 1.4 }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialCarouselSection;

// Sample Usage (on a page):
// import TestimonialCarouselSection from '../components/TestimonialCarouselSection';
// const testimonialsData = [
//   {
//     id: 't1',
//     name: 'Emiliano Ortiz, Event Planner',
//     description: 'We booked the hall for our wedding reception and everything went smoothly. The venue was stunning, the staff was friendly, and the service was top-notch. Highly recommended!',
//     rating: 5,
//     image: null,
//   },
//   {
//     id: 't2',
//     name: 'Sophia Loren, Corporate Client',
//     description: 'Our annual conference was a massive success thanks to this versatile venue and their professional team. The AV equipment was perfect.',
//     rating: 5,
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60',
//   },
//   // Add more testimonials
// ];
// export default function HomePage() {
//   return <TestimonialCarouselSection testimonials={testimonialsData} />;
// }
