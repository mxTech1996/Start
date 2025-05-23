// components/VenueDisplayCard.js
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FiDollarSign, FiArrowRight } from 'react-icons/fi'; // Example icons

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const VenueDisplayCard = ({ venue, isIntersecting }) => {
  return (
    <motion.div
      id='products'
      className={`p-4 border rounded-lg shadow-sm mb-8 transition-all duration-300 ${
        isIntersecting
          ? 'bg-orange-50 border-orange-300 shadow-orange-100'
          : 'bg-white border-gray-200'
      }`}
      variants={cardVariants}
      // initial, animate, etc., can be controlled by a parent stagger if needed
    >
      <div className='relative w-full h-48 rounded-md overflow-hidden mb-4'>
        <Image
          src={
            venue.image ||
            'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
          }
          alt={venue.name}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <h3 className='text-xl font-semibold text-gray-800 mb-1'>{venue.name}</h3>
      <p className='text-sm text-gray-600 line-clamp-2 mb-2'>
        {venue.description}
      </p>
      {venue.price && (
        <p className='text-lg font-medium text-orange-600'>${venue.price}</p>
      )}
    </motion.div>
  );
};

const StickyVenueShowcaseSection = ({ venues }) => {
  const [activeVenue, setActiveVenue] = useState(
    venues && venues.length > 0 ? venues[0] : null
  );
  const venueRefs = useRef([]);

  // Initialize refs array
  venueRefs.current = useMemo(
    () => venues.map((_, i) => venueRefs.current[i] ?? React.createRef()),
    [venues]
  );

  useEffect(() => {
    if (!venues || venues.length === 0) return;

    const observerOptions = {
      root: null, // relative to document viewport
      rootMargin: '-40% 0px -40% 0px', // Triggers when center 20% of element is visible
      threshold: 0.1, // Or an array [0, 0.25, 0.5, 0.75, 1] for more granular control
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const venueId = parseInt(entry.target.dataset.venueId, 10);
          const newActiveVenue = venues.find((v) => v.id === venueId);
          if (newActiveVenue) {
            setActiveVenue(newActiveVenue);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    venueRefs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      venueRefs.current.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [venues]); // Rerun if venues array changes

  if (!venues || venues.length === 0) {
    return (
      <section className='py-12 text-center'>No venues to display.</section>
    );
  }

  const stickyContentVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <section className='py-12 md:py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 md:mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Explore Our Premier Venues
          </h2>
          <p className='mt-3 text-md md:text-lg text-gray-600 max-w-xl mx-auto'>
            Find the perfect space for your next event, from intimate gatherings
            to large-scale conventions.
          </p>
        </motion.div>

        <div className='flex flex-col md:flex-row gap-8 lg:gap-12'>
          {/* Left Sticky Column */}
          <div className='md:w-1/3 lg:w-2/5 md:sticky md:top-24 self-start'>
            {' '}
            {/* md:top-24 for navbar height approx */}
            {activeVenue && (
              <motion.div
                key={activeVenue.id} // Ensures AnimatePresence triggers on change
                className='bg-white p-6 rounded-xl shadow-xl border border-orange-200'
                initial='initial'
                animate='animate'
                exit='exit'
                variants={stickyContentVariants}
              >
                <div className='relative w-full h-60 rounded-lg overflow-hidden mb-5 shadow'>
                  <Image
                    src={
                      activeVenue.image ||
                      'https://images.unsplash.com/photo-1542665099-4006460cDb3a?auto=format&fit=crop&w=800&q=60'
                    }
                    alt={activeVenue.name}
                    layout='fill'
                    objectFit='cover'
                    priority // Prioritize loading image for active venue
                  />
                </div>
                <h3 className='text-2xl font-bold text-orange-600 mb-3'>
                  {activeVenue.name}
                </h3>
                <p className='text-gray-700 leading-relaxed mb-4 text-sm'>
                  {activeVenue.description}
                </p>
                {activeVenue.price && (
                  <div className='flex items-center text-2xl font-semibold text-green-600 mb-5'>
                    <FiDollarSign className='mr-2' /> Starting from $
                    {activeVenue.price}
                  </div>
                )}
                {/* You can add more details from activeVenue.content here */}
                <a
                  href={`/venues/${activeVenue.id}`} // Replace with actual link structure
                  className='inline-flex items-center justify-center w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 shadow-md hover:shadow-lg'
                >
                  View Details & Book
                  <FiArrowRight className='ml-2' />{' '}
                  {/* Placeholder - not imported yet, just showing where it would go */}
                </a>
              </motion.div>
            )}
          </div>

          {/* Right Scrollable Column */}
          <div className='md:w-2/3 lg:w-3/5'>
            {venues.map((venue, index) => (
              <div
                key={venue.id}
                ref={venueRefs.current[index]}
                data-venue-id={venue.id}
                className='venue-item' // For potential specific styling or more complex observation
              >
                <VenueDisplayCard
                  venue={venue}
                  isIntersecting={activeVenue?.id === venue.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyVenueShowcaseSection;

// En tu página, pasarías los datos de los venues:
// import StickyVenueShowcaseSection from '../components/StickyVenueShowcaseSection';
// const venuesData = [
//   { id: 835, name: 'Grand Banquet Halls', description: 'Expansive halls perfect for weddings and galas, featuring elegant chandeliers and customizable layouts.', price: '1499.99', image: 'https://cms-webserver-statics.s3.amazonaws.com/media/products/sta_8.jpg' },
//   { id: 836, name: 'Modern Conference Centers', description: 'State-of-the-art facilities equipped with AV technology, breakout rooms, and catering options for corporate events.', price: '999.99', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=60' },
//   { id: 837, name: 'Intimate Party Lounges', description: 'Chic and cozy lounges ideal for private parties, anniversaries, and smaller social gatherings with a stylish ambiance.', price: '499.99', image: 'https://images.unsplash.com/photo-1542665099-4006460cDb3a?auto=format&fit=crop&w=800&q=60' },
//   { id: 838, name: 'Outdoor Garden Pavilions', description: 'Beautifully landscaped garden pavilions offering a picturesque setting for outdoor weddings, receptions, and celebrations.', price: '1299.99', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=60' },
// ];
// export default function VenuesPage() {
//   return <StickyVenueShowcaseSection venues={venuesData} />;
// }
