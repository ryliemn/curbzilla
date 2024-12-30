"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Communities",
    href: "/communities",
  },
  {
    name: "Customize",
    href: "/customize",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function CurbNavbar() {
  const pathname = usePathname();

  return (
    <Navbar isBordered>
      <NavbarContent>
        <NavbarMenuToggle className="md:hidden" />
        <NavbarBrand>
          <Image
            src="ce6cb5c8-9ebd-426b-c68f-363779dd4600"
            alt="Logo image"
            width={300}
            height={150}
            className="bg-opacity-100"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden md:flex">
        {menuItems.map((mi) => {
          return (
            <NavbarItem key={mi.name} isActive={pathname === mi.href}>
              <Link color="foreground" href={mi.href}>
                {mi.name}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          href="tel:12538205600"
          variant="flat"
          className="w-30 text-xs text-wrap text-center font-bold flex-col gap-0"
        >
          <div>CALL OR TEXT</div>
          <div>FREE ESTIMATES</div>
        </Button>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((mi) => {
          return (
            <NavbarMenuItem key={mi.name}>
              <Link color="foreground" href={mi.href}>
                {mi.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
