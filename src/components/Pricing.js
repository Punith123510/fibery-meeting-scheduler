// Pricing.js
import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">Solo</h2>
      <p className="text-gray-700 mb-2">$0 <span className="text-sm text-gray-500">1 user free</span></p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500">Pay Monthly</span>
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              id="toggle"
              className="sr-only"
            />
            <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
          </div>
        </label>
      </div>
      <button className="bg-green-500 text-white py-2 px-4 rounded-md w-full">Start free</button>
    </div>
  );
};

export default Pricing;