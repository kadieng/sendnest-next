import Image from "next/image";
import React from "react";
import PersonalCard from "@/images/personalcard.png"
import UserTag from "@/images/user-tag.png"
import PayCard from "@/images/card.png"
import SendFund from "@/images/send-2.png"
import DottedSquares from "@/images/dottedsquare.png"

export default function SNHowItWorks() {
    return (

        <div className="relative bg-[#F6F3FF] py-28 px-4 md:px-11 lg:px-16 xl:px-36">
            <h1
                className="font-radio-canada text-center text-[40px] font-semibold text-[#424242] md:text-[60px]"
            >
                How It Works
            </h1>

            <p className="font-inter text-center text-[#5B5B5B] md:text-xl">
                Sending Money to your country Has Never Been Easier.
            </p>

            <div
                className="relative z-20 grid gap-10 overflow-hidden py-10 md:grid-cols-6"
            >
                <div
                    className="flex h-44 items-center gap-7 rounded-xl bg-white p-6 md:col-span-2 md:gap-2 md:p-3 lg:gap-7 lg:p-6"
                >
                    <Image
                        src={PersonalCard}
                        height={48}
                        width={48}
                        alt="personal card"
                    />
                    <div>
                        <h5
                            className="font-inter pb-3 text-xl font-bold uppercase text-[#424242] md:text-base lg:text-lg xl:text-xl"
                        >
                            Sign up
                        </h5>
                        <p
                            className="font-inter text-[#5B5B5B] md:text-xs lg:text-sm xl:text-base"
                        >
                            It's easy and only takes a few minutes.
                        </p>
                    </div>
                </div>

                <div
                    className="flex h-44 items-center gap-7 rounded-xl bg-white p-6 md:col-span-2 md:gap-2 md:p-3 lg:gap-7 lg:p-6"
                >
                    <Image
                        src={UserTag}
                        height={48}
                        width={48}
                        alt="personal card"
                    />

                    <div>
                        <h5
                            className="font-inter pb-3 text-xl font-bold uppercase text-[#424242] md:text-base lg:text-lg xl:text-xl"
                        >
                            Choose Your Transfer
                        </h5>
                        <p
                            className="font-inter text-[#5B5B5B] md:text-xs lg:text-sm xl:text-base"
                        >
                            Select the amount you want to send, and choose the recipient in
                            Nigeria.
                        </p>
                    </div>
                </div>

                <div
                    className="flex h-44 items-center gap-7 rounded-xl bg-white p-6 md:col-span-2 md:col-start-3 md:gap-2 md:p-3 lg:gap-7 lg:p-6"
                >
                    <Image
                        src={PayCard}
                        height={48}
                        width={48}
                        alt="personal card"
                    />

                    <div>
                        <h5
                            className="font-inter pb-3 text-xl font-bold uppercase text-[#424242] md:text-base lg:text-lg xl:text-xl"
                        >
                            Pay for Your Transfer
                        </h5>
                        <p
                            className="font-inter text-[#5B5B5B] md:text-xs lg:text-sm xl:text-base"
                        >
                            Choose the one that works best for you.
                        </p>
                    </div>
                </div>

                <div
                    className="relative z-20 flex h-44 items-center gap-7 rounded-xl bg-white p-6 md:col-span-2 md:gap-2 md:p-3 lg:gap-7 lg:p-6"
                >
                    <Image
                        src={SendFund}
                        height={48}
                        width={48}
                        alt="personal card"
                    />

                    <div>
                        <h5
                            className="font-inter pb-3 text-xl font-bold uppercase text-[#424242] md:text-base lg:text-lg xl:text-xl"
                        >
                            send
                        </h5>
                        <p
                            className="font-inter text-[#5B5B5B] md:text-xs lg:text-sm xl:text-base"
                        >
                            SendNest will transfer the money to your recipient in Nigeria.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute left-5 top-[30px] z-10 md:top-[198px] xl:left-20">
                <Image
                    src={DottedSquares}
                    height={78}
                    width={98}
                    alt="personal card"
                />
            </div>

            <div className="absolute bottom-0 right-10 z-10 xl:right-20">
                <Image
                    src={DottedSquares}
                    height={78}
                    width={98}
                    alt="personal card"
                />
            </div>
        </div>
    );
}