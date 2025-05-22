'use client';
import { useRouter } from 'next/navigation';
import { footerData } from '@/data';
import { Footer as FooterComponent } from 'ecommerce-mxtech';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();

  return (
    <FooterComponent
      backgroundColor='transparent'
      legal={footerData}
      onRedirect={(path) => {
        window.open(path, '_blank');
      }}
      visaImage='/images/visaMaster.png'
      masterImage='/images/openpay.jpg'
    />
  );
};

export default Footer;
