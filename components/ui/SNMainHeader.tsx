"use client"

import {BackgroundIllustration} from "@/components/BackgroundIllustration";
import {Button} from "@nextui-org/button";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import React from "react";
import {useFormik} from "formik";

const validate = (values: { send: any; receive: any; }) => {
    const errors = {};

    if (!values.send) {
        errors.send = 'Send field is Required';
    }

    if (!values.receive) {
        errors.receive = 'Receive field is Required';
    }

    return errors;
};


export default function SNMainHeader() {
    const formik = useFormik({
        initialValues: {
            send: '',
            receive: ''
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <div className="overflow-hidden hero-bg flex items-center">
                <div className="container">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 lg:gap-y-20">
                        <div
                            className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                            <h1 className="xl:text-6xl md:5xl text-4xl font-medium tracking-tight text-gray-900">
                                Send money from anywhere in the world, instantly!
                            </h1>
                            <p className="mt-6 xl:text-xl text-lg text-gray-600">
                                Simplify your money transfers with SendNest - the easiest way to send money overseas.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                                <Button color="primary">
                                    Register
                                </Button>
                            </div>
                        </div>
                        <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                            <BackgroundIllustration
                                className="hero-animation h-[1026px] w-[1026px] stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)]"/>
                            <div
                                className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32 ">
                                <Card shadow="sm"
                                      className="xl:max-w-xl md:max-w-xl max-w-full mx-auto w-full col-span-12 sm:col-span-4 min-h-[300px]">
                                    <CardHeader className="pt-7 pl-7 z-10 flex-col !items-start">
                                        <p className="text-large font-semibold">Quick Transfer</p>
                                    </CardHeader>
                                    <CardBody className=" pl-7">
                                        <form className="grid gap-4" onSubmit={formik.handleSubmit}>
                                            <Input
                                                type="number"
                                                isDisabled
                                                placeholder="Transfer Fee"
                                                labelPlacement="outside"
                                                variant="bordered"
                                                className="opacity-90"
                                                endContent={
                                                    <div className="pointer-events-none flex items-center">
                                                        <span className="text-success-400 text-small">0.00USD</span>
                                                    </div>
                                                }
                                            />
                                            <Input
                                                type="number"
                                                label="You send"
                                                placeholder="0.00"
                                                variant="bordered"
                                                size="lg"
                                                validationState={formik.errors.send ? "invalid" : undefined}
                                                color={formik.errors.send ? "danger" : "success"}
                                                errorMessage={formik.errors.send}
                                                startContent={
                                                    <div className="pointer-events-none flex items-center">
                                                        <span className="text-default-400 text-small">$</span>
                                                    </div>
                                                }
                                                onChange={(e) => {
                                                    formik.handleChange(e);
                                                    formik.setFieldValue(
                                                        `send`,
                                                        // @ts-ignore
                                                        (e.target.value)
                                                    );
                                                    formik.setFieldValue(
                                                        `receive`,
                                                        // @ts-ignore
                                                        (e.target.value * 750)
                                                    );
                                                }}
                                                value={formik.values.send}
                                            />
                                            <div className="flex opacity-90 justify-between">
                                                <p className="text-small">Exchange Rate</p>
                                                <span className="text-success-400 text-small">750NGN</span>
                                            </div>
                                            <Input
                                                type="number"
                                                label="They get"
                                                placeholder="0.00"
                                                variant="bordered"
                                                size="lg"
                                                validationState={formik.errors.receive ? "invalid" : undefined}
                                                color={formik.errors.receive ? "danger" : "success"}
                                                errorMessage={formik.errors.receive}
                                                startContent={
                                                    <div className="pointer-events-none flex items-center">
                                                        <span className="text-default-400 text-small">₦</span>
                                                    </div>
                                                }
                                                onChange={(e) => {
                                                    formik.handleChange(e);
                                                    formik.setFieldValue(
                                                        `receive`,
                                                        // @ts-ignore
                                                        (e.target.value)
                                                    );
                                                    formik.setFieldValue(
                                                        `send`,
                                                        // @ts-ignore
                                                        (e.target.value / 750)
                                                    );
                                                }}
                                                value={formik.values.receive}
                                            />
                                            <Button type="submit" color="primary">Continue</Button>
                                        </form>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}