"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-10" />
      <p className="text-black dark:text-white m-0 p-0">
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <Link href="#about">
        <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        </Link>
        <Link href="#internship">
        <MenuItem setActive={setActive} active={active} item="Internship"></MenuItem>
        </Link>
        <Link href="#works">
        <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
        </Link>
        <Link href="/contacts">
        <MenuItem setActive={setActive} active={active} item="Contact Me"></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
