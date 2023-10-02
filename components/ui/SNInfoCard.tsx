import {WifiIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import Shape from "@/images/Shape.png";

export default function SNInfoCard() {
    return (
        <div className="relative h-[206px] w-full md:w-[320px]">
            <div
                className="font-inter absolute z-20 h-52 w-full rounded-xl bg-[#2F2F65] text-white"
            >
                <div className="flex justify-between px-7 pt-7">
                    <Image src={Shape} alt="" height="40" width="50" className="h-6 w-8"/>
                    <WifiIcon className="h-6 w-6 rotate-90 transform"/>
                </div>

                <h1 className="font-inter w-full pt-10 text-center text-[22px] font-semibold">
                    0325 4320 5678 2034
                </h1>

                <div className="font-inter flex justify-between px-7 pt-[35px] text-sm">
                    <p>Aef Badmus</p>
                    <p>Exp 08/27</p>
                </div>
            </div>
            <div
                className="absolute -bottom-[15px] left-7 right-7 z-10 h-20 rounded-xl bg-[#26265B]"
            ></div>
        </div>
    );
}