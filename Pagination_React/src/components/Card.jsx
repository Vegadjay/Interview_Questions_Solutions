import React from 'react';

const Card = ({ img, name, price }) => {
    return (
        <div className='h-[32rem] w-80 border-2 border-gray-300 rounded-2xl shadow-lg p-6 flex flex-col items-center  hover:shadow-2xl transition duration-300'>
            <img src={img} alt={name} className='h-40 w-40 rounded-full object-cover border-4 border-gray-200' />
            <h1 className='text-2xl font-semibold mt-4 text-stake-800'>{name}</h1>
            <span className='text-xl text-slate-100 mt-2'>${price}</span>
            <button className='mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-200'>
                Buy Now
            </button>
        </div>
    );
};

export default Card;
