"use client"
import {Input} from "@nextui-org/input";
import {EyeSlashFilledIcon} from "@/components/EyeSlashFilledIcon";
import {EyeFilledIcon} from "@/components/EyeFilledIcon";
import React, {useState} from "react";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";

export default function Login() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
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
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Log in to your account</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Welcome back! Please enter your details.
                </p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-10 max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                    <div>
                        <Input
                            type="email"
                            label="Email"
                            placeholder="a@b.c"
                            variant="bordered"
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
                                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                    ) : (
                                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                    )}
                                </button>
                            }
                            type={isVisible ? "text" : "password"}
                        />
                        <div className="flex items-center mt-2 justify-end">
                            <div className="text-sm">
                                <Link href="/forgot-password" className="font-semibold">Forgot password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <Button
                        color="primary"
                        type="submit"
                        className="block w-full"
                    >
                        Login
                    </Button>
                </div>
            </form>
            <p className="mt-5 text-center text-sm text-gray-500">
                Don’t have an account?
                <Link href="/register" className="font-medium leading-6 ml-2"> Register</Link>
            </p>
        </div>
    )
}