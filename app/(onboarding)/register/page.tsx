'use client';

import React, { useState, ChangeEvent, useEffect } from 'react';
import { Input, Textarea } from '@nextui-org/input';
import { EyeFilledIcon } from '@/components/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/components/EyeSlashFilledIcon';
import { Select, SelectItem } from '@nextui-org/select';
import { states } from '@/app/(onboarding)/data';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/button';
import { register } from '@/app/http/auth';
import { useMutation } from '@tanstack/react-query';
import { Country, State } from 'country-state-city';
import { CountryType, StateType } from '../../../@types';
import { useRouter } from 'next/navigation';

function classNames({ ...classes }: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Register() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<CountryType>();
  const [selectedState, setSelectedState] = useState<StateType>();
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

  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);

  const { mutate, isLoading } = useMutation(register, {
    onSuccess: (data) => {
      if (data.statusCode === 201) {
        console.log(data);

        router.push(`/complete-signup/?email=${signUpDetails.email}`);

        return;
      }
    },
    onError: (error: any) => {
      // notify({ message: error.message, type: 'error' });
      console.log(error);
    },
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const country = Country.getCountryByCode(event.target.value as string);
    setSelectedCountry(country as CountryType);
    setSelectedState(undefined);
  };

  const handleStateChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const state = State.getStateByCode(event.target.value as string);
    setSelectedState(state as StateType);
  };

  const countries = Country.getAllCountries();
  const states = selectedCountry ? State.getStatesOfCountry(selectedCountry?.isoCode) : [];

  const handleRegister = (event: any) => {
    event.preventDefault();

    try {
      mutate({ ...signUpDetails, country: selectedCountry?.name, state: selectedState?.name } as any);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // console.log(selectedCountry);
    // console.log(selectedCountry?.name);
    // console.log(selectedState);
  }, [selectedCountry, selectedState]);

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
              value={signUpDetails.firstName}
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
              value={signUpDetails.lastName}
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
              value={signUpDetails.middleName}
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
              value={signUpDetails.username}
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
              value={signUpDetails.email}
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
              value={signUpDetails.phone}
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
              value={signUpDetails.password}
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
              label="Select Country"
              placeholder="Select a country"
              className="max-w-xs"
              onChange={handleCountryChange}
              value={selectedCountry?.name ?? ''}
            >
              {countries.map((country) => (
                <SelectItem key={country?.isoCode} value={country?.name}>
                  {country?.name}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div>
            <Select
              color="primary"
              label="Select State"
              placeholder="Select a state"
              className="max-w-xs"
              onChange={handleStateChange}
              value={selectedState?.name ?? ''}
            >
              {states.map((state) => (
                <SelectItem key={state?.isoCode} value={state?.name}>
                  {state?.name}
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
              onChange={handleChange}
              name="address"
              value={signUpDetails.address}
            />
          </div>
        </div>
        <div className="mt-10">
          <Button color="primary" type="submit" className="block w-full" isLoading={isLoading}>
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
