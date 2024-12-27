"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Switch,
} from "@nextui-org/react";
import { Brain, MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import router, { useRouter } from "next/router";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Profile", "Log Out"];

  function toggleTheme(isSelected: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred={true}>
      <NavbarContent>
        <NavbarBrand>
          <NavbarBrand>
            <Link passHref
              href="/"
              className=" flex items-center space-x-3 p-0 m-0 bg-transparent border-none cursor-pointer "
            >
              <Brain
                size={40}
                strokeWidth={1.5}
                absoluteStrokeWidth
                fill="orange"
              />
              <p className="hidden bg-gradient-to-b from-pink-400 to-pink-700 bg-clip-text text-3xl ml-3 font-black tracking-tighter text-transparent min-[410px]:block">
                Brainly
              </p>
            </Link>
          </NavbarBrand>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="hidden lg:flex md:flex">
          <ThemeToggler/>
        </div>
        <NavbarItem>
          <Button as={Link} color="primary" href="/login" variant="solid">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signup" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
