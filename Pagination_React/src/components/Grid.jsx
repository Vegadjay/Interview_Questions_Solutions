import React, { useEffect, useState } from 'react';
import Card from './Card';

const PER_PAGE_ITEMS = 6;

const Grid = () => {
    const [productData, setProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();
                setProductData(data.products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        getProduct();
    }, []);

    const totalProducts = productData.length;

    const noOfPages = Math.ceil(totalProducts / PER_PAGE_ITEMS);
    const startingIndex = currentPage * PER_PAGE_ITEMS;
    const endIndex = startingIndex + PER_PAGE_ITEMS;

    const changeIndex = (id) => {
        setCurrentPage(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productData.slice(startingIndex, endIndex).map(data => (
                    <div key={data.id} className="h-full">
                        <Card
                            img={data.images}
                            name={data.title}
                            price={data.price}
                            description={data.description}
                            rating={data.rating}
                            category={data.category}
                        />
                    </div>
                ))}
            </div>

            {noOfPages > 0 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => currentPage > 0 && changeIndex(currentPage - 1)}
                        disabled={currentPage === 0}
                        className="px-3 py-2 bg-gray-200 rounded-l-md hover:bg-gray-300 disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <div className="flex">
                        {[...Array(noOfPages).keys()].map((num) => (
                            <button
                                key={num}
                                onClick={() => changeIndex(num)}
                                className={`h-10 w-10 flex items-center justify-center border-t border-b ${currentPage === num
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                            >
                                {num + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => currentPage < noOfPages - 1 && changeIndex(currentPage + 1)}
                        disabled={currentPage >= noOfPages - 1}
                        className="px-3 py-2 bg-gray-200 rounded-r-md hover:bg-gray-300 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Grid;