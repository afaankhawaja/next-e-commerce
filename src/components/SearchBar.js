"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/products?search=${encodeURIComponent(searchQuery)}`); // Update the URL with the search query
  };

  // Use effect to set the search query from the URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get('search');
    setSearchQuery(search || '');
  }, [window.location.search]);

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
