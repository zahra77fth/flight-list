import React, { useState } from 'react';
import {
    Checkbox,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Filter = ({ filters, onFilterChange }) => {
    const [isAirlinesOpen, setIsAirlinesOpen] = useState(true);
    const [isFlightKindsOpen, setIsFlightKindsOpen] = useState(true);

    const handleFilterChange = (e, value, filterType) => {
        const updatedFilters = e.target.checked
            ? [...filters[filterType], value]
            : filters[filterType].filter(item => item !== value);

        onFilterChange(filterType, updatedFilters);
        console.log(e, value);
    };

    const flightsKindFilterContent = [
        { title: "پروازهای سیستمی", value: "isSystem" },
        { title: "پروازهای چارتری", value: "isCharter" },
    ];

    return (
        <div className='mx-4 bg-white min-w-[250px]'>
            <div className="p-4 border-b border-[#eee]">
                <h3 className="text-lg font-bold">فیلتر ها</h3>
            </div>
            <div className="mt-4">
                <div className="flex justify-between items-center cursor-pointer pr-4" onClick={() => setIsAirlinesOpen(!isAirlinesOpen)}>
                    <Typography className='mr-2 font-bold'>
                        ایرلاین ها
                    </Typography>
                    {isAirlinesOpen ? (
                        <FaChevronUp className="ml-2 text-secondary-gray" />
                    ) : (
                        <FaChevronDown className="ml-2 text-secondary-gray" />
                    )}
                </div>
                {isAirlinesOpen && (
                    <div className="flex flex-col justify-start mt-2 max-h-[300px] overflow-y-auto">
                        {filters.allAirlines.map((airline) => (
                            <div key={airline}>
                                <label
                                    htmlFor={airline}
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                >
                                    <ListItemPrefix className="mr-3">
                                        <Checkbox
                                            id={airline}
                                            ripple={false}
                                            onChange={(e) => handleFilterChange(e, airline, 'airlines')}
                                            checked={filters.airlines.includes(airline)}
                                            className="hover:before:opacity-0 m-2"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                        />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="font-medium">
                                        {airline}
                                    </Typography>
                                </label>
                            </div>
                        ))}
                    </div>
                )}
                <div className="flex items-center border-t pt-4 border-[#eee] justify-between cursor-pointer pr-4 mt-4" onClick={() => setIsFlightKindsOpen(!isFlightKindsOpen)}>
                    <Typography className='mr-2 font-bold'>
                        نوع پرواز
                    </Typography>
                    {isFlightKindsOpen ? (
                        <FaChevronUp className="ml-2 text-secondary-gray" />
                    ) : (
                        <FaChevronDown className="ml-2 text-secondary-gray" />
                    )}
                </div>
                {isFlightKindsOpen && (
                    <div className="flex flex-col justify-start mt-2">
                        {flightsKindFilterContent.map(({ title, value }) => (
                            <div key={value}>
                                <label
                                    htmlFor={value}
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                >
                                    <ListItemPrefix className="mr-3">
                                        <Checkbox
                                            id={value}
                                            ripple={false}
                                            onChange={(e) => handleFilterChange(e, value, 'flightsKinds')}
                                            checked={filters.flightsKinds.includes(value)}
                                            className="hover:before:opacity-0 m-2"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                        />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="font-medium">
                                        {title}
                                    </Typography>
                                </label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filter;
