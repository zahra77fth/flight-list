"use client";
import Image from "next/image";
import { useState } from "react";
import moment from 'jalali-moment'
import { IoMdClose } from "react-icons/io";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { GrDocumentVerified } from "react-icons/gr";


const MobileFlightItem = ({ flightData }) => {
    const [isFlightDetailsVisible, setIsFlightDetailsVisible] = useState(false);
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
                        fer
                    </h2>
                </div>
                <div className="w-full flex justify-between">
                    <div className="text-[24px] text-greyish-brown">
                       few
                    </div>
                    <div className="flex flex-col items-center self-baseline">
                        <div className="text-[12px] text-[#6f6f6f] mb-[3px] px-[6px]">
                            few
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-center">{`${Math.floor(flightData.totalDuration / 60)} ساعت و ${flightData.totalDuration % 60} دقیقه`}</p>
                            <div className="flex items-center justify-center mb-2 md:mb-10">
                                <div className="rounded-full border border-blue-600 h-3 w-3 flex items-center"/>
                                <div className="border border-b-2 min-w-20"/>
                                <div
                                    className="rounded-full border border-orange h-3 w-3 flex items-center"/>
                            </div>
                        </div>
                    </div>
                    <div className="text-[24px] text-greyish-brown">
                        efw
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex items-center">
                        <div className="text-[14px] text-greyish-brown">
                            few
                        </div>
                        <div className="text-[12px] text-secondary-gray mr-[7px]">
                            wef
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-[14px] text-greyish-brown">
                            wef
                        </div>
                        <div className="text-[12px] text-secondary-gray mr-[7px]">
                           wef
                        </div>
                    </div>
                </div>
                <div className="h-[40px] w-full my-[16px_0] border-t border-b border-[#eee] flex justify-between">
                    <div
                        className="text-[12px] text-greyish-brown"
                    >
                        {flightData.isCharter ? "چارتر" : "سیستمی"}
                    </div>
                    <div className="flex items-center">
                        <div className="text-[12px] text-greyish-brown">اکونومی</div>
                        <span className="px-2 pb-1">.</span>
                        <div className="text-[12px] text-greyish-brown">
                            {
                                flightData.seatsRemaining
                            }{" "}
                            صندلی خالی
                        </div>
                        <span className="px-2 pb-1">.</span>
                        <div className="text-[12px] text-greyish-brown">
                            شماره پرواز :{" "}
                            {
                                flightData.flightNumber
                            }
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-[12px] text-secondary-gray">یک نفر</div>
                        <div className="flex items-center pt-1">
                            <div className="text-[12px] text-blue text-[20] ml-3">
                               few
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
                    <div className="w-full h-full fixed top-0 left-0 bg-white">
                        <div className="w-full h-[48px] flex justify-between px-[16px] text-[16px] text-greyish-brown border-b border-[#eee]">
                            <div>جزئیات پرواز</div>
                            <IoMdClose
                                style={{color: "#bfbfbf", cursor: "pointer"}}
                                onClick={() => setIsFlightDetailsVisible(false)}
                            />
                        </div>
                        <div className="h-[calc(100%-120px)] w-full p-[16px] overflow-y-auto">
                            <div
                                className="flex border-b border-[#eee]">
                                <div
                                    className="h-[40px] text-[14px] text-secondary-gray flex items-center justify-center rounded-tl-[4px] rounded-tr-[4px] px-[12px] ml-[8px] cursor-pointer"
                                >
                                    <PiAirplaneTakeoffLight/>
                                    <div className="pr-2">جزئیات پرواز</div>
                                </div>
                                <div className="h-[40px] text-[14px] text-secondary-gray flex items-center justify-center rounded-tl-[4px] rounded-tr-[4px] px-[12px] ml-[8px] cursor-pointer">
                                    <GrDocumentVerified/>
                                    <div className="pr-2">قوانین و شرایط</div>
                                </div>
                            </div>
                            <div className="p-[24px_0_16px_0]">
                                <div
                                    className="text-[16px] text-greyish-brown mb-[24px]"
                                >
                                    پرواز رفت{" "}

                                       few
                                    {" "}
                                    -{" "}
                                    fe

                                </div>
                                <div className="flex mb-6">
                                    <div
                                        className="w-[56px] h-[336px] flex flex-col items-start justify-center font-IRANSans text-[12px] text-[#6f6f6f]"
                                    >
                                        <Image
                                            src="/images/logo.png"
                                            alt="airline Logo"
                                            height={40}
                                            width={40}
                                        />
                                        <p className="py-2">
                                            fe
                                        </p>
                                    </div>
                                    <div
                                        className="flex flex-col items-center ml-4"
                                    >
                                        <div
                                            className="w-[8px] h-[8px] rounded-full border border-red"
                                        ></div>
                                        <div
                                            className="h-[316px] my-[2px_0] w-[2px] box-border border-[2px] border-dotted border-gray"
                                        ></div>
                                        <div
                                            className="w-[8px] h-[8px] rounded-full border border-red"
                                        ></div>
                                    </div>
                                    <div>
                                        <div
                                            className="font-[14px]"
                                        >
                                            <div className="flex mb-2">
                                                <div
                                                    className="text-[12px] text-greyish-brown"
                                                >
                                                 efw
                                                </div>
                                                <div
                                                    className=
                                                        "text-greyish-brown ml-2"
                                                >
                                                    (
                                                   we
                                                    )
                                                </div>
                                                <div
                                                    className="text-greyish-brown"
                                                >
                                                    (
                                                   wfe
                                                    )
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div
                                                    className=
                                                        "text-greyish-brown ml-3"

                                                >
                                                    12 اردیبهشت 1399
                                                </div>
                                                <div
                                                    className=
                                                        "text-greyish-brown ml-3 ltr"

                                                >
                                                    (07 Apr)
                                                </div>
                                            </div>
                                            <div
                                                className="text-[#8d8d8d]"
                                            >
                                                wef
                                            </div>
                                        </div>
                                        <div className="my-8">
                                            <div className="flex mb-2">
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    مدت پرواز
                                                </div>
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                 wef
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    نوع هواپیما
                                                </div>
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    Airbus A320
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    کلاس پرواز
                                                </div>
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    اکونومی
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    نوع پرواز
                                                </div>
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    سیستمی
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    بار مجاز
                                                </div>
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    wef
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    کلاس نرخی
                                                </div>
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    A
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="text-[14px] text-greyish-brown flex items-center">
                                                    استرداد
                                                </div>
                                                <div
                                                    className="text-[14px] text-greyish-brown flex items-center"
                                                    style={{color: "#ff1d23"}}
                                                >
                                                    غیر قابل استرداد
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="text-[14px]"
                                        >
                                            <div className="flex mb-2">
                                                <div
                                                    className={
                                                        "text-[12px] text-greyish-brown"
                                                    }
                                                >
                                                   efw
                                                </div>
                                                <div
                                                    className={
                                                        "text-greyish-brown ml-2"
                                                    }
                                                >
                                                    (
                                                   few
                                                    )
                                                </div>
                                                <div
                                                    className={
                                                        "text-greyish-brown"
                                                    }
                                                >
                                                    (
                                                   wfe
                                                    )
                                                </div>
                                            </div>
                                            <div className="flex mb-2">
                                                <div
                                                    className={
                                                        "text-greyish-brown ml-3"
                                                    }
                                                >
                                                    12 اردیبهشت 1399
                                                </div>
                                                <div
                                                    className="text-greyish-brown ml-3 ltr"
                                                >
                                                    (07 Apr)
                                                </div>
                                            </div>
                                            <div
                                                className="text-[#8d8d8d]"
                                            >
                                               wef
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="border border-[#eee] p-[14px_16px] h-[140px] w-full"
                                >
                                    <div
                                        className="flex justify-between items-center mb-[8px]"
                                    >
                                        <div
                                            className="flex justify-between items-center mb-[8px]"
                                        >
                                            <div>2</div>
                                            <IoMdClose/>
                                            <div>بزرگسال</div>
                                        </div>
                                        <div
                                            className="flex justify-between items-center mb-[8px]"
                                        >
                                            <div className="ml-2">
                                                {" "}
                                               efw
                                            </div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-between items-center mb-[8px]"
                                    >
                                        <div
                                            className="flex justify-between items-center mb-[8px]"
                                        >
                                            <div>2</div>
                                            <IoMdClose/>
                                            <div>کودک</div>
                                        </div>
                                        <div
                                            className="flex justify-between items-center mb-[8px]"
                                        >
                                            <div className="ml-2">
                                               ewf
                                            </div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-between items-center mb-[8px]"
                                    >
                                        <div
                                            className="flex justify-between items-center mb-[8px]"
                                        >
                                            <div>1</div>
                                            <IoMdClose/>
                                            <div>نوزاد</div>
                                        </div>
                                        <div
                                            className="flex justify-between items-center mb-[8px]"
                                        >
                                            <div className="ml-2">
                                               ewf
                                            </div>
                                            <div>تومان</div>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-between items-center mb-[8px]"
                                    >
                                        <div
                                            className="text-[14px] text-greyish-brown"
                                        >
                                            <div>مجموع:</div>
                                        </div>
                                        <div
                                            className="text-[14px] text-blue flex items-center"
                                        >
                                            <div className="ml-2">
                                                wef
                                            </div>
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
                                        <div className="text-[12px] text-blue text-[20] ml-3">
                                          ew
                                        </div>
                                        <div className="text-[12px] text-secondary-gray">تومان</div>
                                    </div>
                                </div>
                                <div
                                    className="w-[152px] h-[40px] flex items-center justify-center font-IRANSans text-[14px] text-white bg-blue rounded-[4px] cursor-pointer"
                                    onClick={() => setIsFlightDetailsVisible(false)}
                                >
                                    جزئیات و انتخاب
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
