import React, { useEffect, useState } from 'react';
import { getStoreData } from './EcomSlice';
import { useDispatch, useSelector } from 'react-redux';
import Popup from './Popup';
import { addToCart } from './EcomSlice';


function CartDetail() {
    const { isLoading, products } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const [id,setId] = useState('');
    const [popup,setPopup] = useState(false);
    

    useEffect(() => {
        dispatch(getStoreData());
    }, []);


    return (
        <>
        {popup && <Popup setPopup ={setPopup} products={products} id ={id} />}
        <div className="flex justify-center bg-purple-600">
            {isLoading && <h1 className='text-2xl text-red-700 font-serif font-bold'>Loading.....</h1>}
            <div className="flex flex-wrap justify-center gap-4 mt-14">
                {products.map((item) => (
                    <div key={item.id} className="max-w-md bg-white rounded-lg overflow-hidden border border-gray-400 w-80">
                        <div className="px-4 py-2 border-b border-gray-200">
                            <h2 className="font-semibold text-gray-800">{item.title}</h2>
                        </div>
                        <div className="flex flex-col divide-y divide-gray-200">
                            <div className="flex items-center py-4 px-6">
                                <img className="w-16 h-16 object-cover rounded" src={item.image} alt="Product Image" />
                                <div className="ml-3 flex flex-col">
                                    <h3 className="text-gray-900 font-semibold">{item.category}</h3>
                                    <p className="text-gray-700 mt-1">{item.price}</p>
                                </div>
                                <button onClick={()=> dispatch(addToCart(item))} className="ml-auto py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
                                    Add
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
                            <h3 className="text-gray-900 font-semibold">Total: $29.98</h3>
                            <button onClick={()=> [ setId(item.id), setPopup(true)]} className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                                Checkout
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default CartDetail;
