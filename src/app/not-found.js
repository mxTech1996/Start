'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Next

const PageNotFound = () => {
  const navigation = useRouter();

  useEffect(() => {
    navigation.push('/');
  }, []);

  return null;
};

export default PageNotFound;
