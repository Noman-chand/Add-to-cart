import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './EcomSlice';
import { deleteData } from './EcomSlice';

function Cart() {
    const { allItem, totalPrice} = useSelector((state) => state.product);
    const {quantity} = useSelector((state)=> state.product.allItem);
    console.log(quantity);
    const dispatch = useDispatch();

    const delData = (id)=>{
        dispatch(deleteData(id))

    }

    return (
        <>
            <button type='button' className='px-2 py-1 bg-purple-700 hover:bg-purple-800 text-white rounded-md mt-2 ml-2'>
                <Link to="/">Back To Home</Link>
            </button>
            <div className="p-4 max-w-xl mx-auto mt-16">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
                        <h1 className="text-lg font-bold">Shopping Cart</h1>
                        <span className="text-gray-600">({allItem.length} items)</span>
                    </div>
                    {
                        allItem.map((val) => (
                            <div className="p-4" key={val.id}>
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 object-contain rounded-lg mr-4" src={val.image} alt="Product" />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-bold">{val.title}</h2>
                                        <span className="text-gray-600">{val.price}</span>
                                    </div>
                                    <span className="mx-4 text-xl font-serif font-bold text-blue-700">({val.quantity})</span> {/* Display quantity */}

                                    <button  onClick={()=> delData(val.id)} className='px-2 py-1 bg-red-700 hover:bg-red-800 text-white rounded-md'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                    <div className="px-4 py-3 bg-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg">Total:</span>
                            <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
                        </div>
                        <button className="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
