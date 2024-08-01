// lib/fetchFlightData.js
import { promises as fs } from 'fs';
import path from 'path';

export async function fetchFlightData() {
    try {
        const filePath = path.resolve(process.cwd(), 'app/api', 'flight-data.json');
        const fileContent = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContent);

        const {
            additionalData: { airports: airportData, airlines: airlineData },
            pricedItineraries,
        } = data;

        const flightsData = pricedItineraries.map(itinerary => ({
            flightNumber: itinerary.originDestinationOptions[0].flightSegments[0].operatingAirline.flightNumber,
            isCharter: itinerary.originDestinationOptions[0].flightSegments[0].isCharter,
            seatsRemaining: itinerary.originDestinationOptions[0].flightSegments[0].seatsRemaining,
            airline: airlineData.find(airline => airline.iata === itinerary.validatingAirlineCode)?.nameFa || 'Unknown',
            price: itinerary.airItineraryPricingInfo.itinTotalFare.totalFare,
            departureTime: itinerary.originDestinationOptions[0].flightSegments[0].departureDateTime,
            departureAirport: itinerary.originDestinationOptions[0].flightSegments[0].departureAirportLocationCode,
            arrivalCity: airportData.find(airport => airport.iata === itinerary?.originDestinationOptions[0]?.flightSegments?.at(-1)?.arrivalAirportLocationCode)?.cityFa || 'Unknown',
            arrivalTime: itinerary.originDestinationOptions[0]?.flightSegments?.at(-1)?.arrivalDateTime, // Fixed field name
            arrivalAirport: itinerary?.originDestinationOptions[0]?.flightSegments?.at(-1)?.arrivalAirportLocationCode,
            departureCity: airportData.find(airport => airport.iata === itinerary.originDestinationOptions[0].flightSegments[0].departureAirportLocationCode)?.cityFa || 'Unknown',
            totalDuration: itinerary.originDestinationOptions[0].journeyDurationPerMinute,
            flightSegments: itinerary.originDestinationOptions[0].flightSegments,
        }));

        return {
            flights: flightsData,
            airlines: airlineData,
            airports: airportData,
        };
    } catch (error) {
        console.error('Error fetching flight data:', error);
        return {
            flights: [],
            airlines: [],
            airports: [],
        };
    }
}
