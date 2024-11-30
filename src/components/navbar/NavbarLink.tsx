"use client"

import { NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavbarLinkProps = {
  href: string;
  label: string;
};

export default function NavbarLink({ href, label }: NavbarLinkProps) {
  const pathname = usePathname();

  return (
    <NavbarItem isActive={pathname === href} as={Link} href={href}>
      <span className="">{label}</span>
    </NavbarItem>
  );
}
