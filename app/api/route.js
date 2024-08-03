import { fetchFlightData } from './fetchData';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;
    const pageSize = searchParams.get('pageSize') || 10;
    const currentPage = parseInt(page, 10);
    const size = parseInt(pageSize, 10);

    const { flights } = await fetchFlightData();

    const startIndex = (currentPage - 1) * size;
    const paginatedFlights = flights.slice(startIndex, startIndex + size);

    return new Response(JSON.stringify({
        flights: paginatedFlights,
        currentPage,
        pageSize: size,
        totalItems: flights.length,
        totalPages: Math.ceil(flights.length / size),
    }), {
        headers: { 'Content-Type': 'application/json' },
    });
}
