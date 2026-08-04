import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 px-4">
      <h1 className="text-6xl font-extrabold text-blue-900 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <button className="bg-yellow-400 text-[#10163a] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
