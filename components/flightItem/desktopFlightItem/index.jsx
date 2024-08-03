"use client";
import Image from "next/image";
import moment from 'jalali-moment'
import {useState} from "react";
import {IoMdClose} from "react-icons/io";
import {PiAirplaneTakeoffLight} from "react-icons/pi";
import {GrDocumentVerified} from "react-icons/gr";
import {IoMdArrowDropdown} from "react-icons/io";


const DesktopFlightItem = ({flightData}) => {
    const [isFlightDetailsVisible, setIsFlightDetailsVisible] = useState(false);

    const getClassType = (classType) => {
        if (["Y", "H", "K", "M", "L", "G", "V", "S", "N"].includes(classType)) {
            return "اکونومی";
        } else if (["C", "J", "R", "D"].includes(classType)) {
            return "بیزینس";
        } else if (["F", "A"].includes(classType)) {
            return "فرست کلاس";
        }
        return "ناشناخته";
    };

    return (
        <div className="hidden md:flex mb-2 justify-center w-full">
            <div className=" w-full max-w-[850px] bg-white">
                <div
                    className="flex justify-between items-center px-4"
                    style={{height: "142px"}}
                >
                    <div className="flex items-center mb-4">
                        <Image
                            src="/images/IranAir.png"
                            alt="airlineLogo"
                            height={56}
                            width={56}
                        />
                        <h2 className="text-sm text-greyish-brown mr-4">
                            {flightData.airline}
                        </h2>
                    </div>
                    <div>
                        <div className="w-full flex justify-between">
                            <div className="flex flex-col items-center mx-6">
                                <div className="text-2xl text-greyish-brown">
                                    {moment(flightData.departureTime).locale('fa').format('HH:MM')}
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm text-greyish-brown">
                                        {flightData.departureCity}
                                    </div>
                                    <div className="text-xs text-secondary-gray mr-2">
                                        ({flightData.departureAirport.toUpperCase()})
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-center">{`${Math.floor(flightData.totalDuration / 60)} ساعت و ${flightData.totalDuration % 60} دقیقه`}</p>
                                <div className="flex items-center justify-center mb-2 md:mb-10">
                                    <div className="rounded-full border border-blue-600 h-3 w-3 flex items-center"/>
                                    <div className="border border-b-1 border-[#eee] min-w-28"/>
                                    <div
                                        className="rounded-full border border-orange h-3 w-3 flex items-center"/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mx-6">
                                <div className="text-2xl text-greyish-brown">
                                    {moment(flightData.arrivalTime).locale('fa').format('HH:MM')}
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm text-greyish-brown">
                                        {flightData.arrivalCity}
                                    </div>
                                    <div className="text-xs text-secondary-gray mr-2">
                                        ({flightData.arrivalAirport.toUpperCase()})
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center pt-4 pr-4 pb-4 h-100"
                        style={{borderRight: "1px solid #eeeeee"}}
                    >
                        <div className="text-xs text-secondary-gray">یک نفر</div>
                        <div className="flex items-center pt-2">
                            <div className="ml-2 text-lg text-blue">
                                {flightData.price.toLocaleString()}
                            </div>
                            <div className="text-xs text-secondary-gray">تومان</div>
                        </div>
                        <div
                            className="w-[169px] h-10 flex items-center justify-center font-IRANSans text-sm text-white bg-blue rounded mt-3 cursor-pointer">انتخاب
                            بلیط
                        </div>
                    </div>
                </div>
                <div
                    className="flex justify-between items-center px-4"
                    style={{borderTop: "1px solid #eeeeee"}}
                >
                    <div className="h-10 flex items-center">
                        <div
                            className="text-xs text-greyish-brown ml-4 bg-[#f4f4f4] p-[4px_12px]"
                        >
                            {flightData.isCharter ? "چارتر" : "سیستمی"}
                        </div>
                        <div className="flex items-center">
                            <div className="text-xs text-greyish-brown">
                                اکونومی
                            </div>
                            <span className="px-2 pb-1">.</span>
                            <div className="text-xs text-greyish-brown">
                                {
                                    flightData.seatsRemaining
                                }{" "}
                                صندلی خالی
                            </div>
                            <span className="px-2 pb-1">.</span>
                            <div className="text-xs text-greyish-brown">
                                شماره پرواز :{" "}
                                {
                                    flightData.flightNumber
                                }
                            </div>
                            <span className="px-2 pb-1">.</span>
                            <div className="text-xs text-greyish-brown">
                                تامین‌کننده: پرایس لاین
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center text-xs ml-11 text-orange cursor-pointer"
                        onClick={() => setIsFlightDetailsVisible(!isFlightDetailsVisible)}
                    >
                        <div className="ml-1">جزئیات بیشتر</div>
                        <IoMdArrowDropdown
                            style={
                                isFlightDetailsVisible ? {transform: "rotate(180deg)"} : null
                            }
                        />
                    </div>
                </div>
                {isFlightDetailsVisible && (
                    <div>
                        <div className="w-full mt-6">
                            <div
                                className="flex border-b-1-[#eee] pr-4"
                            >
                                <div
                                    className="h-[40px] text-secondary-gray flex content-center items-center rounded-t-md px-3 ml-2 cursor-pointer bg-blue"
                                >
                                    <PiAirplaneTakeoffLight className="text-white font-bold" />
                                    <div className="pr-2 text-white">جزئیات پرواز</div>
                                </div>
                                <div className="h-[40px] text-secondary-gray flex content-center items-center rounded-tl-sm px-3 ml-2 cursor-pointer">
                                    <GrDocumentVerified />
                                    <div className="pr-2">قوانین و شرایط</div>
                                </div>
                            </div>
                            <div
                                className="px-8 py-5"
                            >
                                <div
                                    className="font-size-16 text-greyish mb-6"
                                >
                                    پرواز رفت{" "}
                                    {
                                      flightData.departureCity}{" "}
                                    -{" "}
                                    {flightData.arrivalCity }
                                </div>
                                <div className="flex">
                                    <div
                                        className="w-[56px] flex flex-col items-center text-[12px] text-[#6f6f6f] bt-8"
                                    >
                                        <Image
                                            src="/images/IranAir.png"
                                            alt="airline Logo"
                                            height={40}
                                            width={40}
                                        />
                                        <p className="py-2">
                                            {flightData.airline}
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col items-center ml-4"
                                    >
                                        <div
                                            className="w-[10px] h-[10px] border rounded-full border-red mb-2"
                                        ></div>
                                        <div
                                            className="h-full mx-2 w-1 border-l-4 border-dotted border-[#eee]"
                                        ></div>
                                        <div
                                            className="w-[10px] h-[10px] rounded-full border border-red mt-2"
                                        ></div>
                                    </div>
                                    <div>
                                        <div
                                            className="text-[14px] flex"
                                        >
                                            <div className="flex ml-8">
                                                <div
                                                    className="ml-3 text-greyish"
                                                >
                                                    {moment(flightData.departureTime).format('hh:mm')}
                                                </div>
                                                <div
                                                    className="ml-2 text-greyish"
                                                >
                                                    {flightData.departureCity}
                                                </div>
                                                <div
                                                    className="text-greyish">
                                                    ({flightData.departureAirport.toUpperCase()})
                                                </div>
                                            </div>
                                            <div className="flex ml-8">
                                                <div
                                                    className="ml-3 text-greyish" >
                                                    {moment(flightData.departureTime).locale('fa').format('DD  MMM  YYYY')}
                                                </div>
                                                <div
                                                    className= "ml-3 text-greyish">
                                                    ( {moment(flightData.departureTime).format('DD  MMM')} )
                                                </div>
                                            </div>
                                            <div
                                                className="text-[#8d8d8d]"
                                            >
                                                {flightData.arrivalAirportName}
                                            </div>
                                        </div>
                                        <div className="my-6 flex">
                                            <div className="ml-5">
                                                <div className="flex items-center mb-2">
                                                    <div
                                                        className="w-[72px] text-secondary-gray ml-2"
                                                    >
                                                        مدت پرواز
                                                    </div>
                                                    <div
                                                        className="text-[12px]"
                                                    >
                                                        {`${Math.floor(flightData.totalDuration / 60)} ساعت و ${flightData.totalDuration % 60} دقیقه`}
                                                    </div>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div
                                                        className="w-[72px] text-secondary-gray ml-2"
                                                    >
                                                        نوع هواپیما
                                                    </div>
                                                    <div
                                                        className="text-[12px]"
                                                    >
                                                        Airbus A320
                                                    </div>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div
                                                        className="w-[72px] text-secondary-gray ml-2"
                                                    >
                                                        کلاس پرواز
                                                    </div>
                                                    <div
                                                        className="text-[12px]"
                                                    >
                                                        اکونومی
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ml-5">
                                                <div className="flex items-center mb-2">
                                                    <div
                                                        className="w-[72px] text-secondary-gray ml-2"
                                                    >
                                                        نوع پرواز
                                                    </div>
                                                    <div
                                                        className="text-[12px]"
                                                    >
                                                        سیستمی
                                                    </div>
                                                </div>
                                                <div className="flex items-center mb-2">
                                                    <div
                                                        className="w-[72px] text-secondary-gray ml-2"
                                                    >
                                                        بار مجاز
                                                    </div>
                                                    <div
                                                        className="text-[12px]"
                                                    >
                                                        {flightData.baggage}
                                                    </div>
                                                </div>
                                                <div className="flex mb-2 items-center">
                                                    <div
                                                        className="w-[72px] text-secondary-gray text-nowrap ml-2"
                                                    >
                                                        کلاس نرخی
                                                    </div>
                                                    <div
                                                        className="text-[12px]"
                                                    >
                                                        { getClassType(flightData.className) } {flightData.className}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div
                                                    className="w-[72px] text-secondary-gray"
                                                >
                                                    استرداد
                                                </div>
                                                <div className="text-[12px] text-red">
                                                    غیر قابل استرداد
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="text-[14px] flex"
                                        >
                                            <div className="flex ml-8">
                                                <div
                                                    className="text-primary-gray ml-3"
                                                >
                                                    {moment(flightData.arrivalTime).format('hh:mm')}
                                                </div>
                                                <div
                                                    className={
                                                        "ml-2 text-greyish"
                                                    }
                                                >
                                                    {flightData.arrivalCity}
                                                </div>
                                                <div
                                                    className="ml-3 text-greyish">
                                                    ({flightData.arrivalAirport.toUpperCase()})
                                                </div>
                                            </div>
                                            <div className="flex ml-8">
                                                <div
                                                    className="ml-3 text-greyish">
                                                    {moment(flightData.arrivalTime).locale('fa').format('DD  MMM  YYYY')}
                                                </div>
                                                <div
                                                    className="ml-3 text-greyish">
                                                    ( {moment(flightData.arrivalTime).format('DD  MMM')} )
                                                </div>
                                            </div>
                                            <div
                                                className="text-[#8d8d8d]"
                                            >
                                                {flightData.arrivalCity}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-[#eee] flex justify-between items-center px-3 mx-4">
                            <div className="flex justify-between items-center border-l border-l-[#eee] py-2 px-2">
                                <div
                                    className="text-[14px] text-greyish flex items-center ml-2"
                                >
                                    <div>2</div>
                                    <IoMdClose/>
                                    <div>بزرگسال</div>
                                </div>
                                <div
                                    className="text-[14px] text-greyish flex items-center"
                                >
                                    <div className="ml-2">
                                        {flightData.price.toLocaleString()}
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-l border-l-[#eee] py-2 px-2">
                                <div
                                    className="text-[14px] text-greyish flex items-center ml-2"
                                >
                                    <div>2</div>
                                    <IoMdClose />
                                    <div>کودک</div>
                                </div>
                                <div
                                    className="text-[14px] text-greyish flex items-center"
                                >
                                    <div className="ml-2">
                                        {flightData.price.toLocaleString()}
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-l border-l-[#eee] py-2 px-2">
                                <div
                                    className="text-[14px] text-greyish flex items-center ml-2"
                                >
                                    <div>1</div>
                                    <IoMdClose />
                                    <div>نوزاد</div>
                                </div>
                                <div
                                    className="text-[14px] text-greyish flex items-center"
                                >
                                    <div className="ml-2">
                                        {flightData.price.toLocaleString()}
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center ml-2">
                                <div
                                    className="text-[14px] text-blue font-bold mx-2"
                                >
                                    <div>مجموع:</div>
                                </div>
                                <div
                                    className="text-[14px] text-greyish flex items-center"
                                >
                                    <div className="ml-2">
                                        {flightData.price.toLocaleString()}
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-4"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DesktopFlightItem;
