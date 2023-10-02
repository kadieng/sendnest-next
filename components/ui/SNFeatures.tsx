import EasyAccount from '@/images/easy-account.png'
import TransparentFees from '@/images/transparent.png'
import FastSecure from '@/images/fast-secure.png'
import Image from "next/image";
import React from "react";

const features = [
    {
        name: 'Easy Account Setup',
        description:
            'Access to a wide range of wireless transfer services. Users can easily register and begin making transfers within minutes.',
        href: '#',
        icon: EasyAccount,
    },
    {
        name: 'Transparent Fees ',
        description:
            'Provide up-front information on fees and exchange rates, enabling users to easily compare and choose the best option for their transfer.',
        href: '#',
        icon: TransparentFees,
    },
    {
        name: 'Fast and Secure ',
        description:
            'A fast and secure transfer process, ensuring that users\' money reaches its destination quickly and without risk.',
        href: '#',
        icon: FastSecure,
    },
]
export default function SNFeatures() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="container">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <Image
                                        src={feature.icon}
                                        height={30}
                                        width={30}
                                        alt={feature.name}
                                    />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}