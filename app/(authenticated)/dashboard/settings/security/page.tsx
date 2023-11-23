'use client';

import { Input } from '@nextui-org/input';
import React, { ChangeEvent, useState } from 'react';
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon';
import { EyeFilledIcon } from '@/components/EyeFilledIcon';
import { usePasswordUpdate } from '@/utils/authedRoutes';
import { Button } from '@nextui-org/react';
import { toastSuccess, toastError } from '@/helpers/toast';

export default function Security() {
  const { passwordUpdate, isLoading } = usePasswordUpdate();

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);
  const toggleVisibility3 = () => setIsVisible3(!isVisible3);

  const [passwordUpdateDetails, setPasswordUpdateDetails] = useState({
    oldpassword: '',
    newpassword: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPasswordUpdateDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordUpdate = (event: any) => {
    event.preventDefault();

    try {
      passwordUpdate(passwordUpdateDetails, {
        onSuccess: (response: any) => {
          console.log(response);
          if (response.statusCode < 300) {
            toastSuccess({ description: response.message });
          } else {
            toastError({ description: response.response.data.message || response.response.data.error });
          }
        },
        onError: (error: any) => {
          toastError({ description: error.message });
        },
      });
    } catch (error) {}
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-[#424242]">Security</h1>
      <div className="mt-4 border-b border-t border-[#E9E9E9]" />
      <form action="" onSubmit={handlePasswordUpdate}>
        <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Input
              label="Current Password"
              variant="bordered"
              placeholder="Enter your Current password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              name="oldpassword"
              onChange={handleChange}
              value={passwordUpdateDetails.oldpassword}
            />
          </div>
          <div>
            <Input
              label="New Password"
              variant="bordered"
              placeholder="Enter your New password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility2}>
                  {isVisible2 ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible2 ? 'text' : 'password'}
              name="newpassword"
              onChange={handleChange}
              value={passwordUpdateDetails.newpassword}
            />
          </div>
          <div>
            <Input
              label="Confirm new password"
              variant="bordered"
              placeholder="Confirm your new password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility3}>
                  {isVisible3 ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible3 ? 'text' : 'password'}
            />
          </div>
        </div>
        <div className="mt-4 border-b border-t border-[#E9E9E9]" />
        <div className="flex justify-end py-10">
          <div className="flex gap-8">
            {/* <button
              type="submit"
              className="font-inter inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-primary-500 px-7 py-3 text-sm font-semibold text-[#EDEDED] transition-all"
            >
              Save
            </button> */}

            <Button color="primary" type="submit" className="w-full" isLoading={isLoading}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
