"use client";
import Image from "next/image";
import style from "../FlightItem.module.scss";
import moment from 'jalali-moment'
import {useState} from "react";
import {IoMdClose} from "react-icons/io";
import {PiAirplaneTakeoffLight} from "react-icons/pi";
import {GrDocumentVerified} from "react-icons/gr";
import {IoMdArrowDropdown} from "react-icons/io";


const DesktopFlightItem = ({flightData}) => {
    const [isFlightDetailsVisible, setIsFlightDetailsVisible] = useState(false);
    return (
        <div className="hidden md:flex mb-2 justify-center w-full">
            <div className=" w-full max-w-[750px] bg-white p-2">
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
                                    {new Date(flightData.departureTime).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm text-greyish-brown">
                                        {flightData.departureCity}
                                    </div>
                                    <div className="text-xs text-details-gray mr-2">
                                        (
                                        id
                                        )
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-center">{`${Math.floor(flightData.totalDuration / 60)} ساعت و ${flightData.totalDuration % 60} دقیقه`}</p>
                                <div className="flex items-center justify-center mb-2 md:mb-10">
                                    <div className="rounded-full border border-blue-600 h-3 w-3 flex items-center"/>
                                    <div className="border border-b-2 min-w-28"/>
                                    <div
                                        className="rounded-full border border-pumpkin-orange h-3 w-3 flex items-center"/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mx-6">
                                <div className="text-2xl text-greyish-brown">
                                    {new Date(flightData.arrivalTime).toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </div>
                                <div className="flex items-center">
                                    <div className="text-sm text-greyish-brown">
                                        {flightData.arrivalCity}
                                    </div>
                                    <div className="text-xs text-details-gray mr-2">
                                        (
                                        id
                                        )
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center pt-4 pr-4 pb-4 h-100"
                        style={{borderRight: "1px solid #eeeeee"}}
                    >
                        <div className="text-xs text-details-gray">یک نفر</div>
                        <div className="flex items-center pt-2">
                            <div className="ml-2 text-lg text-blue">
                                {flightData.price}
                            </div>
                            <div className="text-xs text-details-gray">تومان</div>
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
                        className="flex items-center text-xs ml-11 text-pumpkin-orange cursor-pointer"
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
                {false && (
                    <div>
                        <div className="w-full mt-7">
                            <div className="flex border-b border-gray-200 pr-4">
                                <div className="flex items-center h-10 text-sm text-gray-500 bg-white rounded-t-md px-3 cursor-pointer ml-2">
                                    <PiAirplaneTakeoffLight />
                                    <div className="pr-2">جزئیات پرواز</div>
                                </div>
                                <div className="flex items-center h-10 text-sm text-gray-500 bg-white rounded-t-md px-3 cursor-pointer">
                                    <GrDocumentVerified />
                                    <div className="pr-2">قوانین و شرایط</div>
                                </div>
                            </div>
                            <div className="px-4 pt-6 pb-4">
                                <div className="font-bold text-lg text-gray-800 mb-6">
                                    پرواز رفت{" "}
                                    {flightData.departureCity}{" "}
                                    -{" "}
                                    {flightData.arrivalCity}
                                </div>
                                <div className="flex">
                                    <div className="w-16 h-38 flex flex-col items-start justify-center text-xs text-gray-500">
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
                                    <div className="flex flex-col items-center justify-center ml-4">
                                        <div className="w-2 h-2 rounded-full border border-red-500"></div>
                                        <div className="h-[136px] my-1 w-0 border-dotted border-gray-300"></div>
                                        <div className="w-2 h-2 rounded-full border border-red-500"></div>
                                    </div>
                                    <div>
                                        <div className="text-sm flex items-center">
                                            <div className="font-bold text-gray-800 ml-2">
                                                {flightData.departureTime}
                                            </div>
                                            <div className="text-gray-800 ml-1">
                                                {flightData.departureCity}
                                            </div>
                                            <div className="text-gray-800">
                                                (id)
                                            </div>
                                        </div>
                                        <div className="text-sm flex items-center">
                                            <div className="text-gray-800 ml-2">12 اردیبهشت 1399</div>
                                            <div className="ltr text-gray-800">(07 Apr)</div>
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {flightData.departureCity}
                                        </div>
                                    </div>
                                </div>
                                <div className="my-6 flex">
                                    <div>
                                        <div className="flex mb-2">
                                            <div className="w-18 text-right text-xs text-gray-500">
                                                مدت پرواز
                                            </div>
                                            <div className="w-42 text-xs text-gray-800">
                                                {flightData.duration}
                                            </div>
                                        </div>
                                        <div className="flex mb-2">
                                            <div className="w-18 text-right text-xs text-gray-500">
                                                نوع هواپیما
                                            </div>
                                            <div className="w-42 text-xs text-gray-800">
                                                Airbus A320
                                            </div>
                                        </div>
                                        <div className="flex mb-2">
                                            <div className="w-18 text-right text-xs text-gray-500">
                                                کلاس پرواز
                                            </div>
                                            <div className="w-42 text-xs text-gray-800">
                                                اکونومی
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex mb-2">
                                            <div className="w-18 text-right text-xs text-gray-500">
                                                نوع پرواز
                                            </div>
                                            <div className="w-42 text-xs text-gray-800">
                                                سیستمی
                                            </div>
                                        </div>
                                        <div className="flex mb-2">
                                            <div className="w-18 text-right text-xs text-gray-500">
                                                بار مجاز
                                            </div>
                                            <div className="w-42 text-xs text-gray-800">
                                                bag
                                            </div>
                                        </div>
                                        <div className="flex mb-2">
                                            <div className="w-18 text-right text-xs text-gray-500">
                                                کلاس نرخی
                                            </div>
                                            <div className="w-42 text-xs text-gray-800">
                                                A
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="w-18 text-right text-xs text-gray-500">
                                            استرداد
                                        </div>
                                        <div className="w-42 text-xs text-red-600">
                                            غیر قابل استرداد
                                        </div>
                                    </div>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div className="font-bold text-gray-800 ml-2">
                                        {flightData.arrivalTime}
                                    </div>
                                    <div className="text-gray-800 ml-1">
                                        {flightData.arrivalCity}
                                    </div>
                                    <div className="text-gray-800">
                                        (
                                       id
                                        )
                                    </div>
                                </div>
                                <div className="text-sm flex items-center">
                                    <div className="text-gray-800 ml-2">12 اردیبهشت 1399</div>
                                    <div className="ltr text-gray-800">(07 Apr)</div>
                                </div>
                                <div className="text-sm text-gray-500">
                                    {flightData.arrivalCity}
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-200 m-4 h-12 flex justify-around w-[calc(100%-32px)]">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center ml-4 text-sm text-gray-800">
                                    <div>2</div>
                                    <IoMdClose />
                                    <div>بزرگسال</div>
                                </div>
                                <div className="flex items-center text-sm text-gray-800">
                                    <div className="ml-2">
                                        {flightData.price}
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center ml-4 text-sm text-gray-800">
                                    <div>2</div>
                                    <IoMdClose />
                                    <div>کودک</div>
                                </div>
                                <div className="flex items-center text-sm text-gray-800">
                                    <div className="ml-2">
                                        {flightData.price}
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center ml-4 text-sm text-gray-800">
                                    <div>1</div>
                                    <IoMdClose />
                                    <div>نوزاد</div>
                                </div>
                                <div className="flex items-center text-sm text-gray-800">
                                    <div className="ml-2">
                                        {flightData.price}
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {isFlightDetailsVisible && (
                    <div>
                        <div className="w-full mt-6">
                            <div
                                className="flex border-b-1-[#eee] pr-4"
                            >
                                <div
                                    className="h-[40px] text-details-gray flex content-center items-center rounded-tl-sm px-3 ml-2 cursor-pointer bg-blue"
                                >
                                    <PiAirplaneTakeoffLight />
                                    <div className="pr-2">جزئیات پرواز</div>
                                </div>
                                <div className="h-[40px] text-details-gray flex content-center items-center rounded-tl-sm px-3 ml-2 cursor-pointer">
                                    <GrDocumentVerified />
                                    <div className="pr-2">قوانین و شرایط</div>
                                </div>
                            </div>
                            <div
                                className="pt-6 pb-8"
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
                                        className="w-[56px] h-[336px] flex flex-col items-start content-center font-size-12 text-[#6f6f6f]"
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
                                            className="w-[8px] h-[8px] raunded-full border-1-red"
                                        ></div>
                                        <div
                                            className="h-[316px] mx-2 w-1 box-border border-dotted border-1-gray"
                                        ></div>
                                        <div
                                            className="w-[8px] h-[8px] raunded-full border-1-red"
                                        ></div>
                                    </div>
                                    <div>
                                        <div
                                            className="font-size-14"
                                        >
                                            <div className="flex ml-8">
                                                <div
                                                    className="ml-3 text-greyish"
                                                >
                                                    {flightData.departureTime}
                                                </div>
                                                <div
                                                    className="ml-2 text-greyish"
                                                >
                                                    {flightData.departureCity}
                                                </div>
                                                <div
                                                    className="text-greyish">
                                                    (
                                                    id
                                                    )
                                                </div>
                                            </div>
                                            <div className="flex ml-8">
                                                <div
                                                    className="ml-3 text-greyish" >
                                                    12 اردیبهشت 1399
                                                </div>
                                                <div
                                                    className= "ml-3 text-greyish">
                                                    (07 Apr)
                                                </div>
                                            </div>
                                            <div
                                                className="text-#8d8d8d"
                                            >
                                                {flightData.departureCity}
                                            </div>
                                        </div>
                                        <div className="my-6 flex">
                                            <div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className="w-[72px] text-detail"
                                                    >
                                                        مدت پرواز
                                                    </div>
                                                    <div
                                                        className="font-size-12 text-grayish"
                                                    >
                                                        {flightData.duration}
                                                    </div>
                                                </div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className="w-[72px] text-detail"
                                                    >
                                                        نوع هواپیما
                                                    </div>
                                                    <div
                                                        className="font-size-12 text-grayish"
                                                    >
                                                        Airbus A320
                                                    </div>
                                                </div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className="w-[72px] text-detail"
                                                    >
                                                        کلاس پرواز
                                                    </div>
                                                    <div
                                                        className="font-size-12 text-grayish"
                                                    >
                                                        اکونومی
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className="w-[72px] text-detail"
                                                    >
                                                        نوع پرواز
                                                    </div>
                                                    <div
                                                        className="font-size-12 text-grayish"
                                                    >
                                                        سیستمی
                                                    </div>
                                                </div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className="w-[72px] text-detail"
                                                    >
                                                        بار مجاز
                                                    </div>
                                                    <div
                                                        className="font-size-12 text-grayish"
                                                    >
                                                        bag
                                                    </div>
                                                </div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className="w-[72px] text-detail"
                                                    >
                                                        کلاس نرخی
                                                    </div>
                                                    <div
                                                        className="font-size-12 text-grayish"
                                                    >
                                                        A
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div
                                                    className="w-[72px] text-detail"
                                                >
                                                    استرداد
                                                </div>
                                                <div
                                                    className="font-size-12 text-grayish"
                                                    style={{ color: "#ff1d23" }}
                                                >
                                                    غیر قابل استرداد
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="font-size-14"
                                        >
                                            <div className="flex ml-8">
                                                <div
                                                    className="text-grayish ml-3"
                                                >
                                                    {flightData.arrivalTime}
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
                                                    (
                                                    id
                                                    )
                                                </div>
                                            </div>
                                            <div className="flex ml-8">
                                                <div
                                                    className={
                                                        "ml-3 text-greyish"
                                                    }
                                                >
                                                    12 اردیبهشت 1399
                                                </div>
                                                <div className="ltr ml-3 text-greyish">
                                                    (07 Apr)
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
                        <div className="border-gray-500 flex justify-between items-center px-3 py-2] w-full">
                            <div className="flex justify-between items-center mb-3">
                                <div
                                    className="font-size-14 text-greyish flex items-center"
                                >
                                    <div>2</div>
                                    <IoMdClose />
                                    <div>بزرگسال</div>
                                </div>
                                <div
                                    className="font-size-14 text-greyish flex items-center"
                                >
                                    <div className="ml-2">
                                        {flightData.price}
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <div
                                    className="font-size-14 text-greyish flex items-center"
                                >
                                    <div>2</div>
                                    <IoMdClose />
                                    <div>کودک</div>
                                </div>
                                <div
                                    className="font-size-14 text-greyish flex items-center"
                                >
                                    <div className="ml-2">
                                        {flightData.price}
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <div
                                    className="font-size-14 text-greyish flex items-center"
                                >
                                    <div>1</div>
                                    <IoMdClose />
                                    <div>نوزاد</div>
                                </div>
                                <div
                                    className="font-size-14 text-greyish flex items-center"
                                >
                                    <div className="ml-2">
                                        {flightData.price}
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <div
                                    className="font-size-14 text-greyish"
                                >
                                    <div>مجموع:</div>
                                </div>
                                <div
                                    className="font-size-14 text-greyish flex items-center"
                                >
                                    <div className="ml-2">
                                        {flightData.price}
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
