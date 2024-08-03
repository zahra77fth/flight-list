"use client";
import Image from "next/image";
import {useState} from "react";
import moment from 'jalali-moment';
import {IoMdClose} from "react-icons/io";
import {PiAirplaneTakeoffLight} from "react-icons/pi";
import {GrDocumentVerified} from "react-icons/gr";

const MobileFlightItem = ({flightData}) => {
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
        <div className="">
            <div className="block w-full h-[270px] bg-white p-[13px_16px_16px_16px] mb-4 md:hidden">
                <div className="flex items-center mb-[18px]">
                    <Image
                        src="/images/IranAir.png"
                        alt="airlineLogo"
                        height={40}
                        width={40}
                    />
                    <h2 className="text-[14px] text-greyish-brown mr-[16px]">
                        {flightData.airline}
                    </h2>
                </div>
                <div className="w-full flex justify-between">
                    <div className="text-[24px] text-greyish-brown">
                        {moment(flightData.departureTime).locale('fa').format('HH:MM')}
                    </div>
                    <div className="flex flex-col w-full items-center self-baseline">
                        <div className="flex flex-col w-full items-center justify-center">
                            <p className="text-center">{`${Math.floor(flightData.totalDuration / 60)} ساعت و ${flightData.totalDuration % 60} دقیقه`}</p>
                            <div className="flex items-center justify-center mb-2 md:mb-10 w-full px-14">
                                <div className="rounded-full border border-blue-600 h-3 w-3 flex items-center"/>
                                <div className="border-t border-secondary-gray w-full"/>
                                <div className="rounded-full border border-orange h-3 w-3 flex items-center"/>
                            </div>
                        </div>
                    </div>
                    <div className="text-[24px] text-greyish-brown">
                        {moment(flightData.arrivalTime).locale('fa').format('HH:MM')}
                    </div>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="text-[14px] text-greyish-brown">
                            {flightData.departureCity}
                        </div>
                        <div className="text-[12px] text-secondary-gray mr-[7px]">
                            ({flightData.departureAirport.toUpperCase()})
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-[14px] text-greyish-brown">
                            {flightData.arrivalCity}
                        </div>
                        <div className="text-[12px] text-secondary-gray mr-[7px]">
                            ({flightData.arrivalAirport.toUpperCase()})
                        </div>
                    </div>
                </div>
                <div
                    className="h-[40px] w-full my-[16px_0] border-t border-b border-[#eee] flex items-center justify-between">
                    <div className="text-[12px] bg-[#eee] rounded-sm text-primary-gray p-1">
                        {flightData.isCharter ? "چارتر" : "سیستمی"}
                    </div>
                    <div className="text-[12px] text-greyish-brown">اکونومی</div>
                    <span className="px-2 pb-1">.</span>
                    <div className="text-[12px] text-greyish-brown">
                        {flightData.seatsRemaining}{" "}
                        صندلی خالی
                    </div>
                    <span className="px-2 pb-1">.</span>
                    <div className="text-[12px] text-greyish-brown">
                        شماره پرواز :{" "}
                        {flightData.flightNumber}
                    </div>
                </div>
                <div className="flex justify-between items-end mt-2">
                    <div>
                        <div className="text-[12px] text-secondary-gray">یک نفر</div>
                        <div className="flex items-center pt-1">
                            <div className="text-[20px] text-blue text-[20] ml-3">
                                {flightData.price.toLocaleString()}
                            </div>
                            <div className="text-[12px] text-secondary-gray">تومان</div>
                        </div>
                    </div>
                    <div
                        className="w-[152px] h-[40px] flex items-center justify-center font-IRANSans text-[14px] text-white bg-blue rounded-[4px] cursor-pointer"
                        onClick={() => setIsFlightDetailsVisible(true)}
                    >
                        جزئیات و انتخاب
                    </div>
                </div>
                {isFlightDetailsVisible && (
                    <div className="fixed inset-0 bg-white z-50">
                        <div
                            className="w-full h-[48px] flex justify-between items-center px-[16px] text-[16px] text-greyish-brown border-b border-[#eee]">
                            <div>جزئیات پرواز</div>
                            <IoMdClose
                                style={{color: "#bfbfbf", cursor: "pointer"}}
                                onClick={() => setIsFlightDetailsVisible(false)}
                            />
                        </div>
                        <div className="h-[calc(100%-120px)] w-full p-[16px] overflow-y-auto">
                            <div className="flex border-b border-[#eee]">
                                <div
                                    className="h-[40px] text-[14px] text-white bg-blue flex items-center justify-center rounded-tl-[4px] rounded-tr-[4px] px-[12px] ml-[8px] cursor-pointer">
                                    <PiAirplaneTakeoffLight/>
                                    <div className="pr-2">جزئیات پرواز</div>
                                </div>
                                <div
                                    className="h-[40px] text-[14px] text-secondary-gray flex items-center justify-center rounded-tl-[4px] rounded-tr-[4px] px-[12px] ml-[8px] cursor-pointer">
                                    <GrDocumentVerified/>
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
                                    {flightData.arrivalCity}
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
                                            className="h-[300px] mx-2 w-1 border-l-4 border-dotted border-[#eee]"
                                        ></div>
                                        <div
                                            className="w-[10px] h-[10px] rounded-full border border-red mt-2"
                                        ></div>
                                    </div>
                                    <div>
                                        <div
                                            className="text-[14px] flex flex-col"
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
                                                    className="ml-3 text-greyish">
                                                    {moment(flightData.departureTime).locale('fa').format('DD  MMM  YYYY')}
                                                </div>
                                                <div
                                                    className="ml-3 text-greyish">
                                                    ( {moment(flightData.departureTime).format('DD  MMM')} )
                                                </div>
                                            </div>
                                            <div
                                                className="text-[#8d8d8d]"
                                            >
                                                {flightData.arrivalAirportName}
                                            </div>
                                        </div>
                                        <div className="my-6 flex flex-col">
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
                                                    className="text-[12px] "
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
                                            <div className="ml-5">
                                                <div className="flex items-center mb-2">
                                                    <div
                                                        className="w-[72px] text-secondary-gray ml-2"
                                                    >
                                                        نوع پرواز
                                                    </div>
                                                    <div
                                                        className="text-[12px] "
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
                                                        className="w-[72px] text-secondary-gray ml-2 text-nowrap"
                                                    >
                                                        کلاس نرخی
                                                    </div>
                                                    <div
                                                        className="text-[12px]"
                                                    >
                                                        {getClassType(flightData.className)} {flightData.className}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div
                                                    className="w-[72px] text-secondary-gray"
                                                >
                                                    استرداد
                                                </div>
                                                <div
                                                    className="text-[12px]"
                                                    style={{color: "#ff1d23"}}
                                                >
                                                    غیر قابل استرداد
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="text-[14px] flex flex-col"
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
                                <div className="border border-[#eee] p-4 w-full mt-2">
                                    <div className="flex justify-between items-center mb-[8px]">
                                        <div className="flex justify-between items-center mb-[8px]">
                                            <div>2</div>
                                            <IoMdClose/>
                                            <div>بزرگسال</div>
                                        </div>
                                        <div className="flex justify-between items-center mb-[8px]">
                                            <div className="ml-2">{flightData.price.toLocaleString()}</div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mb-[8px]">
                                        <div className="flex justify-between items-center mb-[8px]">
                                            <div>2</div>
                                            <IoMdClose/>
                                            <div>کودک</div>
                                        </div>
                                        <div className="flex justify-between items-center mb-[8px]">
                                            <div className="ml-2">{flightData.price.toLocaleString()}</div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mb-[8px]">
                                        <div className="flex justify-between items-center mb-[8px]">
                                            <div>1</div>
                                            <IoMdClose/>
                                            <div>نوزاد</div>
                                        </div>
                                        <div className="flex justify-between items-center mb-[8px]">
                                            <div className="ml-2">{flightData.price.toLocaleString()}</div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mb-[8px]">
                                        <div className="font-bold">
                                            <div>مجموع:</div>
                                        </div>
                                        <div className="text-[14px] text-blue flex items-center">
                                            <div className="ml-2">{flightData.price.toLocaleString()}</div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[72px] w-full shadow-[0_-5px_8px_0_rgba(0,0,0,0.08)] p-[16px]">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-[12px] text-secondary-gray">یک نفر</div>
                                    <div className="flex items-center">
                                        <div className="text-[20px] text-blue text-[20] ml-3">
                                            {flightData.price.toLocaleString()}
                                        </div>
                                        <div className="text-[13px] text-secondary-gray">تومان</div>
                                    </div>
                                </div>
                                <div
                                    className="w-[152px] h-[40px] flex items-center justify-center font-IRANSans text-[14px] text-white bg-blue rounded-[4px] cursor-pointer"
                                    onClick={() => setIsFlightDetailsVisible(false)}
                                >
                                   انتخاب بلیط
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default MobileFlightItem;
