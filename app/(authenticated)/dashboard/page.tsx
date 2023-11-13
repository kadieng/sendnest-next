'use client';

import React, { useEffect } from 'react';
import SNInfoCard from '@/components/ui/SNInfoCard';
import Image from 'next/image';
import AddIcon from '@/images/add.png';
import useUser from '@/hooks/useUser';
import { useAuth } from '@/context/AuthContext';

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-14 px-3 md:flex-row md:px-7 lg:px-10">
        <div className="pt-11 lg:pt-0">
          <h3 className="font-radio-canada text-2xl font-semibold">Overview</h3>
          <h3 className="font-radio-canada text-[22px] font-light">Send money</h3>

          <div className="mt-5 flex h-28 w-full flex-col justify-between rounded-2xl p-5 shadow-md md:w-[280px]">
            <p className="font-radio-canada font-light">You send</p>
            <div className="flex items-center justify-between">
              <select
                defaultValue="USD"
                className="font-radio-canada block rounded-md border-gray-200 text-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="USD">USD</option>
                <option value="NGN">NGN</option>
              </select>

              <p className="text-base font-medium">$10.680</p>
            </div>
          </div>
          <div className="mt-5 flex h-28 w-full flex-col justify-between rounded-2xl p-5 shadow-md md:w-[280px]">
            <p className="font-radio-canada font-light">They get</p>
            <div className="flex items-center justify-between">
              <h1 className="font-radio-canada text-3xl font-light">N800.00</h1>

              <div className="flex -space-x-2">
                <Image
                  className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="country flag"
                  width={38}
                  height={38}
                />
                <Image
                  className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="country flag"
                  width={38}
                  height={38}
                />
              </div>
            </div>
          </div>

          <div className="font-radio-canada mt-5 flex h-24 w-full flex-col justify-between rounded-lg border-2 border-[#A596CF] p-2 text-lg font-light text-[#A596CF] md:w-[280px]">
            <div className="flex items-center justify-between">
              <p>Exchange Rate</p>
              <p>750 NGN</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Transfer Fee</p>
              <p>0.00 USD</p>
            </div>
          </div>

          <div className="font-radio-canada mt-5 flex w-full items-center justify-between font-light md:w-[280px]">
            <p className="text-base">Add Beneficiary</p>

            <a href="#">
              <Image src={AddIcon} alt="" height="40" width="40" />
            </a>
          </div>

          <button className="font-radio-canada mt-5 flex h-11 w-full items-center justify-center rounded-lg bg-primary font-semibold text-white md:w-[280px]">
            Send Money
          </button>
        </div>
        <div className="mb-11 md:mt-5">
          <SNInfoCard />
        </div>
      </div>
    </>
  );
}
