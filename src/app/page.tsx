
import { redirect } from 'next/navigation';
import Product from '@/app/products/page'


export default function Home() {
  // redirect('/products');
  return (
    <>
    <Product>
    </Product>
    </>
  );
}
