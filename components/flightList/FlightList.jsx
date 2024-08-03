'use client'

import { useState, useEffect } from "react";
import FlightItem from "../flightItem/FlightItem";
import Pagination from "../pagination/Pagination";
import Filter from "../filter/index";

const FlightList = ({ flightData }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const [filters, setFilters] = useState({ airlines: [], flightsKinds: [], allAirlines: [] });

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

    const totalPages = Math.ceil(filteredFlights.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    const currentFlights = filteredFlights.slice(startIndex, endIndex);

    return (
        <div className="flex">
            <Filter filters={filters} onFilterChange={handleFilterChange} />
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
    );
};

export default FlightList;
