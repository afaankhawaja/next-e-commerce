'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
  };

  useEffect(() => {
    const search = searchParams.get('search');
    setSearchQuery(search || '');
  }, [searchParams]);

  return (
    <form onSubmit={handleSubmit} className="my-4 flex w-1/2">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search products..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none"
      />
      <button type="submit" className="hidden md:block ml-2 px-4 py-2 bg-blue-600 text-white rounded-md">
        Search
      </button>
    </form>
  );
};