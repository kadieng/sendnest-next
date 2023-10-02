'use client';

import { Button } from '@nextui-org/button';
import React, { useState } from 'react';
import { Input, Textarea } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/select';
import { states } from '@/app/(onboarding)/data';

export default function Profile() {
  const [selectedState, setSelectedState] = useState('');
  const [lgas, setLgas] = useState([]);
  const [lga, setLga] = useState('');
  const handleState = (e) => {
    setSelectedState(e.target.value);
    setLgas(states.find((stat) => stat.state == e.target.value).lgas);
  };
  const handleLGA = (e) => {
    setLga(e.target.value);
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-[#424242]">
        Personal Information
      </h1>
      <div className="mt-4 border-b border-t border-[#E9E9E9]">
        <div className="hidden items-center gap-6 py-5 md:flex">
          <img
            className="inline-block h-[7rem] w-[7rem] rounded-full ring-2 ring-white dark:ring-gray-800"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />

          <div className="font-inter">
            <h3 className="font-medium text-[#424242]">Profile</h3>
            <p className="text-[#5B5B5B] md:w-[60%] lg:w-[70%]">
              This information will be displayed publicly so be careful what
              you share.
            </p>
          </div>
          <div className="upload-btn">
            <Button
              className="bg-blue-600 text-white"
            >
              Update
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Input
              type="text"
              label="First Name"
              placeholder="Jon"
              variant="bordered"
            />
          </div>
          <div>
            <Input
              type="text"
              label="Last Name"
              placeholder="Snow"
              variant="bordered"
            />
          </div>
          <div>
            <Input
              type="text"
              label="Middle Name"
              placeholder="Doe"
              variant="bordered"
            />
          </div>
          <div>
            <Input
              type="tel"
              label="Phone Number"
              placeholder="0123456789"
              variant="bordered"
            />
          </div>
          <div>
            <Select
              color="primary"
              label="Select State"
              placeholder="Select a state"
              onChange={handleState}
            >
              {states.map((stat) => (
                <SelectItem key={stat.state} value={stat.state}>
                  {stat.state}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              color="primary"
              label="Select LGA"
              placeholder="Select a lga"
              onChange={handleLGA}
            >
              {lgas.map((lga) => (
                <SelectItem key={lga} value={lga}>
                  {lga}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="sm:col-span-2">
            <Textarea
              variant="bordered"
              label="Address"
              placeholder="Enter your current Address"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />
          </div>
        </div>
        <div className="mt-4 border-b border-t border-[#E9E9E9]" />

        <div className="flex justify-end py-10">
          <div className="flex gap-8">
            <Button
              color="danger"
              className="block w-full"
            >
              Cancel
            </Button>
            <Button
              className="bg-blue-600 text-white"
            >
              Edit
            </Button>

            <Button
              color="success"
              type="submit"
              className="block w-full"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
