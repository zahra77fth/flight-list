import FlightItem from "./FlightItem";


const FlightList = ({ flightData }) => {
    return (
        <div className="">
            <FlightItem flightData={flightData[1]} />
        </div>
    );
};

export default FlightList;
