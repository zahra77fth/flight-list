import React, { useState } from 'react';

const SortDropdown = ({ onSortChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState('');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSortChange = (sortValue) => {
        setSelectedSort(sortValue);
        onSortChange(sortValue);
        setIsOpen(false); // Close the dropdown after selecting an item
    };

    return (
        <div className="relative mb-4 flex items-center align-start">
            <label htmlFor="sortSelect" className="block text-sm mx-3 font-medium text-secondary-gray">
                مرتب‌سازی:
            </label>
            <div className="relative w-full mt-1">
                <div
                    className="block px-3 py-2  bg-white w-[150px] shadow-sm cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onClick={toggleDropdown}
                >
                    {selectedSort ? (selectedSort === 'price' ? 'قیمت' : 'تاریخ پرواز') : 'انتخاب کنید'}
                </div>
                {isOpen && (
                    <div className="absolute z-10 border-t border-[#eee] w-full bg-white shadow-lg">
                        <div
                            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSortChange('price')}
                        >
                            قیمت
                        </div>
                        <div
                            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSortChange('date')}
                        >
                            تاریخ پرواز
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SortDropdown;
