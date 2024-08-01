import DesktopFlightItem from "../flightItem/desktopFlightItem";
import MobileFlightItem from "../flightItem/mobileFlightItem";

const ListItem = ({ flightData }) => {
    return (
        <>
            <DesktopFlightItem flightData={flightData} className="hidden md:block" />
            <MobileFlightItem flightData={flightData} className="block md:hidden" />
        </>
    );
};

export default ListItem;
