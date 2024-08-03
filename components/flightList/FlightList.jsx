'use client'

import {useState, useEffect, Suspense} from "react";
import FlightItem from "../flightItem/FlightItem";
import Pagination from "../pagination/Pagination";
import Filter from "../filter";
import SortDropdown from "../sort/index";

const FlightList = ({ flightData }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState('');
    const [filters, setFilters] = useState({ airlines: [], flightsKinds: [], allAirlines: [] });

    const handleSortChange = (sortBy) => {
        setSort(sortBy);
        setCurrentPage(1);
    };

    useEffect(() => {
        const uniqueAirlines = [...new Set(flightData.map(flight => flight.airline))];
        setFilters(prevFilters => ({ ...prevFilters, allAirlines: uniqueAirlines }));
    }, [flightData]);

    const handleFilterChange = (filterType, updatedValues) => {
        setFilters(prevFilters => ({ ...prevFilters, [filterType]: updatedValues }));
        setCurrentPage(1); // Reset to first page when filters change
    };

    const filteredFlights = flightData.filter(flight => {
        const airlineFilter = filters.airlines.length === 0 || filters.airlines.includes(flight.airline);
        const flightsKindFilter = filters.flightsKinds.length === 0 || filters.flightsKinds.includes(flight.isCharter ? 'isCharter' : 'isSystem');
        return airlineFilter && flightsKindFilter;
    });

    const sortedFlights = [...filteredFlights].sort((a, b) => {
        if (sort === 'price') {
            return a.price - b.price; // assuming price is a number
        } else if (sort === 'date') {
            return new Date(a.departureTime).getTime() - new Date(b.departureTime).getTime(); // assuming date is in a parseable format
        } else {
            return 0; // no sorting
        }
    });

    const totalPages = Math.ceil(sortedFlights.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentFlights = sortedFlights.slice(startIndex, endIndex);

    return (
        <>
            <div className="flex justify-end max-w-[1000px] w-full">
            <SortDropdown onSortChange={handleSortChange} />
            </div>
            <div className="flex flex-col w-full md:max-w-[1000px] md:flex-row">
                <Suspense fallback={<p>Loading Airlines...</p>}>
                    <Filter filters={filters} onFilterChange={handleFilterChange} />
                </Suspense>
                <div>
                    {currentFlights.map((flightDataItem, index) => (
                        <FlightItem key={index} flightData={flightDataItem} />
                    ))}

                    <Pagination
                        activePage={currentPage}
                        setActivePage={setCurrentPage}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </>
    );
};

export default FlightList;
