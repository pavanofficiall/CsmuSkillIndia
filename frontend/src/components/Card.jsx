import React from 'react';

function Card({ imageSrc, title, enrolled, price, originalPrice, rating, reviews }) {
    return (
        <div className="bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="relative">
                    <img 
                        src={imageSrc}
                        alt={title}
                        className="w-full h-52 object-cover"
                    />
                </div>
                
                <div className="p-5 space-y-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                        <p className="text-gray-500 mt-1">{enrolled} enrolled</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-gray-900">${price}</p>
                            {originalPrice && (
                                <p className="text-sm text-gray-500 line-through">${originalPrice}</p>
                            )}
                        </div>
                        
                        <div className="flex items-center gap-1">
                            <div className="text-yellow-400">{'★'.repeat(rating)}</div>
                            <div className="text-gray-300">{'★'.repeat(5 - rating)}</div>
                            <span className="text-sm text-gray-600 ml-1">({reviews})</span>
                        </div>
                    </div>
                    
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
