'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Checkbox,
  Link,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { GetBeneficiaries, CreateBeneficiaries, Bank } from '@/@types';
import { useGetBeneficiaries, useCreateBeneficiaries, useGetBanks } from '@/utils/authedRoutes';
import { toastError, toastSuccess } from '@/helpers/toast';

export default function Beneficiaries() {
  const { createBeneficiaries, isLoading: isCreatingBeneficiaries } = useCreateBeneficiaries();
  const { data: bankResponse, isLoading: isGettingBanks, isError: unableToGetBanks } = useGetBanks();
  const [details, setDetails] = useState<CreateBeneficiaries>({
    bankName: '',
    accountName: '',
    accountNumber: '',
  });
  const { data: beneficiaries, isLoading, isSuccess, isError } = useGetBeneficiaries();
  const [banks, setBanks] = useState<Bank[]>([]);

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Check if the value is a positive number before updating state
    if (name === 'accountNumber') {
      // Remove any non-digit characters from the input
      const sanitizedValue = value.replace(/[^0-9]/g, ''); // Allow only digits

      // Ensures the value is not empty and is a valid positive number or handle empty values
      if (sanitizedValue === '' || (!isNaN(parseInt(sanitizedValue, 10)) && parseInt(sanitizedValue, 10) >= 0)) {
        setDetails((prev) => ({ ...prev, [name]: sanitizedValue }));
      }
    } else {
      setDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: any; name: any }>) => {
    const { name, value } = event.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateBeneficiaries = () => {
    console.log(details);
    createBeneficiaries(details, {
      onSuccess: (response: any) => {
        console.log(response);
        if (response.statusCode < 300) {
          toastSuccess({ description: response.message });
          onClose();

          setDetails({
            bankName: '',
            accountName: '',
            accountNumber: '',
          });
        } else {
          toastError({ description: response.response.data.message || response.response.data.error });
        }
      },
      onError: (error: any) => {
        toastError({ description: error.message });
      },
    });
  };

  useEffect(() => {
    if (bankResponse) {
      const bankArray = Object.entries<string>(bankResponse.data).map(([code, name]) => ({
        code,
        name,
      }));

      bankArray.sort((a, b) => a.name.localeCompare(b.name));

      setBanks(bankArray);
    }
  }, [bankResponse]);

  return (
    <div className="flex flex-col px-3 md:px-7 lg:px-10">
      <div className="flex items-center justify-between pb-6 pt-11 lg:pt-0">
        <h3 className="font-radio-canada text-2xl font-semibold">Beneficiaries</h3>
        <button
          onClick={onOpen}
          className="font-radio-canada flex h-11 w-[135px] items-center justify-center rounded-md bg-primary text-xs text-white md:h-14 md:w-44 md:text-base"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-50 md:mr-2">
            <PlusIcon className="h-4 w-4 text-primary" />
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
                  <th scope="col" className="font-radio-canada px-6 py-3 text-left font-semibold text-gray-500">
                    Account Name
                  </th>
                  <th scope="col" className="font-radio-canada px-6 py-3 text-left font-semibold text-gray-500">
                    Bank
                  </th>
                  <th scope="col" className="font-radio-canada px-6 py-3 text-left font-semibold text-gray-500">
                    Account Number
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-border-light">
                {beneficiaries?.data.map(({ accountName, accountNumber, bankName, id }: GetBeneficiaries) => {
                  if (typeof accountName !== 'string' || accountName.trim() === '') {
                    return null;
                  }
                  const words = accountName.split(' ');
                  const firstLetter = words[0]?.charAt(0).toLocaleUpperCase();
                  const letterAfterWhitespace = words[1]?.charAt(0).toLocaleUpperCase() || '';

                  return (
                    <tr key={id} className="hover:bg-grey-50">
                      <td className="font-inter flex items-center gap-3 whitespace-nowrap px-6 py-7 font-medium text-[#FE6470]">
                        <div className="grid h-10 w-10 place-content-center rounded-full bg-[#FFE8AD]">
                          {firstLetter}
                          {letterAfterWhitespace}
                        </div>
                        <p className="text-[#343744]">{accountName}</p>
                      </td>
                      <td className="font-inter whitespace-nowrap px-6 py-7 text-left font-medium text-[#717C94]">
                        {bankName}
                      </td>
                      <td className="font-inter whitespace-nowrap px-6 py-7 font-medium text-gray-800">
                        {accountNumber}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <ModalHeader className="flex gap-1 justify-center">Add Beneficiary</ModalHeader>

                <Select
                  items={banks}
                  label="Bank"
                  placeholder="Select bank"
                  labelPlacement={'outside'}
                  variant="bordered"
                  name="bankName"
                  onChange={handleSelectChange}

                  //   className="max-w-xs"
                >
                  {(bank) => (
                    <SelectItem key={bank?.name} value={bank.name}>
                      {bank.name}
                    </SelectItem>
                  )}
                </Select>

                <Input
                  //   endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Account Name"
                  placeholder="Enter receivers account name"
                  type="text"
                  variant="bordered"
                  labelPlacement={'outside'}
                  name="accountName"
                  value={details.accountName}
                  onChange={handleChange}
                />

                <Input
                  label="Account Number"
                  placeholder="Enter receivers account number"
                  type="text"
                  variant="bordered"
                  labelPlacement={'outside'}
                  name="accountNumber"
                  value={details.accountNumber}
                  onChange={handleChange}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={handleCreateBeneficiaries}
                  color="primary"
                  // onPress={onClose}
                  className=" w-full mb-8 mt-4"
                  isLoading={isCreatingBeneficiaries}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
