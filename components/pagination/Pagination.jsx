// Pagination.js

import React from 'react';

const Pagination = ({ activePage, setActivePage, totalPages }) => {
    // Determine the range of pages to be displayed
    const generatePageNumbers = () => {
        const pages = [];
        let startPage = Math.max(activePage - 2, 1);
        let endPage = Math.min(activePage + 2, totalPages);

        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push('...');
            }
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className="flex justify-center items-center mt-5">
            <button
                onClick={() => setActivePage(activePage - 1)}
                disabled={activePage === 1}
                className="border rounded-md bg-white cursor-pointer mx-1 px-3 py-2 text-base disabled:cursor-not-allowed disabled:opacity-50"
            >
                &lt;
            </button>
            {pageNumbers.map((number, index) => (
                <button
                    key={index}
                    onClick={() => number !== '...' && setActivePage(number)}
                    className={`border rounded-md cursor-pointer mx-1 px-3 py-2 text-base ${
                        number === activePage ? 'bg-blue-500 text-white font-bold' : 'bg-white'
                    }`}
                >
                    {number}
                </button>
            ))}
            <button
                onClick={() => setActivePage(activePage + 1)}
                disabled={activePage === totalPages}
                className="border-none bg-white cursor-pointer mx-1 px-3 py-2 text-base disabled:cursor-not-allowed disabled:opacity-50"
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
