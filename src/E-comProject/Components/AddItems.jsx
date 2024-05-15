import React from 'react';
import { useSelector } from 'react-redux';

function AddItems() {
  const { cartItem } = useSelector((state) => state.apiData);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Cart Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cartItem.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-semibold">${item.price}</span>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddItems;
