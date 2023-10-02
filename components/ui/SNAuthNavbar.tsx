"use client"
import {Navbar} from "@nextui-org/react";
import React, {useState} from "react";
import {NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import Image from "next/image";
import Logo from "@/images/logo.png";

export function SNAuthNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {name: "Login", value: "login"},
        {name: "Register", value: "register"},
        {name: "Forgot Password", value: "forgot-password"},
    ];
    const scrollRez = (e) => {
        console.log(e)
    }
    return (
        <Navbar className="auth-nav" maxWidth="2xl" onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
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
                    <Link href="/login">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="/register" variant="ghost">
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
                            href={`/${item.value}`}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}