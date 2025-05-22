'use client';
import { ProductDetail } from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';

export default function Product({ params }) {
  const router = useRouter();
  return (
    <main>
      <Navbar />
      <div className='container w-full mx-auto mt-10'>
        <ProductDetail
          classNameBack='text-black'
          onClickBack={() => router.push('/#products')}
          variant='horizontal'
          classNameButtonDefault='bg-white text-black border-primary'
          id={params.id}
        />
      </div>
      <Footer />
    </main>
  );
}
