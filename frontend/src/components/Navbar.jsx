import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ShoppingCart, User, LogOut, Home } from 'lucide-react';

const Navbar = () => {
  const { user, logout, cart } = useContext(AppContext);
  const cartItemCount = cart?.reduce((acc, item) => acc + item.qty, 0) || 0;

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-white p-2 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <ShoppingCart className="text-indigo-600 w-6 h-6" />
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">
              Mock<span className="text-indigo-200">-Ecom-Cart</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            <Link 
              to="/" 
              className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">Home</span>
            </Link>

            <Link 
              to="/cart" 
              className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:shadow-lg relative"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="font-medium">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/20">
                <div className="flex items-center space-x-2 px-3 py-2 bg-white/10 rounded-lg">
                  <User className="w-4 h-4 text-white" />
                  <span className="text-white font-medium">{user.name}</span>
                </div>
                <button 
                  onClick={logout} 
                  className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/20">
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200 font-medium"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="px-4 py-2 bg-white text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;