'use client'

import { useState } from "react";
import FlightItem from "../flightItem/FlightItem";
import Pagination from "../pagination/Pagination";

const FlightList = ({ flightData }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total number of pages
    const totalPages = Math.ceil(flightData.length / itemsPerPage);

    // Calculate startIndex and endIndex for pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    // Slice the flightData array to get items for the current page
    const currentFlights = flightData.slice(startIndex, endIndex);
    console.log(totalPages,currentPage)

    return (
        <>
            {/* Render the paginated FlightItem components */}
            {currentFlights.map((flightDataItem, index) => (
                <FlightItem key={index} flightData={flightDataItem} />
            ))}

            {/* Pagination controls */}
            <Pagination
                activePage={currentPage}
                setActivePage={setCurrentPage}
                totalPages={totalPages}
            />
        </>
    );
};

export default FlightList;
