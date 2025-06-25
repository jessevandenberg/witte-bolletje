
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Het witte bolletje
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-orange-600 border-b-2 border-orange-600' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/assortiment"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive('/assortiment') 
                  ? 'text-orange-600 border-b-2 border-orange-600' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Assortiment
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 border border-gray-300 rounded-md ${
                isActive('/contact') 
                  ? 'bg-orange-600 text-white border-orange-600' 
                  : 'text-gray-700 hover:bg-orange-50 hover:border-orange-300'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
