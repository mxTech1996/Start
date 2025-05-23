// components/InfoBlock.js
'use client';

import { motion } from 'framer-motion';
import {
  FaGem,
  FaBullseye,
  FaCalendarCheck,
  FaUsers,
  FaTheaterMasks,
  FaConciergeBell,
  FaStar,
  FaCheckCircle,
} from 'react-icons/fa'; // Example icons

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Helper to select an icon based on title
const getIconForTitle = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('values'))
    return <FaGem className='mr-3 text-orange-500' size={24} />;
  if (lowerTitle.includes('types of events'))
    return <FaCalendarCheck className='mr-3 text-orange-500' size={24} />;
  if (lowerTitle.includes('target customers'))
    return <FaUsers className='mr-3 text-orange-500' size={24} />;
  if (lowerTitle.includes('entertainment promoters'))
    return <FaTheaterMasks className='mr-3 text-orange-500' size={24} />;
  if (lowerTitle.includes('scope of services'))
    return <FaConciergeBell className='mr-3 text-orange-500' size={24} />;
  return <FaStar className='mr-3 text-orange-500' size={24} />; // Default icon
};

const InfoBlock = ({ title, description }) => {
  let content;

  if (title.toLowerCase() === 'values') {
    // Custom parsing for "Values"
    // Assumes structure: "Keyword1,Definition1. Keyword2,Definition2." (Note: original data uses comma separation)
    // Let's try splitting by predefined keywords to be more robust for the provided "Values" string
    const valuesData = [];
    const rawValues = description;
    const keywords = ['Excellence,', 'reliability,', 'Flexibility,'];
    let remainingString = rawValues;

    keywords.forEach((kw, index) => {
      const keywordWithoutComma = kw.slice(0, -1);
      const startIndex = remainingString
        .toLowerCase()
        .indexOf(kw.toLowerCase());
      if (startIndex !== -1) {
        const definitionStart = startIndex + kw.length;
        let definitionEnd = remainingString.length;
        if (index < keywords.length - 1) {
          const nextKeywordIndex = remainingString
            .toLowerCase()
            .indexOf(keywords[index + 1].toLowerCase(), definitionStart);
          if (nextKeywordIndex !== -1) {
            definitionEnd = nextKeywordIndex;
          }
        }
        const definition = remainingString
          .substring(definitionStart, definitionEnd)
          .trim()
          .replace(/,$/, ''); // Remove trailing comma if it's the last item
        valuesData.push({ term: keywordWithoutComma, definition: definition });
        remainingString = remainingString.substring(definitionEnd).trim(); // This part might be tricky if keywords are not unique or order changes
      }
    });
    // Fallback if parsing failed or if structure is simpler:
    if (valuesData.length === 0 && description.includes(',')) {
      // Simpler split if keywords don't work as expected or for other comma-separated value-like strings
      const parts = description.split(/,(?=\s*[A-Z])/); // Split by comma if followed by optional space and capital letter (heuristic for new item)
      parts.forEach((part) => {
        const commaIndex = part.indexOf(',');
        if (commaIndex !== -1) {
          valuesData.push({
            term: part.substring(0, commaIndex).trim(),
            definition: part.substring(commaIndex + 1).trim(),
          });
        } else {
          // If no comma, might be a single phrase or incorrectly formatted
          // For now, let's add it as is if it's a short phrase, or skip.
          if (part.trim().length > 0 && part.trim().length < 50)
            valuesData.push({ term: part.trim(), definition: '' });
        }
      });
    }

    content = (
      <div className='space-y-3 mt-2'>
        {valuesData.map((value, index) => (
          <div key={index}>
            <h4 className='font-semibold text-gray-700 flex items-center'>
              <FaCheckCircle className='text-green-500 mr-2 shrink-0' />
              {value.term}
            </h4>
            {value.definition && (
              <p className='text-sm text-gray-600 pl-6'>{value.definition}</p>
            )}
          </div>
        ))}
      </div>
    );
  } else if (
    title.toLowerCase().includes('types of events') ||
    title.toLowerCase().includes('target customers')
  ) {
    // Parse comma-separated lists
    const items = description
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
    content = (
      <ul className='list-none space-y-1.5 mt-2 pl-0'>
        {items.map((item, index) => (
          <li key={index} className='text-sm text-gray-600 flex items-start'>
            <FaStar className='text-orange-400 mr-2 mt-1 shrink-0' size={12} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  } else {
    // Default: display as paragraph
    content = (
      <p className='text-sm text-gray-600 mt-2 leading-relaxed'>
        {description}
      </p>
    );
  }

  return (
    <motion.div
      className='bg-white p-6 rounded-lg shadow-lg border border-gray-200 h-full'
      variants={itemVariants}
      // initial, animate, etc. will be controlled by parent stagger
    >
      <div className='flex items-center mb-3'>
        {getIconForTitle(title)}
        <h3 className='text-xl font-bold text-gray-800'>{title}</h3>
      </div>
      {content}
    </motion.div>
  );
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
  },
};

const gridVariants = {
  hidden: {}, // No animation needed for the grid container itself
  visible: {
    transition: {
      staggerChildren: 0.15, // Stagger the appearance of InfoBlock
      delayChildren: 0.3, // Delay before the first block starts animating
    },
  },
};

const CompanyInfoSection = ({ infoData }) => {
  if (!infoData || infoData.length === 0) {
    return null;
  }

  return (
    <motion.section
      id='know-us'
      className='py-16 md:py-24 bg-orange-50/50' // Very light orange/peach background
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='text-center mb-12 md:mb-16'
          variants={headerVariants}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900'>
            Our Commitment & <span className='text-orange-600'>Expertise</span>
          </h2>
          <p className='mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
            Dedicated to providing exceptional venue solutions and comprehensive
            support for all your event needs.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch'
          // Using lg:grid-cols-3 for 5 items will leave 2 on the last row if not centered.
          // Or use lg:grid-cols-2 for more space per item if 5 items. Let's try 2 for now for balance.
          // className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          variants={gridVariants}
        >
          {infoData.map((item, index) => (
            <InfoBlock
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CompanyInfoSection;
