// components/SiteNavbar.js
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navbarVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger the animation of children (logo and link groups)
      staggerChildren: 0.1,
      delayChildren: 0.1, // Optional delay before starting children animations
    },
  },
};

const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14,
    },
  },
};

const SiteNavbar = () => {
  const placeholderLogo = 'Start'; // Puedes reemplazar esto con tu logo real o componente de logo
  const navLinks = [
    { href: '/#know-us', label: 'Know Us' },
    { href: '/#services', label: 'Services' },
    { href: '/#products', label: 'Our Products' },
    { href: '/more-information', label: 'Contact' },
  ];

  return (
    <motion.nav
      className='absolute top-0 left-0 right-0 z-30 py-5 px-6 sm:px-10 md:px-16 bg-transparent'
      // Si el navbar no es hijo de otro motion component que lo anime,
      // puedes añadirle variants, initial y animate aquí:
      variants={navbarVariants}
      initial='hidden'
      animate='visible'
    >
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <motion.div variants={navItemVariants}>
          <Link href='/' legacyBehavior>
            <a className='text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors'>
              {placeholderLogo}
            </a>
          </Link>
        </motion.div>

        {/* Navigation Links & CTA */}
        <motion.div
          className='flex items-center space-x-4 sm:space-x-6'
          variants={navItemVariants}
        >
          {navLinks.map((link) => (
            <motion.div key={link.label} variants={navItemVariants}>
              {' '}
              {/* Cada item puede tener su propia animación */}
              <Link href={link.href} legacyBehavior>
                <a className='text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors'>
                  {link.label}
                </a>
              </Link>
            </motion.div>
          ))}
          <motion.div variants={navItemVariants}>
            <Link href='/my-cart' legacyBehavior>
              <a className='bg-orange-500 text-white px-4 py-2 rounded-md text-xs sm:text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm'>
                Go to Cart
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default SiteNavbar;
