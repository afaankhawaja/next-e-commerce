
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div className="relative">
      <button
      onClick={toggleDropdown}
        className="px-4 py-2 text-gray-700 bg-white border rounded-md hover:bg-gray-200"
      >
        Categories 
      </button>
      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-full bg-white border rounded-md shadow-lg">
          <ul className="max-h-60 overflow-y-auto">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/products?category=${encodeURIComponent(category)}`}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)} // Close dropdown on selection
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

