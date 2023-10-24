'use client';

import React, { useState, ChangeEvent } from 'react';
import { Input, Textarea } from '@nextui-org/input';
import { EyeFilledIcon } from '@/components/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon';
import { Select, SelectItem } from '@nextui-org/select';
import { states } from '@/app/(onboarding)/data';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { register } from '@/app/http/auth';
import { useMutation } from '@tanstack/react-query';

function classNames({ ...classes }: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Register() {
  const [selectedState, setSelectedState] = useState('');
  const [lgas, setLgas] = useState<string[] | undefined>([]);
  const [lga, setLga] = useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);
  const handleState = (e: any) => {
    setSelectedState(e.target.value);
    setLgas(states.find((stat) => stat.state === e.target.value)?.lgas);
  };
  const handleLGA = (e: any) => {
    setLga(e.target.value);
  };

  const { mutate, isLoading } = useMutation(register, {
    onSuccess: (data) => {
      if (data.status === 200) {
        return;
      }
    },
    onError: (error: any) => {
      // notify({ message: error.message, type: 'error' });
      console.log(error);
    },
  });

  const [signUpDetails, setRegisterDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: '',
    address: '',
    middleName: '',
    country: '',
    state: '',
    phone: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterDetails((prev) => ({ ...prev, [name]: value }));
  };

  console.log(signUpDetails);

  const handleRegister = (event: any) => {
    event.preventDefault();
    const data = {
      ...signUpDetails,
      state: selectedState,
      lga: lga,
    };

    console.log(data);

    try {
    } catch (error) {}
  };

  return (
    <div className="isolate bg-white px-6 py-12 sm:py-16 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Register a new account</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Hi there! Please enter your details</p>
      </div>
      <form action="#" method="POST" onSubmit={handleRegister} className="mx-auto mt-10 max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Input
              type="text"
              label="First Name"
              placeholder="Jon"
              variant="bordered"
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Last Name"
              placeholder="Snow"
              variant="bordered"
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Middle Name"
              placeholder="Doe"
              variant="bordered"
              name="middleName"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="text"
              label="Username"
              placeholder="elon"
              variant="bordered"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="email"
              label="Email"
              placeholder="a@b.c"
              variant="bordered"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="tel"
              label="Phone Number"
              placeholder="0123456789"
              variant="bordered"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
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
              className="max-w-xs"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Confirm Password"
              variant="bordered"
              placeholder="Confirm your password"
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility2}>
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible2 ? 'text' : 'password'}
              className="max-w-xs"
            />
          </div>
          <div>
            <Select
              color="primary"
              label="Select State"
              placeholder="Select a state"
              className="max-w-xs"
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
            {lgas && (
              <Select
                color="primary"
                label="Select LGA"
                placeholder="Select a lga"
                className="max-w-xs"
                onChange={handleLGA}
              >
                {lgas.map((lga) => (
                  <SelectItem key={lga} value={lga}>
                    {lga}
                  </SelectItem>
                ))}
              </Select>
            )}
          </div>
          <div className="sm:col-span-2">
            <Textarea
              variant="bordered"
              label="Address"
              placeholder="Enter your current Address"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
              onChange={handleChange}
              name="address"
            />
          </div>
        </div>
        <div className="mt-10">
          <Button color="primary" type="submit" className="block w-full">
            Create Account
          </Button>
        </div>
      </form>
      <p className="mt-5 text-center text-sm text-gray-500">
        Already have an account?
        <Link href="/login" className="font-medium leading-6 ml-2">
          {' '}
          Login
        </Link>
      </p>
    </div>
  );
}
