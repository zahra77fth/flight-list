// app/page.js
import { fetchFlightData } from './api/fetchData';
import FlightList from '../components/flightList/FlightList';

export default async function Home() {
    const { flights } = await fetchFlightData();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <FlightList flightData={flights} />
        </main>
    );
}
