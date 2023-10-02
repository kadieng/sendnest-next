"use client"

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/navbar";
import {Link,} from "@nextui-org/link";
import React from "react";
import {Button} from "@nextui-org/button";
import Image from 'next/image'
import Logo from "@/images/logo.png"

export default function SNNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Contact",
        "Login",
    ];
    return (
        <Navbar maxWidth="2xl" onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/">
                        <Image
                            style={{objectFit: "contain"}}
                            src={Logo}
                            height={60}
                            width={150}
                            alt="Sendnest Logo"
                        /></Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="/contact">Contact</Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/register">
                        Register
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color="primary"
                            className="w-full"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}