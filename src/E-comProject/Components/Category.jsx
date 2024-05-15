import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Category() {
  
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.apiData);
  const uniqueCategories = [...new Set(products.map((item) => item.category))];

  const moveToButton = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 space-x-40 bg-blue-900  mt-1 rounded-lg">
        {uniqueCategories.map((category) => (
          <button
            onClick={() => moveToButton(category)}
            key={category}
            className="px-4 py-2 text-white font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
    </>
  );
}

export default Category;
