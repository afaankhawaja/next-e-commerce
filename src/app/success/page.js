'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Success() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      console.log('Payment successful. Session ID:', sessionId);
      // You can add any additional logic here if needed
      
      // Redirect to home page after 5 seconds
      const timer = setTimeout(() => {
        router.push('/products');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [router, searchParams]);

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <p>Your order has been successfully processed.</p>
      <p>You will be redirected to the homepage in 5 seconds.</p>
    </div>
  );
}