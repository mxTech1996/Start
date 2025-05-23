// components/ServiceHighlightCard.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi'; // Example icon, if you decide to use one
import { dataSite } from '@/data';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // Smooth ease
    },
  },
};

const hoverEffect = {
  y: -8,
  boxShadow: '0px 15px 25px rgba(0,0,0,0.07)',
  transition: { duration: 0.3, ease: 'easeOut' },
};

const ServiceHighlightCard = ({ service }) => {
  const slug = service.title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

  return (
    <motion.div
      id='services'
      className='flex flex-col items-center text-center bg-white h-full'
      variants={cardVariants}
      whileHover={hoverEffect}
      // initial & animate/whileInView will be handled by parent stagger
    >
      {/* Arched Image Container */}
      <div className='relative w-full aspect-[4/3] mb-5'>
        <div className='absolute inset-0 p-2 border-2 border-dashed border-orange-300 rounded-t-[100px] sm:rounded-t-[150px] overflow-hidden'>
          {/* Increased top rounding for a more pronounced arch */}
          <div className='relative w-full h-full rounded-t-[90px] sm:rounded-t-[140px] overflow-hidden'>
            {' '}
            {/* Inner rounding slightly less */}
            <Image
              src={
                service.image ||
                'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1100&q=80'
              }
              alt={service.title}
              layout='fill'
              objectFit='cover'
              className='transform group-hover:scale-105 transition-transform duration-300'
            />
          </div>
        </div>
      </div>

      <h3 className='text-xl font-semibold text-gray-800 mb-2 px-4'>
        {service.title}
      </h3>
      <p className='text-sm text-gray-600 leading-relaxed mb-6 px-6 flex-grow'>
        {service.description}
      </p>
      <Link href={`#products`} legacyBehavior>
        <a className='inline-block mt-auto mb-4 text-orange-600 font-medium text-sm border-2 border-dashed border-orange-400 hover:border-solid hover:bg-orange-400 hover:text-white rounded-md px-6 py-2.5 transition-all duration-300'>
          Learn More
          {/* <FiArrowRight className="inline ml-2" /> Optionally add icon */}
        </a>
      </Link>
    </motion.div>
  );
};

const sampleServicesData = dataSite.services;

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const gridVariants = {
  hidden: {}, // No animation needed for the grid container itself if children animate
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger the appearance of ServiceHighlightCard
      delayChildren: 0.3, // Delay before the first card starts animating
    },
  },
};

const EventServicesSection = ({ services = sampleServicesData }) => {
  return (
    <motion.section
      id='services'
      className='py-16 md:py-24 bg-gray-50' // Light background for the whole section
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-12 md:mb-16'
          variants={headerVariants}
        >
          <p className='text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2'>
            What We Offer
          </p>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900'>
            Your <span className='text-orange-500'>Premier</span> Event{' '}
            <span className='text-green-600'>Solutions</span>
          </h2>
          <p className='mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
            Explore our range of customizable options designed to make your next
            party, conference, or special occasion a resounding success.
          </p>
        </motion.div>

        {/* Services Grid */}
        {services && services.length > 0 ? (
          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch'
            // items-stretch ensures cards in the same row have the same height if content varies
            variants={gridVariants}
            // initial="hidden" // Let whileInView on parent handle initial state for the group
            // animate="visible"
          >
            {services.map((service) => (
              <ServiceHighlightCard
                key={service.id || service.title}
                service={service}
              />
            ))}
          </motion.div>
        ) : (
          <p className='text-center text-gray-600'>
            Our services will be detailed soon.
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default EventServicesSection;
