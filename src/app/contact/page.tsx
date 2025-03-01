import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import { HEROES } from "@/utils/images";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex-col">
      <Hero text="CONTACT US" imgSrc={HEROES[5].src} alt={HEROES[5].alt} />
      <div className="my-8 space-y-8 px-4">
        <div className="justify-center items-center space-x-4 flex md:flex-row flex-col">
          <span className="font-semibold text-2xl">TEXT (or call)</span>
          <span className="md:text-5xl text-4xl font-semibold underline">
            <Link href="sms:12538205600">(253)820 5600</Link>
          </span>
        </div>
        <div className="justify-center items-center space-x-4 flex md:flex-row flex-col">
          <span className="font-semibold text-2xl">EMAIL</span>
          <span className="md:text-5xl text-4xl font-semibold underline">
            <Link href="mailto:curbzilla@gmail.com">curbzilla@gmail.com</Link>
          </span>
        </div>

        <div className="justify-center items-center space-x-4 flex md:flex-row flex-col">
          <span className="font-semibold text-2xl md:text-3xl">
            GENERAL CONTRACTOR WA ID #
          </span>
          <span className="md:text-5xl text-4xl font-semibold">
            CURBZ**873CK
          </span>
        </div>
      </div>

      <Divider />
      <h1 className="text-xl text-center px-4 my-4">
        You can also contact us via the form below.
      </h1>

      <ContactUs />
    </div>
  );
}
