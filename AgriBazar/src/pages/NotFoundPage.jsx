import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/20 dark:from-primary-900/20 dark:to-secondary-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-200/20 to-secondary-200/20 dark:from-accent-900/10 dark:to-secondary-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="text-center relative z-10">
        <div className="mb-4">
          <img 
            src="https://images.pexels.com/photos/4439538/pexels-photo-4439538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Lost in the fields" 
            className="w-64 h-64 object-cover rounded-lg mx-auto shadow-lg"
          />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Oops! Page lost in the fields.
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          We couldn't find the page you're looking for. It seems to have wandered off.
        </p>
        
        <Link to="/">
          <Button className="flex items-center justify-center">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;