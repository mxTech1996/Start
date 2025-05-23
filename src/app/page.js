'use client';

import Footer from '@/components/organisms/Footer';
import VenueHeroSection from '@/components/organisms/Hero';
import CompanyInfoSection from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import StickyVenueShowcaseSection from '@/components/organisms/Products';
import EventServicesSection from '@/components/organisms/Services';
import TestimonialCarouselSection from '@/components/organisms/Testimonials';
import { dataSite } from '@/data';

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <VenueHeroSection />

      <EventServicesSection />
      <StickyVenueShowcaseSection venues={dataSite.products} />
      <CompanyInfoSection infoData={dataSite.info} />
      <TestimonialCarouselSection testimonials={dataSite.references} />
      <Footer />
    </main>
  );
}
