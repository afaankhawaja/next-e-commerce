"use client"
import Link from 'next/link';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    return (
    <nav className="bg-white shadow-md m-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              MyStore
            </Link>
          </div>
          <div className="flex items-center">
           
            <Link href="/cart" className=" flex space-x-1 ml-4 p-2 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <ShoppingCart className="h-6 w-6" /> <span className='text-xl'>{cart.length}</span>
            </Link>
            <Link href="/account" className="ml-4 p-2 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;