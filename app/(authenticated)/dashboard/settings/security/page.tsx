'use client';

import { Input } from '@nextui-org/input';
import React from 'react';
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/components/EyeFilledIcon';

export default function Security() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);
  const [isVisible3, setIsVisible3] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);
  const toggleVisibility3 = () => setIsVisible3(!isVisible3);
  return (
    <>
      <h1 className="text-3xl font-bold text-[#424242]">Security</h1>
      <div className="mt-4 border-b border-t border-[#E9E9E9]" />
      <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

        <div>
          <Input
            label="Current Password"
            variant="bordered"
            placeholder="Enter your Current password"
            endContent={(
              <button className="focus:outline-none" type="button" onClick={toggleVisibility3}>
                {isVisible3 ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
                        )}
            type={isVisible3 ? 'text' : 'password'}
          />
        </div>
        <div>
          <Input
            label="New Password"
            variant="bordered"
            placeholder="Enter your New password"
            endContent={(
              <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
                        )}
            type={isVisible ? 'text' : 'password'}
          />
        </div>
        <div>
          <Input
            label="Confirm new password"
            variant="bordered"
            placeholder="Confirm your new password"
            endContent={(
              <button className="focus:outline-none" type="button" onClick={toggleVisibility2}>
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
                        )}
            type={isVisible2 ? 'text' : 'password'}
          />
        </div>
      </div>
      <div className="mt-4 border-b border-t border-[#E9E9E9]" />
      <div className="flex justify-end py-10">
        <div className="flex gap-8">
          <button
            type="button"
            className="font-inter inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-primary-500 px-7 py-3 text-sm font-semibold text-[#EDEDED] text-white transition-all"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
