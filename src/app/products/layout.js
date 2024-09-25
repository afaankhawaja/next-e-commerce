
import React from 'react';
import Link from 'next/link';
import { CategoryMenu } from '@/components/CategoryMenu';

export default function ProductsLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-gray-900">
              <Link href="/products">All products</Link>
            </h1>
            <CategoryMenu />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-500">
          © 2024 Your E-commerce Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
