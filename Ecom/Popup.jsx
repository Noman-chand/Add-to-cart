import React from 'react';
import {useSelector} from "react-redux"

function Popup({ setPopup, id }) {
    const { products } = useSelector((state) => state.product);

    const singleUser = products.filter((des) => des.id === id);

    return (
        <>
            {/* Backdrop with blur effect */}
            <div className="fixed inset-0 z-40 bg-black opacity-50 backdrop-filter backdrop-blur-xl blur-xl"></div>

            {/* Popup */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="bg-blue-700 rounded-lg overflow-hidden shadow-xl w-96">
                    <div className="px-6 py-4">
                        <p className="text-xl font-bold mb-2 font-serif text-yellow-500">{singleUser[0].title}</p>
                        <p className="text-white mt-2">{singleUser[0].description}</p>
                        <button onClick={() => setPopup(false)} className='px-2 py-1 bg-green-700 hover:bg-green-800 mt-2 text-white rounded-md'>Close</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Popup;
