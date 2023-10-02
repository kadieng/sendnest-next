import {PlusIcon} from '@heroicons/react/24/outline';

import React from 'react';

export default function Beneficiaries() {
    return (
        <div className="flex flex-col px-3 md:px-7 lg:px-10">
            <div className="flex items-center justify-between pb-6 pt-11 lg:pt-0">
                <h3 className="font-radio-canada text-2xl font-semibold">Beneficiaries</h3>
                <button
                    className="font-radio-canada flex h-11 w-[135px] items-center justify-center rounded-md bg-primary text-xs text-white md:h-14 md:w-44 md:text-base"
                >
                      <span
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-50 md:mr-2"
                      >
                        <PlusIcon className="h-4 w-4 text-primary"/>
                      </span>
                    <p className="ml-1 md:ml-0">Add Beneficiary</p>
                </button>
            </div>
            <div className="-m-1.5 overflow-x-auto">
                <div className="inline-block min-w-full p-1.5 align-middle">
                    <div className="overflow-hidden">
                        <table className="min-w-full divide-y-2 divide-border-light">
                            <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="font-radio-canada px-6 py-3 text-left font-semibold text-gray-500"
                                >
                                    Account Name
                                </th>
                                <th
                                    scope="col"
                                    className="font-radio-canada px-6 py-3 text-left font-semibold text-gray-500"
                                >
                                    Bank
                                </th>
                                <th
                                    scope="col"
                                    className="font-radio-canada px-6 py-3 text-left font-semibold text-gray-500"
                                >
                                    Account Number
                                </th>
                            </tr>
                            </thead>
                            <tbody className="divide-y-2 divide-border-light">
                            <tr
                                className="hover:bg-grey-50"
                            >
                                <td
                                    className="font-inter flex items-center gap-3 whitespace-nowrap px-6 py-7 font-medium text-[#FE6470]"
                                >
                                    <div
                                        className="grid h-10 w-10 place-content-center rounded-full bg-[#FFE8AD]"
                                    >
                                        ABG
                                    </div>
                                    <p className="text-[#343744]">Afekhide Gbadamosi</p>
                                </td>
                                <td
                                    className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium text-[#717C94]"
                                >
                                    Aef Badmus
                                </td>
                                <td
                                    className="font-inter whitespace-nowrap px-6 py-7 font-medium text-gray-800"
                                >
                                    1234567890
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
