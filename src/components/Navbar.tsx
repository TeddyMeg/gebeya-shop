import { useState } from 'react';
import { ShoppingBag, Search, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">Gebeya Shop</a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-purple-600">Home</a>
            <a href="/men" className="hover:text-purple-600">Men</a>
            <a href="/women" className="hover:text-purple-600">Women</a>
            <a href="/kids" className="hover:text-purple-600">Kids</a>
            <a href="/accessories" className="hover:text-purple-600">Accessories</a>
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center hover:text-purple-600"
              >
                More <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <a href="/perfumes" className="block px-4 py-2 hover:bg-purple-50">Perfumes</a>
                  <a href="/jewelries" className="block px-4 py-2 hover:bg-purple-50">Jewelries</a>
                  <a href="/gym" className="block px-4 py-2 hover:bg-purple-50">Gym wears</a>
                  <a href="/vintage" className="block px-4 py-2 hover:bg-purple-50">Vintage wears</a>
                  <a href="/sport" className="block px-4 py-2 hover:bg-purple-50">Sport wear</a>
                  <a href="/pyjamas" className="block px-4 py-2 hover:bg-purple-50">Pyjamas</a>
                  <a href="/slippers" className="block px-4 py-2 hover:bg-purple-50">Slippers</a>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-64 pl-4 pr-10 py-2 rounded-full border focus:outline-none focus:border-purple-500"
              />
              <button className="absolute right-0 top-0 mt-2 mr-3">
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <img src="https://cdn-icons-png.flaticon.com/512/197/197374.png" alt="EN" className="h-5 w-5" />
              <span>EN/Currency</span>
              <ChevronDown className="h-4 w-4" />
            </div>

            <a href="/cart" className="relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}