const products = [
  {
    id: 1,
    stock: 10,
    category: {
      name: 'Pop Up Displays',
      href: 'Pop Up Displays',
      image: '/images/muebleBaño.png',
      top: 2,
    },
    name: 'Pop Up Displays',
    image: '/images/product1.png',
    price: '10,000.00',
    description:
      'With effortless set-up in just a matter of moments, the portable pop-up displays are the most popular type of trade show booths. Our selection of portable exhibits boast a seamless and simple assembly with eye-catching, high-resolution graphics sporting your latest custom branded message—ideal for any marketing event, convention or trade show. With its lightweight aluminum frame, these booths make transportation a breeze, allowing you to travel stress-free while focusing on your presentation. Truly boost your brand’s image by adding on additional upgrades like LED lights or even custom podium graphics for your transport case.',
  },
  {
    id: 2,
    stock: 10,
    category: {
      name: 'Pop Up Displays',
      href: 'Pop Up Displays',
      image: '/images/product2.png',
      top: 2,
    },
    name: 'Pop Up Displays',
    image: '/images/product2.png',
    price: '10,000.00',
    description:
      'With effortless set-up in just a matter of moments, the portable pop-up displays are the most popular type of trade show booths. Our selection of portable exhibits boast a seamless and simple assembly with eye-catching, high-resolution graphics sporting your latest custom branded message—ideal for any marketing event, convention or trade show. With its lightweight aluminum frame, these booths make transportation a breeze, allowing you to travel stress-free while focusing on your presentation. Truly boost your brand’s image by adding on additional upgrades like LED lights or even custom podium graphics for your transport case.',
  },
  {
    id: 3,
    stock: 10,
    category: {
      name: 'Pop Up Displays',
      href: 'Pop Up Displays',
      image: '/images/product3.png',
      top: 2,
    },
    name: 'Pop Up Displays',
    image: '/images/product3.png',
    price: '10,000.00',
    description:
      'With effortless set-up in just a matter of moments, the portable pop-up displays are the most popular type of trade show booths. Our selection of portable exhibits boast a seamless and simple assembly with eye-catching, high-resolution graphics sporting your latest custom branded message—ideal for any marketing event, convention or trade show. With its lightweight aluminum frame, these booths make transportation a breeze, allowing you to travel stress-free while focusing on your presentation. Truly boost your brand’s image by adding on additional upgrades like LED lights or even custom podium graphics for your transport case.',
  },
  {
    id: 4,
    stock: 10,
    category: {
      name: 'Outdoor Tents & Displays',
      href: 'Outdoor Tents & Displays',
      image: '/images/product4.png',
      top: 2,
    },
    name: 'Outdoor Tents & Displays',
    image: '/images/product4.png',
    price: '1,000.00',
    description:
      'Feel secure and showcase your products or services comfortably in any outdoor environment with our durable, fire-retardant and weather-resistant portable displays including event tents, outdoor flags and pop-up A-Frames. Ideal for store-front promotions, curbside pickup, sporting events, farmers markets, fundraising events, and festivals, your display will be protected in nearly any kind of climate all while garnering the attention your company deserves.',
  },
  {
    id: 5,
    stock: 10,
    category: {
      name: 'Outdoor Tents & Displays',
      href: 'Outdoor Tents & Displays',
      image: '/images/product5.png',
      top: 2,
    },
    name: 'Outdoor Tents & Displays',
    image: '/images/product5.png',
    price: '2,000.00',
    description:
      'Feel secure and showcase your products or services comfortably in any outdoor environment with our durable, fire-retardant and weather-resistant portable displays including event tents, outdoor flags and pop-up A-Frames. Ideal for store-front promotions, curbside pickup, sporting events, farmers markets, fundraising events, and festivals, your display will be protected in nearly any kind of climate all while garnering the attention your company deserves.',
  },
  {
    id: 6,
    stock: 10,
    category: {
      name: 'Outdoor Tents & Displays',
      href: 'Outdoor Tents & Displays',
      image: '/images/product6.jpeg',
      top: 2,
    },
    name: 'Outdoor Tents & Displays',
    image: '/images/product6.jpeg',
    price: '500.00',
    description:
      'Feel secure and showcase your products or services comfortably in any outdoor environment with our durable, fire-retardant and weather-resistant portable displays including event tents, outdoor flags and pop-up A-Frames. Ideal for store-front promotions, curbside pickup, sporting events, farmers markets, fundraising events, and festivals, your display will be protected in nearly any kind of climate all while garnering the attention your company deserves.',
  },
  {
    id: 7,
    stock: 10,
    category: {
      name: 'Outdoor Tents & Displays',
      href: 'Outdoor Tents & Displays',
      image: '/images/product7.jpeg',
      top: 2,
    },
    name: 'Outdoor Tents & Displays',
    image: '/images/product7.jpeg',
    price: '3,500.00',
    description:
      'Feel secure and showcase your products or services comfortably in any outdoor environment with our durable, fire-retardant and weather-resistant portable displays including event tents, outdoor flags and pop-up A-Frames. Ideal for store-front promotions, curbside pickup, sporting events, farmers markets, fundraising events, and festivals, your display will be protected in nearly any kind of climate all while garnering the attention your company deserves.',
  },
  {
    id: 8,
    stock: 10,
    category: {
      name: 'Multi-Media Displays',
      href: 'Multi-Media Displays',
      image: '/images/product8.jpeg',
      top: 2,
    },
    name: 'Multi-Media Displays',
    image: '/images/product8.jpeg',
    price: '5,000.00',
    description:
      'It’s no surprise that media displays elevate your trade show booth. Having the ability to broadcast your latest branded content, products, or amplify a demo of your services, allows you to captivate an audience and stand out amongst your competitors. Make a splash at the next trade show you’re attending by showcasing your compelling, visual marketing messaging and start increasing your ROI immediately!',
  },
  {
    id: 9,
    stock: 10,
    category: {
      name: 'Multi-Media Displays',
      href: 'Multi-Media Displays',
      image: '/images/product9.jpeg',
      top: 2,
    },
    name: 'Multi-Media Displays',
    image: '/images/product9.jpeg',
    price: '3,000.00',
    description:
      'It’s no surprise that media displays elevate your trade show booth. Having the ability to broadcast your latest branded content, products, or amplify a demo of your services, allows you to captivate an audience and stand out amongst your competitors. Make a splash at the next trade show you’re attending by showcasing your compelling, visual marketing messaging and start increasing your ROI immediately!',
  },
  {
    id: 10,
    stock: 10,
    category: {
      name: 'Multi-Media Displays',
      href: 'Multi-Media Displays',
      image: '/images/product10.jpeg',
      top: 2,
    },
    name: 'Multi-Media Displays',
    image: '/images/product10.jpeg',
    price: '4,000.00',
    description:
      'It’s no surprise that media displays elevate your trade show booth. Having the ability to broadcast your latest branded content, products, or amplify a demo of your services, allows you to captivate an audience and stand out amongst your competitors. Make a splash at the next trade show you’re attending by showcasing your compelling, visual marketing messaging and start increasing your ROI immediately!',
  },
  {
    id: 11,
    stock: 10,
    category: {
      name: 'Trade Show Flooring',
      href: 'Trade Show Flooring',
      image: '/images/product11.png',
      top: 2,
    },
    name: 'Trade Show Flooring',
    image: '/images/product11.png',
    price: '1,000.00',
    description:
      'Trade show flooring is one of the most underrated and underutilized accessories in the business! Flooring can make all of the difference, so why just setup your display on concrete or trade show carpet, when these modular solutions can dramatically effect your presentation. Whether its wood, tile or our special carpet flooring, you are sure to make a big impact at your next conference, convention or event',
  },
  {
    id: 12,
    stock: 10,
    category: {
      name: 'Trade Show Flooring',
      href: 'Trade Show Flooring',
      image: '/images/product12.png',
      top: 2,
    },
    name: 'Trade Show Flooring',
    image: '/images/product12.png',
    price: '1,000.00',
    description:
      'Trade show flooring is one of the most underrated and underutilized accessories in the business! Flooring can make all of the difference, so why just setup your display on concrete or trade show carpet, when these modular solutions can dramatically effect your presentation. Whether its wood, tile or our special carpet flooring, you are sure to make a big impact at your next conference, convention or event',
  },
  {
    id: 13,
    stock: 10,
    category: {
      name: 'Trade Show Flooring',
      href: 'Trade Show Flooring',
      image: '/images/product13.png',
      top: 2,
    },
    name: 'Trade Show Flooring',
    image: '/images/product13.png',
    price: '1,000.00',
    description:
      'Trade show flooring is one of the most underrated and underutilized accessories in the business! Flooring can make all of the difference, so why just setup your display on concrete or trade show carpet, when these modular solutions can dramatically effect your presentation. Whether its wood, tile or our special carpet flooring, you are sure to make a big impact at your next conference, convention or event',
  },
  {
    id: 14,
    stock: 10,
    category: {
      name: 'Multi-Media Displays',
      href: 'Multi-Media Displays',
      image: '/images/producto14.jpeg',
      top: 2,
    },
    name: 'Multi-Media Displays',
    image: '/images/producto14.jpeg',
    price: '800.00',
    description:
      'It’s no surprise that media displays elevate your trade show booth. Having the ability to broadcast your latest branded content, products, or amplify a demo of your services, allows you to captivate an audience and stand out amongst your competitors. Make a splash at the next trade show you’re attending by showcasing your compelling, visual marketing messaging and start increasing your ROI immediately!',
  },
  {
    id: 15,
    stock: 10,
    category: {
      name: 'Multi-Media Displays',
      href: 'Multi-Media Displays',
      image: '/images/producto15.jpeg',
      top: 2,
    },
    name: 'Multi-Media Displays',
    image: '/images/producto15.jpeg',
    price: '3,500.00',
    description:
      'It’s no surprise that media displays elevate your trade show booth. Having the ability to broadcast your latest branded content, products, or amplify a demo of your services, allows you to captivate an audience and stand out amongst your competitors. Make a splash at the next trade show you’re attending by showcasing your compelling, visual marketing messaging and start increasing your ROI immediately!',
  },
  {
    id: 16,
    stock: 10,
    category: {
      name: 'Multi-Media Displays',
      href: 'Multi-Media Displays',
      image: '/images/producto16.jpeg',
      top: 2,
    },
    name: 'Multi-Media Displays',
    image: '/images/producto16.jpeg',
    price: '4,000.00',
    description:
      'It’s no surprise that media displays elevate your trade show booth. Having the ability to broadcast your latest branded content, products, or amplify a demo of your services, allows you to captivate an audience and stand out amongst your competitors. Make a splash at the next trade show you’re attending by showcasing your compelling, visual marketing messaging and start increasing your ROI immediately!',
  },
  {
    id: 17,
    stock: 10,
    category: {
      name: 'Multi-Media Displays',
      href: 'Multi-Media Displays',
      image: '/images/producto17.jpeg',
      top: 2,
    },
    name: 'Multi-Media Displays',
    image: '/images/producto17.jpeg',
    price: '500.00',
    description:
      'It’s no surprise that media displays elevate your trade show booth. Having the ability to broadcast your latest branded content, products, or amplify a demo of your services, allows you to captivate an audience and stand out amongst your competitors. Make a splash at the next trade show you’re attending by showcasing your compelling, visual marketing messaging and start increasing your ROI immediately!',
  },
];

export default products;
