"use client";

export default function SNHistoryTable() {
    return (
        <>
            <div className="flex flex-col px-3 md:px-7 lg:px-10">
                <div className="flex items-center justify-between pb-6 pt-11 lg:pt-0">
                    <h3 className="font-radio-canada text-2xl font-semibold">History</h3>
                    <select
                        defaultValue="Past 30 days"
                        className="font-radio-canada block w-[150px] rounded-md border-2 border-border-light px-4 py-3 pr-9 text-sm text-[#798BA3]"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
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
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-radio-canada px-6 py-3 text-left font-semibold text-gray-500"
                                    >
                                        Transfer ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-radio-canada px-6 py-3 text-left font-semibold text-gray-500"
                                    >
                                        Amount
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-radio-canada px-6 py-3 text-left font-semibold text-gray-500"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="font-radio-canada px-6 py-3 text-left font-semibold text-gray-500"
                                    >
                                        Bank
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-border-light">
                                <tr className="hover:bg-grey-50">
                                    <td
                                        className="font-inter flex items-center gap-3 whitespace-nowrap px-6 py-7 font-medium text-[#FE6470]"
                                    >
                                        <div
                                            className="grid h-10 w-10 place-content-center rounded-full bg-[#FFE8AD]"
                                        >
                                            S
                                        </div>
                                        <p className="text-[#343744]">Send to Antonio</p>
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-gray-800"
                                    >
                                        <div className="">
                                            <p className="font-medium">Jan 29, 2022</p>
                                            <p className="pl-1 text-sm text-[#798BA3]">at 08.00 PM</p>
                                        </div>
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 font-medium text-gray-800"
                                    >
                                        PMX09773
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium"
                                    >
                                        $156.00
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium"
                                    >
                  <span
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#FFF5F5] px-3 py-1.5 text-xs font-medium text-[#FF9999]"
                  >Failed</span
                  >
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium text-[#717C94]"
                                    >
                                        Union Bank
                                    </td>
                                </tr>

                                <tr className="hover:bg-grey-50">
                                    <td
                                        className="font-inter flex items-center gap-3 whitespace-nowrap px-6 py-7 font-medium text-[#FE6470]"
                                    >
                                        <div
                                            className="grid h-10 w-10 place-content-center rounded-full bg-[#FFE8AD]"
                                        >
                                            S
                                        </div>
                                        <p className="text-[#343744]">Send to Afe</p>
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left text-gray-800"
                                    >
                                        <div className="">
                                            <p className="font-medium">Jan 29, 2022</p>
                                            <p className="pl-1 text-sm text-[#798BA3]">at 08.00 PM</p>
                                        </div>
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 font-medium text-gray-800"
                                    >
                                        PMX09773
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium"
                                    >
                                        $156.00
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium"
                                    >
                  <span
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#F6FDF9] px-3 py-1.5 text-xs font-medium text-[#88E0A8]"
                  >Success</span
                  >
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium text-[#717C94]"
                                    >
                                        Union Bank
                                    </td>
                                </tr>

                                <tr className="hover:bg-grey-50">
                                    <td
                                        className="font-inter flex items-center gap-3 whitespace-nowrap px-6 py-7 font-medium text-[#FE6470]"
                                    >
                                        <div
                                            className="grid h-10 w-10 place-content-center rounded-full bg-[#FFE8AD]"
                                        >
                                            S
                                        </div>
                                        <p className="text-[#343744]">Send to Bolu</p>
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-gray-800"
                                    >
                                        <div className="">
                                            <p className="font-medium">Jan 29, 2022</p>
                                            <p className="pl-1 text-sm text-[#798BA3]">at 08.00 PM</p>
                                        </div>
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 font-medium text-gray-800"
                                    >
                                        PMX09773
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium"
                                    >
                                        $156.00
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium"
                                    >
                  <span
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#F6FDF9] px-3 py-1.5 text-xs font-medium text-[#88E0A8]"
                  >Success</span
                  >
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium text-[#717C94]"
                                    >
                                        Union Bank
                                    </td>
                                </tr>

                                <tr className="hover:bg-grey-50">
                                    <td
                                        className="font-inter flex items-center gap-3 whitespace-nowrap px-6 py-7 font-medium text-[#FE6470]"
                                    >
                                        <div
                                            className="grid h-10 w-10 place-content-center rounded-full bg-[#FFE8AD]"
                                        >
                                            S
                                        </div>
                                        <p className="text-[#343744]">Send to Jerry</p>
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-gray-800"
                                    >
                                        <div className="">
                                            <p className="font-medium">Jan 29, 2022</p>
                                            <p className="pl-1 text-sm text-[#798BA3]">at 08.00 PM</p>
                                        </div>
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 font-medium text-gray-800"
                                    >
                                        PMX09773
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium"
                                    >
                                        $156.00
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium"
                                    >
                  <span
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#FFF5F5] px-3 py-1.5 text-xs font-medium text-[#FF9999]"
                  >Failed</span
                  >
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium text-[#717C94]"
                                    >
                                        Union Bank
                                    </td>
                                </tr>

                                <tr className="hover:bg-grey-50">
                                    <td
                                        className="font-inter flex items-center gap-3 whitespace-nowrap px-6 py-7 font-medium text-[#FE6470]"
                                    >
                                        <div
                                            className="grid h-10 w-10 place-content-center rounded-full bg-[#FFE8AD]"
                                        >
                                            S
                                        </div>
                                        <p className="text-[#343744]">Send to Kemi</p>
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-gray-800"
                                    >
                                        <div className="">
                                            <p className="font-medium">Jan 29, 2022</p>
                                            <p className="pl-1 text-sm text-[#798BA3]">at 08.00 PM</p>
                                        </div>
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 font-medium text-gray-800"
                                    >
                                        PMX09773
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium"
                                    >
                                        $156.00
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium"
                                    >
                  <span
                      className="inline-flex items-center gap-1.5 rounded-md bg-[#FFF5F5] px-3 py-1.5 text-xs font-medium text-[#FF9999]"
                  >Failed</span
                  >
                                    </td>
                                    <td
                                        className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium text-[#717C94]"
                                    >
                                        Union Bank
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}