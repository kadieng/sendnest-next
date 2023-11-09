'use client';

import React, { Fragment, useEffect, useState } from 'react';
import {
  Bars3Icon,
  BellIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  HomeIcon,
  UsersIcon,
  WalletIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Inter } from 'next/font/google';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Logo from '@/images/logo.png';
import { usePathname, useRouter } from 'next/navigation';
import { Link } from '@nextui-org/link';
import { useAuth } from '@/context/AuthContext';
import useUser from '@/hooks/useUser';
import useUserSession from '@/hooks/useUserSession';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'History', href: '/dashboard/history', icon: ClipboardDocumentListIcon, current: false },
  { name: 'My Wallet', href: '/dashboard/wallet', icon: WalletIcon, current: false },
  { name: 'Beneficiaries', href: '/dashboard/beneficiaries', icon: UsersIcon, current: false },
];

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// const userNavigation = [
//   { name: 'Your profile', href: '#' },
//   { name: 'Sign out', href: '#' },
// ];

const inter = Inter({ subsets: ['latin'] });
export default function SNDashNavigations() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentRoute = usePathname();

  const { user } = useUser();
  const { logout } = useUserSession();
  const router = useRouter();

  const userNavigation = [
    {
      name: 'Your profile',
      func: () => {
        router.push('/dashboard/settings');
      },
    },
    { name: 'Sign out', func: logout },
  ];

  // console.log(user, 'dash navigation.tsx');

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image style={{ objectFit: 'contain' }} src={Logo} height={60} width={150} alt="Sendnest Logo" />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 flex flex-col space-y-4">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  currentRoute === item.href
                                    ? 'bg-primary text-white'
                                    : 'text-gray-700 hover:text-white hover:bg-primary',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    currentRoute === item.href
                                      ? 'text-white'
                                      : 'text-primary' + ' group-hover:text-white',
                                    'h-6 w-6 shrink-0',
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-primary"
                        >
                          <Cog6ToothIcon
                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-primary"
                            aria-hidden="true"
                          />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <Image style={{ objectFit: 'contain' }} src={Logo} height={60} width={150} alt="Sendnest Logo" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      className={classNames(currentRoute === item.href ? 'sn-active' : '', 'sn-nav-link')}
                    >
                      <Link
                        href={item.href}
                        className={classNames(
                          currentRoute === item.href
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:text-white hover:bg-primary',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                        )}
                      >
                        <item.icon
                          className={classNames(
                            currentRoute === item.href ? 'text-white' : 'text-primary' + ' group-hover:text-white',
                            'h-6 w-6 shrink-0',
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={classNames(currentRoute === '/dashboard/settings' ? 'sn-active' : '', 'sn-nav-link mt-auto')}
              >
                <Link
                  href="/dashboard/settings"
                  className={classNames(
                    currentRoute.includes('/dashboard/settings')
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:text-white hover:bg-primary',
                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                  )}
                >
                  <Cog6ToothIcon
                    className={classNames(
                      currentRoute.includes('/dashboard/settings')
                        ? 'text-white'
                        : 'text-primary' + ' group-hover:text-white',
                      'h-6 w-6 shrink-0',
                    )}
                    aria-hidden="true"
                  />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-end">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full bg-gray-50" src={user?.avatar} alt="" />
                  <span className="hidden lg:flex lg:items-center">
                    <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                      {user?.firstName} {user?.lastName}
                    </span>
                    <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <button
                            className={classNames(
                              active ? 'bg-gray-50 w-full' : '',
                              'block px-3 py-1 w-full text-sm leading-6 text-gray-900',
                            )}
                            onClick={item.func}
                          >
                            {item.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
