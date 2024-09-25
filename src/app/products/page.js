"use client";

import ProductCard from '@/components/ProductCard';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

async function fetchProducts(category) {
  try {
    let url = 'http://localhost:3000/api/products';
    if (category) {
      url += `?category=${encodeURIComponent(category)}`;
    }
    
    const res = await fetch(url, { next: { revalidate: 60 } });
    
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category'); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts(category);
      setProducts(data);
    }

    getProducts();
  }, [category]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {category ? `Products in ${category}` : 'Our Products'}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
