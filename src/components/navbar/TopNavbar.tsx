import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import NavbarLink from "./NavbarLink";

export default function TopNavbar() {
  const session = {
    user: {
      role: "",
    },
  };
  const userInfo = null;

  const adminLinks = [
    {
      href: "/admin/moderation",
      label: "Photo Moderation",
    },
  ];

  const memberLinks = [
    {
      href: "/members",
      label: "Matches",
    },
    {
      href: "/lists",
      label: "Lists",
    },
    {
      href: "/Messages",
      label: "Messages",
    },
  ];

  const links = session?.user.role === "ADMIN" ? adminLinks : memberLinks;

  return (
    <>
      <Navbar isBordered maxWidth="full">
        <NavbarBrand as={Link} href="/">
          {/* Dating App Logo */}
          <p className="font-bold text-inherit">Dating Application Name</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {links.map((link) => {
            return (
              <NavbarLink href={link.href} label={link.label} key={link.href} />
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          {userInfo ? (
            "UserMenu Component"
          ) : (
            <>
              <Button as={Link} color="primary" href="/login" variant="flat">
                Login
              </Button>
              <Button as={Link} color="primary" href="/register" variant="flat">
                Register
              </Button>
            </>
          )}
        </NavbarContent>
      </Navbar>
    </>
  );
}
