import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MdOutlineAddCircle } from "react-icons/md";
import { addToCart } from '../../../Features/apiSlice';

function MenClothing() {
  const { category } = useParams();
  const { products } = useSelector((state) => state.apiData);
  const dispatch = useDispatch();
  const filteredProducts = products.filter((item) => item.category.toLowerCase() === category.toLowerCase());

  return (
    <>
      <div className=" h-screen py-8 items-center pl-[200px]">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4 text-blue">{category.toUpperCase()}</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              {filteredProducts.map((item) => (
                <div key={item.id} className="bg-blue-900 text-white rounded-lg shadow-md p-6 mb-4">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold">Product</th>
                        <th className="text-left font-semibold">Price</th>
                        <th className="text-left font-semibold">Quantity</th>
                        <th className="text-left font-semibold">Total</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                      <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img className="h-16 w-16 mr-4" src={item.image} alt={item.title} />
                            <span className="font-semibold">{item.title}</span>
                          </div>
                        </td>
                        <td className="py-4">{item.price}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <span className="text-center w-8">1</span>
                            <button className="border rounded-md py-2 px-4 ml-2 " onClick={()=> dispatch(addToCart(item))}><MdOutlineAddCircle /></button>
                          </div>
                        </td>
                        <td className="py-4">{0}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenClothing;
