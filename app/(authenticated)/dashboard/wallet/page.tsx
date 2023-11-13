'use client';

import WalletImg from '@/images/wallet.png';
import { PlusIcon, Square2StackIcon } from '@heroicons/react/24/outline';
import SNInfoCard from '@/components/ui/SNInfoCard';
import Image from 'next/image';
import { walletBalance } from '@/utils/authedRoutes';
import { useEffect } from 'react';
import queryClient from '@/utils/queries';

export default function Wallet() {
  const { data: wallet, isSuccess, isError } = walletBalance();
  //   console.log(wallet);

  useEffect(() => {
    console.log('useEffect triggered');
    console.log('isSuccess:', isSuccess);
    console.log('isError:', isError);
    console.log('wallet:', wallet);
    if (isSuccess && !isError) {
      queryClient.invalidateQueries(['wallet-balance']);
    }
  }, [wallet, isSuccess, isError]);

  return (
    <>
      <div className="px-3 md:px-7 lg:px-10">
        <h3 className="font-radio-canada pb-6 pt-11 text-2xl font-semibold lg:pt-0">Wallet</h3>

        <div className="mb-28 h-auto w-full rounded-xl bg-primary p-4 md:p-7 lg:p-10">
          <h3 className="font-radio-canada pb-6 text-2xl font-medium text-white">My Balance</h3>

          <div className="flex flex-col gap-14 md:flex-row">
            <SNInfoCard />

            <div className="flex flex-col gap-14 xl:flex-row">
              <div className="text-white">
                <p className="font-radio-canada text-2xl text-[#CDD7FB] md:text-xl xl:text-2xl">Wallet Balance</p>
                <p className="xl:text3xl font-inter text-3xl md:text-2xl">₦{wallet?.data.balance}</p>
              </div>

              {/* <div className="text-white">
                <p className="font-radio-canada text-2xl text-[#CDD7FB] md:text-xl xl:text-2xl">Referral Balance</p>
                <p className="xl:text3xl font-inter text-3xl md:text-2xl">$1,300</p>
              </div> */}
            </div>

            {/* <div className="text-white">
              <p className="font-radio-canada text-2xl text-[#CDD7FB] md:text-xl xl:text-2xl">Total Balance</p>
              <p className="xl:text3xl font-inter text-3xl md:text-2xl">$13,500</p>
            </div> */}
          </div>

          <div className="flex flex-col items-start justify-between gap-5 pt-14 md:flex-row md:items-center">
            <div className="font-radio-canada flex gap-2 text-white">
              <p className="md:text-base">Referral code: RNSILSKHSJ8365382</p>

              <Square2StackIcon className="h-6 w-6 opacity-30" />
            </div>

            <button className="font-radio-canada flex h-11 w-40 items-center justify-center rounded-md bg-[#26265B] text-white">
              <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-lg bg-grey-50">
                {/* <Image src={WalletImg} alt="" className="" /> */}
                <PlusIcon className="h-6 w-6 text-[#4D3690]" />
              </span>
              Fund Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
