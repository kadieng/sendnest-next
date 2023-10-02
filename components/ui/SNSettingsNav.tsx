"use client";

import inactiveImg from "@/images/inactive.png";
import activeImg from "@/images/active.png";
import {usePathname} from "next/navigation";
import {Link} from "@nextui-org/link";
import Image from "next/image";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


export default function SNSettingsNav() {
    const currentRoute = usePathname();
    return (
        <div className="w-5/6 md:w-[35%] lg:w-[35%] xl:w-[25%] 2xl:w-1/5">
            <Link
                href="/dashboard/settings"
                className={classNames(
                    currentRoute === "/dashboard/settings" ? "bg-primary text-white" : "",
                    "mb-7 flex h-11 cursor-pointer items-center gap-3.5 rounded-lg lg:gap-2 px-4 xl:gap-3.5"
                )}
            >
                <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ECECED] active"
                >
                    <Image src={currentRoute === "/dashboard/settings" ? inactiveImg : activeImg} width="15"
                           height="15" alt=""/>
                </div>
                <p className="font-radio-canada font-medium">Personal Information</p>
            </Link>

            <Link
                href="/dashboard/settings/security"
                className={classNames(
                    currentRoute === "/dashboard/settings/security" ? "bg-primary text-white" : "",
                    "flex h-11 cursor-pointer items-center gap-3.5 rounded-lg lg:gap-2 xl:gap-3.5 px-4"
                )}
            >
                <div
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ECECED]"
                >
                    <Image src={currentRoute === "/dashboard/settings/security" ? inactiveImg : activeImg} width="15"
                           height="15" alt=""/>
                </div>
                <p className="font-radio-canada font-medium">Security</p>
            </Link>
        </div>
    );
}