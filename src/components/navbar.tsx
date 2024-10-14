import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function CurbNavbar() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Image
          src="297ac1cb-5276-4e91-35b4-7bfb5741b400"
          alt="Logo image"
          width={200}
          height={200}
        />
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">Gallery</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/faq">
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/communities">
            Communities
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">Customize</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">Contact</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">About</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          href="tel:12538205600"
          variant="flat"
          className="w-44 text-wrap text-center font-bold"
        >
          TEXT OR CALL FOR A FREE ESTIMATE
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
