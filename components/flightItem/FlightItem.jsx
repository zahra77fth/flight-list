"use client";
import Image from "next/image";
import style from "./ListItem.module.scss";
import variables from "../app/styles/variables.module.scss";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { GrDocumentVerified } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { iataConvertor } from "../app/utils/globalFunctions";
// import { airlineIataConvertor } from "@/app/utils/globalFunctions";
// import { getTime } from "../app/utils/globalFunctions";
// import { readableNumber } from "../app/utils/globalFunctions";
// import { getPersianTime } from "../app/utils/globalFunctions";


const ListItem = ({ flightData }) => {
    const [isFlightDetailsVisible, setIsFlightDetailsVisible] = useState(false);
    return (
        <div className="">
            <div className={style.mobileDesign__container}>
                <div className={style.mobileDesign__airline}>
                    <Image
                        src="/images/IranAir.png"
                        alt="airlineLogo"
                        height={40}
                        width={40}
                    />
                    <h2 className={style.mobileDesign__AirlineName}>
                        name{/*{airlineIataConvertor(flightData.validatingAirlineCode).nameFa}*/}
                    </h2>
                </div>
                <div className={style.mobileDesign__timeContainer}>
                    <div className={style.mobileDesign__time}>
                        {/*{getTime(*/}
                        {/*    flightData.originDestinationOptions[0].flightSegments[0]*/}
                        {/*        .departureDateTime*/}
                        {/*)}*/}time
                    </div>
                    <div className={style.mobileDesign__durationContainer}>
                        <div className={style.mobileDesign__duration}>
                            {/*{getPersianTime(*/}
                            {/*    flightData.originDestinationOptions[0].flightSegments[0]*/}
                            {/*        .journeyDuration*/}
                            {/*)}*/}
                            per time
                        </div>
                        <div className={style.mobileDesign__durationUnderline}>
                            <div
                                className={style.mobileDesign__durationCircle}
                                style={{ borderColor: variables.blue }}
                            ></div>
                            <div className={style.mobileDesign__durationLine}></div>
                            <div
                                className={style.mobileDesign__durationCircle}
                                style={{ borderColor: variables.pumpkinOrange }}
                            ></div>
                        </div>
                    </div>
                    <div className={style.mobileDesign__time}>
                        {/*{getTime(*/}
                        {/*    flightData.originDestinationOptions[0].flightSegments[0]*/}
                        {/*        .arrivalDateTime*/}
                        {/*)}*/}
                        time
                    </div>
                </div>
                <div className={style.mobileDesign__citiesContainer}>
                    <div className={style.mobileDesign__cityContainer}>
                        <div className={style.mobileDesign__cityName}>
                            {/*{*/}
                            {/*    iataConvertor(*/}
                            {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                            {/*            .departureAirportLocationCode*/}
                            {/*    ).cityFa*/}
                            {/*}*/}
                        </div>
                        <div className={style.mobileDesign__cityCode}>
                            (
                            {/*{*/}
                            {/*    iataConvertor(*/}
                            {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                            {/*            .departureAirportLocationCode*/}
                            {/*    ).cityId*/}
                            {/*}*/}
                            )
                        </div>
                    </div>
                    <div className={style.mobileDesign__cityContainer}>
                        <div className={style.mobileDesign__cityName}>
                            {/*{*/}
                            {/*    iataConvertor(*/}
                            {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                            {/*            .arrivalAirportLocationCode*/}
                            {/*    ).cityFa*/}
                            {/*}*/}
                        </div>
                        <div className={style.mobileDesign__cityCode}>
                            (
                            {/*{*/}
                            {/*    iataConvertor(*/}
                            {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                            {/*            .arrivalAirportLocationCode*/}
                            {/*    ).cityId*/}
                            {/*}*/}
                            )
                        </div>
                    </div>
                </div>
                <div className={style.mobileDesign__flightSummery}>
                    <div
                        className={`${style.mobileDesign__flightSummeryItem} ${style.desktopDesign__flightCharter}`}
                    >
                        {flightData.isCharter ? "چارتر" : "سیستمی"}
                    </div>
                    <div className="flex items-center">
                        <div className={style.mobileDesign__flightSummeryItem}>اکونومی</div>
                        <span className="px-2 pb-1">.</span>
                        <div className={style.mobileDesign__flightSummeryItem}>
                            {
                                flightData.seatsRemaining
                            }{" "}
                            صندلی خالی
                        </div>
                        <span className="px-2 pb-1">.</span>
                        <div className={style.mobileDesign__flightSummeryItem}>
                            شماره پرواز :{" "}
                            {
                                flightData.flightNumber
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <div className={style.mobileDesign__priceText}>یک نفر</div>
                        <div className="flex items-center pt-1">
                            <div className={style.mobileDesign__price}>
                                {/*{readableNumber(*/}
                                {/*    flightData.airItineraryPricingInfo.itinTotalFare.totalFare*/}
                                {/*)}*/}
                                num
                            </div>
                            <div className={style.mobileDesign__priceText}>تومان</div>
                        </div>
                    </div>
                    <div
                        className={style.mobileDesign__selectAndDetails}
                        onClick={() => setIsFlightDetailsVisible(true)}
                    >
                        جزئیات و انتخاب
                    </div>
                </div>
                {isFlightDetailsVisible && (
                    <div className={style.mobileDesign__flightDetailModal}>
                        <div className={style.mobileDesign__flightDetailModalHeader}>
                            <div>جزئیات پرواز</div>
                            <IoMdClose
                                style={{ color: "#bfbfbf", cursor: "pointer" }}
                                onClick={() => setIsFlightDetailsVisible(false)}
                            />
                        </div>
                        <div className={style.mobileDesign__flightDetailModalMain}>
                            <div
                                className={
                                    style.mobileDesign__flightDetailModalMainTagContainer
                                }
                            >
                                <div
                                    className={`${style.mobileDesign__flightDetailModalMainTag} ${style.activeTag}`}
                                >
                                    <PiAirplaneTakeoffLight />
                                    <div className="pr-2">جزئیات پرواز</div>
                                </div>
                                <div className={style.mobileDesign__flightDetailModalMainTag}>
                                    <GrDocumentVerified />
                                    <div className="pr-2">قوانین و شرایط</div>
                                </div>
                            </div>
                            <div className={style.mobileDesign__flightDetailModalInformation}>
                                <div
                                    className={
                                        style.mobileDesign__flightDetailModalInformationTitle
                                    }
                                >
                                    پرواز رفت{" "}
                                    {/*{*/}
                                    {/*    iataConvertor(*/}
                                    {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                                    {/*            .departureAirportLocationCode*/}
                                    {/*    ).cityFa*/}
                                    {/*}{" "}*/}
                                    -{" "}
                                    {/*{*/}
                                    {/*    iataConvertor(*/}
                                    {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                                    {/*            .arrivalAirportLocationCode*/}
                                    {/*    ).cityFa*/}
                                    {/*}*/}
                                </div>
                                <div className="flex mb-6">
                                    <div
                                        className={
                                            style.mobileDesign__flightDetailModalInformationAirline
                                        }
                                    >
                                        <Image
                                            src="/images/logo.png"
                                            alt="airline Logo"
                                            height={40}
                                            width={40}
                                        />
                                        <p className="py-2">
                                            {/*{*/}
                                            {/*    airlineIataConvertor(flightData.validatingAirlineCode)*/}
                                            {/*        .nameFa*/}
                                            {/*}*/}
                                            name
                                        </p>
                                    </div>
                                    <div
                                        className={
                                            style.mobileDesign__flightDetailModalInformationPath
                                        }
                                    >
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalInformationCircle
                                            }
                                        ></div>
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalInformationDote
                                            }
                                        ></div>
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalInformationCircle
                                            }
                                        ></div>
                                    </div>
                                    <div>
                                        <div
                                            className={style.mobileDesign__flightDetailModalBoarding}
                                        >
                                            <div className="flex mb-2">
                                                <div
                                                    className={
                                                        style.mobileDesign__flightDetailModalBoardingTime
                                                    }
                                                >
                                                    {/*{getTime(*/}
                                                    {/*    flightData.originDestinationOptions[0]*/}
                                                    {/*        .flightSegments[0].departureDateTime*/}
                                                    {/*)}*/}
                                                    time
                                                </div>
                                                <div
                                                    className={
                                                        style.mobileDesign__flightDetailModalBoardingCity
                                                    }
                                                >
                                                    (
                                                    {/*{*/}
                                                    {/*    iataConvertor(*/}
                                                    {/*        flightData.originDestinationOptions[0]*/}
                                                    {/*            .flightSegments[0].departureAirportLocationCode*/}
                                                    {/*    ).cityFa*/}
                                                    {/*}*/}
                                                    )
                                                </div>
                                                <div
                                                    className={
                                                        style.mobileDesign__flightDetailModalBoardingCityCode
                                                    }
                                                >
                                                    (
                                                    {/*{*/}
                                                    {/*    iataConvertor(*/}
                                                    {/*        flightData.originDestinationOptions[0]*/}
                                                    {/*            .flightSegments[0].departureAirportLocationCode*/}
                                                    {/*    ).cityId*/}
                                                    {/*}*/}
                                                    )
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div
                                                    className={
                                                        style.mobileDesign__flightDetailModalBoardingDate
                                                    }
                                                >
                                                    12 اردیبهشت 1399
                                                </div>
                                                <div
                                                    className={
                                                        style.mobileDesign__flightDetailModalBoardingDateEn
                                                    }
                                                >
                                                    (07 Apr)
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    style.mobileDesign__flightDetailModalBoardingAirport
                                                }
                                            >
                                                {/*{*/}
                                                {/*    iataConvertor(*/}
                                                {/*        flightData.originDestinationOptions[0]*/}
                                                {/*            .flightSegments[0].departureAirportLocationCode*/}
                                                {/*    ).name*/}
                                                {/*}*/}
                                            </div>
                                        </div>
                                        <div className="my-8">
                                            <div className="flex mb-2">
                                                <div className={style.mobileDesign__flightDetailsTitle}>
                                                    مدت پرواز
                                                </div>
                                                <div className={style.mobileDesign__flightDetailsValue}>
                                                    {/*{getPersianTime(*/}
                                                    {/*    flightData.originDestinationOptions[0]*/}
                                                    {/*        .flightSegments[0].journeyDuration*/}
                                                    {/*)}*/}
                                                    per time
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div className={style.mobileDesign__flightDetailsTitle}>
                                                    نوع هواپیما
                                                </div>
                                                <div className={style.mobileDesign__flightDetailsValue}>
                                                    Airbus A320
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div className={style.mobileDesign__flightDetailsTitle}>
                                                    کلاس پرواز
                                                </div>
                                                <div className={style.mobileDesign__flightDetailsValue}>
                                                    اکونومی
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div className={style.mobileDesign__flightDetailsTitle}>
                                                    نوع پرواز
                                                </div>
                                                <div className={style.mobileDesign__flightDetailsValue}>
                                                    سیستمی
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div className={style.mobileDesign__flightDetailsTitle}>
                                                    بار مجاز
                                                </div>
                                                <div className={style.mobileDesign__flightDetailsValue}>
                                                    {/*{*/}
                                                    {/*    flightData.baggage*/}
                                                    {/*}*/}
                                                    bag
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div className={style.mobileDesign__flightDetailsTitle}>
                                                    کلاس نرخی
                                                </div>
                                                <div className={style.mobileDesign__flightDetailsValue}>
                                                    A
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className={style.mobileDesign__flightDetailsTitle}>
                                                    استرداد
                                                </div>
                                                <div
                                                    className={style.mobileDesign__flightDetailsValue}
                                                    style={{ color: "#ff1d23" }}
                                                >
                                                    غیر قابل استرداد
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={style.mobileDesign__flightDetailModalBoarding}
                                        >
                                            <div className="flex mb-2">
                                                <div
                                                    className={
                                                        style.mobileDesign__flightDetailModalBoardingTime
                                                    }
                                                >
                                                    {/*{getTime(*/}
                                                    {/*    flightData.originDestinationOptions[0]*/}
                                                    {/*        .flightSegments[0].arrivalDateTime*/}
                                                    {/*)}*/}
                                                    time
                                                </div>
                                                <div
                                                    className={
                                                        style.mobileDesign__flightDetailModalBoardingCity
                                                    }
                                                >
                                                    (
                                                    {/*{*/}
                                                    {/*    iataConvertor(*/}
                                                    {/*        flightData.originDestinationOptions[0]*/}
                                                    {/*            .flightSegments[0].arrivalAirportLocationCode*/}
                                                    {/*    ).cityFa*/}
                                                    {/*}*/}
                                                    )
                                                </div>
                                                <div
                                                    className={
                                                        style.mobileDesign__flightDetailModalBoardingCityCode
                                                    }
                                                >
                                                    (
                                                    {/*{*/}
                                                    {/*    iataConvertor(*/}
                                                    {/*        flightData.originDestinationOptions[0]*/}
                                                    {/*            .flightSegments[0].arrivalAirportLocationCode*/}
                                                    {/*    ).cityId*/}
                                                    {/*}*/}
                                                    )
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div
                                                    className={
                                                        style.mobileDesign__flightDetailModalBoardingDate
                                                    }
                                                >
                                                    12 اردیبهشت 1399
                                                </div>
                                                <div
                                                    className={
                                                        style.mobileDesign__flightDetailModalBoardingDateEn
                                                    }
                                                >
                                                    (07 Apr)
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    style.mobileDesign__flightDetailModalBoardingAirport
                                                }
                                            >
                                                {/*{*/}
                                                {/*    iataConvertor(*/}
                                                {/*        flightData.originDestinationOptions[0]*/}
                                                {/*            .flightSegments[0].arrivalAirportLocationCode*/}
                                                {/*    ).name*/}
                                                {/*}*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={style.mobileDesign__flightDetailModalPassengers}
                                >
                                    <div
                                        className={style.mobileDesign__flightDetailModalPassenger}
                                    >
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalPassengerTitle
                                            }
                                        >
                                            <div>2</div>
                                            <IoMdClose />
                                            <div>بزرگسال</div>
                                        </div>
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalPassengerValue
                                            }
                                        >
                                            <div className="ml-2">
                                                {" "}
                                                {/*{readableNumber(*/}
                                                {/*    flightData.airItineraryPricingInfo.itinTotalFare*/}
                                                {/*        .totalFare*/}
                                                {/*)}*/}
                                                num
                                            </div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                    <div
                                        className={style.mobileDesign__flightDetailModalPassenger}
                                    >
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalPassengerTitle
                                            }
                                        >
                                            <div>2</div>
                                            <IoMdClose />
                                            <div>کودک</div>
                                        </div>
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalPassengerValue
                                            }
                                        >
                                            <div className="ml-2">
                                                num
                                            </div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                    <div
                                        className={style.mobileDesign__flightDetailModalPassenger}
                                    >
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalPassengerTitle
                                            }
                                        >
                                            <div>1</div>
                                            <IoMdClose />
                                            <div>نوزاد</div>
                                        </div>
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalPassengerValue
                                            }
                                        >
                                            <div className="ml-2">
                                                num
                                            </div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                    <div
                                        className={style.mobileDesign__flightDetailModalPassenger}
                                    >
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalPassengerSumTitle
                                            }
                                        >
                                            <div>مجموع:</div>
                                        </div>
                                        <div
                                            className={
                                                style.mobileDesign__flightDetailModalPassengerSumValue
                                            }
                                        >
                                            <div className="ml-2">
                                                num
                                            </div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.mobileDesign__flightDetailModalFooter}>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className={style.mobileDesign__priceText}>یک نفر</div>
                                    <div className="flex items-center">
                                        <div className={style.mobileDesign__price}>
                                            num
                                        </div>
                                        <div className={style.mobileDesign__priceText}>تومان</div>
                                    </div>
                                </div>
                                <div
                                    className={style.mobileDesign__selectAndDetails}
                                    onClick={() => setIsFlightDetailsVisible(false)}
                                >
                                    جزئیات و انتخاب
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className={style.desktopDesign__container}>
                <div
                    className="flex justify-between items-center px-4"
                    style={{ height: "142px" }}
                >
                    <div className={style.desktopDesign__airline}>
                        <Image
                            src="/images/IranAir.png"
                            alt="airlineLogo"
                            height={56}
                            width={56}
                        />
                        <h2 className={style.desktopDesign__AirlineName}>
                            {/*{airlineIataConvertor(flightData.validatingAirlineCode).nameFa}*/}
                            name
                        </h2>
                    </div>
                    <div>
                        <div className={style.desktopDesign__timeContainer}>
                            <div className="flex flex-col items-center">
                                <div className={style.desktopDesign__time}>
                                    {/*{getTime(*/}
                                    {/*    flightData.originDestinationOptions[0].flightSegments[0]*/}
                                    {/*        .departureDateTime*/}
                                    {/*)}*/}
                                    time
                                </div>
                                <div className={style.desktopDesign__cityContainer}>
                                    <div className={style.desktopDesign__cityName}>
                                        {/*{*/}
                                        {/*    iataConvertor(*/}
                                        {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                                        {/*            .departureAirportLocationCode*/}
                                        {/*    ).cityFa*/}
                                        {/*}*/}
                                    </div>
                                    <div className={style.desktopDesign__cityCode}>
                                        (
                                        {/*{*/}
                                        {/*    iataConvertor(*/}
                                        {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                                        {/*            .departureAirportLocationCode*/}
                                        {/*    ).cityId*/}
                                        {/*}*/}
                                        )
                                    </div>
                                </div>
                            </div>
                            <div className={style.desktopDesign__durationContainer}>
                                <div className={style.desktopDesign__duration}>
                                    {/*{getPersianTime(*/}
                                    {/*    flightData.originDestinationOptions[0].flightSegments[0]*/}
                                    {/*        .journeyDuration*/}
                                    {/*)}*/}
                                    per time
                                </div>
                                <div className={style.desktopDesign__durationUnderline}>
                                    <div
                                        className={style.desktopDesign__durationCircle}
                                        style={{ borderColor: variables.blue }}
                                    ></div>
                                    <div className={style.desktopDesign__durationLine}></div>
                                    <div
                                        className={style.desktopDesign__durationCircle}
                                        style={{ borderColor: variables.pumpkinOrange }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className={style.desktopDesign__time}>
                                    {/*{getTime(*/}
                                    {/*    flightData.originDestinationOptions[0].flightSegments[0]*/}
                                    {/*        .arrivalDateTime*/}
                                    {/*)}*/}
                                    time
                                </div>
                                <div className={style.desktopDesign__cityContainer}>
                                    <div className={style.desktopDesign__cityName}>
                                        {/*{*/}
                                        {/*    iataConvertor(*/}
                                        {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                                        {/*            .arrivalAirportLocationCode*/}
                                        {/*    ).cityFa*/}
                                        {/*}*/}
                                    </div>
                                    <div className={style.desktopDesign__cityCode}>
                                        (
                                        {/*{*/}
                                        {/*    iataConvertor(*/}
                                        {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                                        {/*            .arrivalAirportLocationCode*/}
                                        {/*    ).cityId*/}
                                        {/*}*/}
                                        )
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center pt-4 pr-4 pb-4 h-100"
                        style={{ borderRight: "1px solid #eeeeee" }}
                    >
                        <div className={style.desktopDesign__priceText}>یک نفر</div>
                        <div className="flex items-center pt-2">
                            <div className={style.desktopDesign__price}>
                                num
                            </div>
                            <div className={style.desktopDesign__priceText}>تومان</div>
                        </div>
                        <div className={style.desktopDesign__selectFlight}>انتخاب بلیط</div>
                    </div>
                </div>
                <div
                    className="flex justify-between items-center px-4"
                    style={{ borderTop: "1px solid #eeeeee" }}
                >
                    <div className={style.desktopDesign__flightSummery}>
                        <div
                            className={`${style.desktopDesign__flightSummeryItem} ${style.desktopDesign__flightCharter}`}
                        >
                            {flightData.isCharter ? "چارتر" : "سیستمی"}
                        </div>
                        <div className="flex items-center">
                            <div className={style.desktopDesign__flightSummeryItem}>
                                اکونومی
                            </div>
                            <span className="px-2 pb-1">.</span>
                            <div className={style.desktopDesign__flightSummeryItem}>
                                {
                                    flightData.seatsRemaining
                                }{" "}
                                صندلی خالی
                            </div>
                            <span className="px-2 pb-1">.</span>
                            <div className={style.desktopDesign__flightSummeryItem}>
                                شماره پرواز :{" "}
                                {
                                    flightData.flightNumber
                                }
                            </div>
                            <span className="px-2 pb-1">.</span>
                            <div className={style.desktopDesign__flightSummeryItem}>
                                تامین‌کننده: پرایس لاین
                            </div>
                        </div>
                    </div>
                    <div
                        className={style.desktopDesign__moreDetails}
                        onClick={() => setIsFlightDetailsVisible(!isFlightDetailsVisible)}
                    >
                        <div className="ml-1">جزئیات بیشتر</div>
                        <IoMdArrowDropdown
                            style={
                                isFlightDetailsVisible ? { transform: "rotate(180deg)" } : null
                            }
                        />
                    </div>
                </div>
                {isFlightDetailsVisible && (
                    <div>
                        <div className={style.desktopDesign__flightDetailModalMain}>
                            <div
                                className={
                                    style.desktopDesign__flightDetailModalMainTagContainer
                                }
                            >
                                <div
                                    className={`${style.desktopDesign__flightDetailModalMainTag} ${style.activeTag}`}
                                >
                                    <PiAirplaneTakeoffLight />
                                    <div className="pr-2">جزئیات پرواز</div>
                                </div>
                                <div className={style.desktopDesign__flightDetailModalMainTag}>
                                    <GrDocumentVerified />
                                    <div className="pr-2">قوانین و شرایط</div>
                                </div>
                            </div>
                            <div
                                className={style.desktopDesign__flightDetailModalInformation}
                            >
                                <div
                                    className={
                                        style.desktopDesign__flightDetailModalInformationTitle
                                    }
                                >
                                    پرواز رفت{" "}
                                    {/*{*/}
                                    {/*    iataConvertor(*/}
                                    {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                                    {/*            .departureAirportLocationCode*/}
                                    {/*    ).cityFa*/}
                                    {/*}{" "}*/}
                                    -{" "}
                                    {/*{*/}
                                    {/*    iataConvertor(*/}
                                    {/*        flightData.originDestinationOptions[0].flightSegments[0]*/}
                                    {/*            .arrivalAirportLocationCode*/}
                                    {/*    ).cityFa*/}
                                    {/*}*/}
                                </div>
                                <div className="flex">
                                    <div
                                        className={
                                            style.desktopDesign__flightDetailModalInformationAirline
                                        }
                                    >
                                        <Image
                                            src="/images/IranAir.png"
                                            alt="airline Logo"
                                            height={40}
                                            width={40}
                                        />
                                        <p className="py-2">
                                            {/*{*/}
                                            {/*    airlineIataConvertor(flightData.validatingAirlineCode)*/}
                                            {/*        .nameFa*/}
                                            {/*}*/}
                                            name
                                        </p>
                                    </div>
                                    <div
                                        className={
                                            style.desktopDesign__flightDetailModalInformationPath
                                        }
                                    >
                                        <div
                                            className={
                                                style.desktopDesign__flightDetailModalInformationCircle
                                            }
                                        ></div>
                                        <div
                                            className={
                                                style.desktopDesign__flightDetailModalInformationDote
                                            }
                                        ></div>
                                        <div
                                            className={
                                                style.desktopDesign__flightDetailModalInformationCircle
                                            }
                                        ></div>
                                    </div>
                                    <div>
                                        <div
                                            className={style.desktopDesign__flightDetailModalBoarding}
                                        >
                                            <div className="flex ml-8">
                                                <div
                                                    className={
                                                        style.desktopDesign__flightDetailModalBoardingTime
                                                    }
                                                >
                                                    {/*{getTime(*/}
                                                    {/*    flightData.originDestinationOptions[0]*/}
                                                    {/*        .flightSegments[0].departureDateTime*/}
                                                    {/*)}*/}
                                                    time
                                                </div>
                                                <div
                                                    className={
                                                        style.desktopDesign__flightDetailModalBoardingCity
                                                    }
                                                >
                                                    {/*{*/}
                                                    {/*    iataConvertor(*/}
                                                    {/*        flightData.originDestinationOptions[0]*/}
                                                    {/*            .flightSegments[0].departureAirportLocationCode*/}
                                                    {/*    ).cityFa*/}
                                                    {/*}*/}
                                                </div>
                                                <div
                                                    className={
                                                        style.desktopDesign__flightDetailModalBoardingCityCode
                                                    }
                                                >
                                                    (
                                                    {/*{*/}
                                                    {/*    iataConvertor(*/}
                                                    {/*        flightData.originDestinationOptions[0]*/}
                                                    {/*            .flightSegments[0].departureAirportLocationCode*/}
                                                    {/*    ).cityId*/}
                                                    {/*}*/}
                                                    )
                                                </div>
                                            </div>
                                            <div className="flex ml-8">
                                                <div
                                                    className={
                                                        style.desktopDesign__flightDetailModalBoardingDate
                                                    }
                                                >
                                                    12 اردیبهشت 1399
                                                </div>
                                                <div
                                                    className={
                                                        style.desktopDesign__flightDetailModalBoardingDateEn
                                                    }
                                                >
                                                    (07 Apr)
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    style.desktopDesign__flightDetailModalBoardingAirport
                                                }
                                            >
                                                {/*{*/}
                                                {/*    iataConvertor(*/}
                                                {/*        flightData.originDestinationOptions[0]*/}
                                                {/*            .flightSegments[0].departureAirportLocationCode*/}
                                                {/*    ).name*/}
                                                {/*}*/}
                                            </div>
                                        </div>
                                        <div className="my-6 flex">
                                            <div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className={style.desktopDesign__flightDetailsTitle}
                                                    >
                                                        مدت پرواز
                                                    </div>
                                                    <div
                                                        className={style.desktopDesign__flightDetailsValue}
                                                    >
                                                        {/*{getPersianTime(*/}
                                                        {/*    flightData.originDestinationOptions[0]*/}
                                                        {/*        .flightSegments[0].journeyDuration*/}
                                                        {/*)}*/}
                                                        per time
                                                    </div>
                                                </div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className={style.desktopDesign__flightDetailsTitle}
                                                    >
                                                        نوع هواپیما
                                                    </div>
                                                    <div
                                                        className={style.desktopDesign__flightDetailsValue}
                                                    >
                                                        Airbus A320
                                                    </div>
                                                </div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className={style.desktopDesign__flightDetailsTitle}
                                                    >
                                                        کلاس پرواز
                                                    </div>
                                                    <div
                                                        className={style.desktopDesign__flightDetailsValue}
                                                    >
                                                        اکونومی
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className={style.desktopDesign__flightDetailsTitle}
                                                    >
                                                        نوع پرواز
                                                    </div>
                                                    <div
                                                        className={style.desktopDesign__flightDetailsValue}
                                                    >
                                                        سیستمی
                                                    </div>
                                                </div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className={style.desktopDesign__flightDetailsTitle}
                                                    >
                                                        بار مجاز
                                                    </div>
                                                    <div
                                                        className={style.desktopDesign__flightDetailsValue}
                                                    >
                                                        {/*{*/}
                                                        {/*    flightData.originDestinationOptions[0]*/}
                                                        {/*        .flightSegments[0].baggage*/}
                                                        {/*}*/}
                                                    </div>
                                                </div>
                                                <div className="flex mb-2">
                                                    <div
                                                        className={style.desktopDesign__flightDetailsTitle}
                                                    >
                                                        کلاس نرخی
                                                    </div>
                                                    <div
                                                        className={style.desktopDesign__flightDetailsValue}
                                                    >
                                                        A
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div
                                                    className={style.desktopDesign__flightDetailsTitle}
                                                >
                                                    استرداد
                                                </div>
                                                <div
                                                    className={style.desktopDesign__flightDetailsValue}
                                                    style={{ color: "#ff1d23" }}
                                                >
                                                    غیر قابل استرداد
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={style.desktopDesign__flightDetailModalBoarding}
                                        >
                                            <div className="flex ml-8">
                                                <div
                                                    className={
                                                        style.desktopDesign__flightDetailModalBoardingTime
                                                    }
                                                >
                                                    {/*{getTime(*/}
                                                    {/*    flightData.originDestinationOptions[0]*/}
                                                    {/*        .flightSegments[0].arrivalDateTime*/}
                                                    {/*)}*/}
                                                    time
                                                </div>
                                                <div
                                                    className={
                                                        style.desktopDesign__flightDetailModalBoardingCity
                                                    }
                                                >
                                                    {/*{*/}
                                                    {/*    iataConvertor(*/}
                                                    {/*        flightData.originDestinationOptions[0]*/}
                                                    {/*            .flightSegments[0].arrivalAirportLocationCode*/}
                                                    {/*    ).cityFa*/}
                                                    {/*}*/}
                                                </div>
                                                <div
                                                    className={
                                                        style.desktopDesign__flightDetailModalBoardingCityCode
                                                    }
                                                >
                                                    (
                                                    {/*{*/}
                                                    {/*    iataConvertor(*/}
                                                    {/*        flightData.originDestinationOptions[0]*/}
                                                    {/*            .flightSegments[0].arrivalAirportLocationCode*/}
                                                    {/*    ).cityId*/}
                                                    {/*}*/}
                                                    )
                                                </div>
                                            </div>
                                            <div className="flex ml-8">
                                                <div
                                                    className={
                                                        style.desktopDesign__flightDetailModalBoardingDate
                                                    }
                                                >
                                                    12 اردیبهشت 1399
                                                </div>
                                                <div
                                                    className={
                                                        style.desktopDesign__flightDetailModalBoardingDateEn
                                                    }
                                                >
                                                    (07 Apr)
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    style.desktopDesign__flightDetailModalBoardingAirport
                                                }
                                            >
                                                {/*{*/}
                                                {/*    iataConvertor(*/}
                                                {/*        flightData.originDestinationOptions[0]*/}
                                                {/*            .flightSegments[0].arrivalAirportLocationCode*/}
                                                {/*    ).name*/}
                                                {/*}*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.desktopDesign__flightDetailModalPassengers}>
                            <div className={style.desktopDesign__flightDetailModalPassenger}>
                                <div
                                    className={
                                        style.desktopDesign__flightDetailModalPassengerTitle
                                    }
                                >
                                    <div>2</div>
                                    <IoMdClose />
                                    <div>بزرگسال</div>
                                </div>
                                <div
                                    className={
                                        style.desktopDesign__flightDetailModalPassengerValue
                                    }
                                >
                                    <div className="ml-2">
                                        num
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className={style.desktopDesign__flightDetailModalPassenger}>
                                <div
                                    className={
                                        style.desktopDesign__flightDetailModalPassengerTitle
                                    }
                                >
                                    <div>2</div>
                                    <IoMdClose />
                                    <div>کودک</div>
                                </div>
                                <div
                                    className={
                                        style.desktopDesign__flightDetailModalPassengerValue
                                    }
                                >
                                    <div className="ml-2">
                                        num
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className={style.desktopDesign__flightDetailModalPassenger}>
                                <div
                                    className={
                                        style.desktopDesign__flightDetailModalPassengerTitle
                                    }
                                >
                                    <div>1</div>
                                    <IoMdClose />
                                    <div>نوزاد</div>
                                </div>
                                <div
                                    className={
                                        style.desktopDesign__flightDetailModalPassengerValue
                                    }
                                >
                                    <div className="ml-2">
                                        num
                                    </div>
                                    <div>تومان</div>
                                </div>
                            </div>
                            <div className={style.desktopDesign__flightDetailModalPassenger}>
                                <div
                                    className={
                                        style.desktopDesign__flightDetailModalPassengerSumTitle
                                    }
                                >
                                    <div>مجموع:</div>
                                </div>
                                <div
                                    className={
                                        style.desktopDesign__flightDetailModalPassengerSumValue
                                    }
                                >
                                    <div className="ml-2">
                                        num
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

export default ListItem;
