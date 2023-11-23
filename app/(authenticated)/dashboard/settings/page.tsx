'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { Input, Textarea } from '@nextui-org/input';
import { useUpdateUser } from '@/utils/authedRoutes';
import useUser from '@/hooks/useUser';
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline';
import { toastError, toastSuccess } from '@/helpers/toast';
import { UpdateUser } from '@/@types';

interface UserAvatar {
  link?: string | null;
  file?: File | null;
}

export default function Profile() {
  const { updateUser, isLoading } = useUpdateUser();
  const { user } = useUser();
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [userAvatar, setUserAvatar] = useState<UserAvatar>({
    link: null,
    file: null,
  });
  const [updateUserDetails, setUpdateUserDetails] = useState<UpdateUser>({
    file: null,
    username: '',
    phone: '',
    country: '',
    state: '',
    address: '',
  });
  const [isEditMode, setIsEditMode] = useState(true);

  useEffect(() => {
    if (user) {
      setUpdateUserDetails({
        file: null,
        username: user.username || '',
        phone: user.phone || '',
        country: user.country || '',
        state: user.state || '',
        address: user.address || '',
      });

      // setImageSrc(user?.avatar as any);

      setUserAvatar({
        link: user?.avatar || null,
        file: null,
      });
    }
  }, [user]);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newFile = event.target.files[0];
      console.log(newFile);

      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the image source to the data URL
        // setImageSrc(reader.result as string);

        setUserAvatar({
          link: reader.result as string,
          file: newFile,
        });
      };
      reader.readAsDataURL(newFile);
    }
  };

  const handleImageClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleUpdateUser = (e: any) => {
    e.preventDefault();

    const formData = new FormData();

    // Loop through the updateUserDetails object and append each key-value pair to the formData
    for (const key in updateUserDetails) {
      if (Object.hasOwnProperty.call(updateUserDetails, key)) {
        const value = updateUserDetails[key as keyof UpdateUser]; // Type assertion for key
        formData.append(key, value as any);
      }
    }

    if (userAvatar.file) {
      formData.append('file', userAvatar.file);
    }

    const formDataObject: { [key: string]: string | Blob } = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value instanceof Blob ? value : String(value);
    });

    console.log(formDataObject);

    updateUser(formData, {
      onSuccess: (response: any) => {
        console.log(response);
        if (response.statusCode < 300) {
          toastSuccess({ description: response.message });
        }
      },
      onError: (error: any) => {
        toastError({ description: error.message });
      },
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-[#424242]">Personal Information</h1>
      <div className="mt-4 border-b border-t border-[#E9E9E9]">
        <div className="hidden items-center gap-6 py-5 md:flex h-[10rem]">
          <div className=" w-[7rem] h-[7rem]">
            {userAvatar.link && (
              <Image
                className="inline-block h-[7rem] w-[7rem] rounded-full ring-2 ring-white dark:ring-gray-800 object-cover"
                src={userAvatar.link}
                alt="Image Description"
                width={112}
                height={112}
              />
            )}
          </div>

          <div className="font-inter w-[50%] 2xl:w-[40%]">
            <h3 className="font-medium text-[#424242]">Profile</h3>
            <p className="text-[#5B5B5B] md:w-[60%] lg:w-[70%]">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="upload-btn flex items-center gap-3">
            <Input
              type="file"
              ref={hiddenFileInput}
              className=" hidden"
              onChange={handleImageChange}
              accept="image/*"
            />

            <Button isIconOnly aria-label="Upload Image" onClick={handleImageClick}>
              <ArrowUpOnSquareIcon className=" h-6 w-6" />
            </Button>

            {/* <Button className="bg-primary text-white">Update</Button> */}
          </div>
        </div>

        <form onSubmit={handleUpdateUser}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="pt-8">
              <Input
                type="text"
                label="Username"
                // placeholder="Jon"
                variant="bordered"
                name="username"
                labelPlacement={'outside'}
                onChange={handleInputChange}
                value={updateUserDetails.username}
                isDisabled={isEditMode}
                className={isEditMode ? 'cursor-not-allowed' : ''}
              />
            </div>
            {/* <div className="pt-8">
              <Input
                type="text"
                label="First Name"
                // placeholder="Jon"
                variant="bordered"
                name="firstName"
                labelPlacement={'outside'}
                onChange={handleInputChange}
                value={updateUserDetails.firstName}
                isDisabled={isEditMode}
              />
            </div>
            <div className="pt-8">
              <Input
                type="text"
                label="Last Name"
                // placeholder="Snow"
                variant="bordered"
                name="lastName"
                labelPlacement={'outside'}
                onChange={handleInputChange}
                value={updateUserDetails.lastName}
                isDisabled={isEditMode}
              />
            </div> */}
            {/* <div className="pt-8">
              <Input
                type="text"
                label="Middle Name"
                // placeholder="Doe"
                variant="bordered"
                name="middleName"
                labelPlacement={'outside'}
                onChange={handleInputChange}
                value={updateUserDetails.middleName}
                isDisabled={isEditMode}
              />
            </div> */}
            <div className="pt-8">
              <Input
                type="tel"
                label="Phone Number"
                // placeholder="0123456789"
                variant="bordered"
                name="phone"
                labelPlacement={'outside'}
                onChange={handleInputChange}
                value={updateUserDetails.phone}
                isDisabled={isEditMode}
              />
            </div>
            <div className="pt-8">
              <Input
                type="text"
                label="Country"
                variant="bordered"
                name="country"
                labelPlacement={'outside'}
                onChange={handleInputChange}
                value={updateUserDetails.country}
                isDisabled={isEditMode}
              />
            </div>
            <div className="pt-8">
              <Input
                type="text"
                label="State"
                variant="bordered"
                name="state"
                labelPlacement={'outside'}
                onChange={handleInputChange}
                value={updateUserDetails.state}
                isDisabled={isEditMode}
              />
            </div>

            <div className="sm:col-span-2">
              <Textarea
                variant="bordered"
                label="Address"
                // placeholder="Enter your current Address"
                className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                labelPlacement={'outside'}
                onChange={handleInputChange}
                name="address"
                value={updateUserDetails.address}
                isDisabled={isEditMode}
              />
            </div>
          </div>
          <div className="mt-4 border-b border-t border-[#E9E9E9]" />

          <div className="flex justify-end py-10">
            <div className="flex gap-8">
              {/* <Button color="danger" className="block w-full">
              Cancel
            </Button> */}
              <Button onClick={toggleEditMode} className="border-2 border-primary bg-white">
                Edit
              </Button>

              <Button type="submit" isLoading={isLoading} className="block w-full bg-primary text-white">
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
