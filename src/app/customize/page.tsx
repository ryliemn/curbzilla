import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import { GENERIC_GALLERY, HEROES } from "@/utils/images";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

const colors = [
  { name: "Brick Red", hexCode: "8c5239" },
  { name: "Cocoa", hexCode: "7a6953" },
  { name: "Flagstone Brown", hexCode: "8c6b4a" },
  { name: "Mesa Buff", hexCode: "9c844a" },
  { name: "Mocha", hexCode: "84735a" },
  { name: "Pewter", hexCode: "6b6b63" },
  { name: "Rustic Brown", hexCode: "7b6352" },
  { name: "Silversmoke", hexCode: "5e6159" }, //Carbon
  { name: "Taupe", hexCode: "7b6b5a" },
  { name: "Yosemite Brown", hexCode: "8c7352" },
];

export default function Customize() {
  return (
    <div className="flex-col">
      <Hero
        text="CUSTOMIZE"
        subtext="WITH STYLES, STAMPS, AND COLORS"
        imgSrc={HEROES[2].src}
        alt={HEROES[2].alt}
      />
      <h1 className="text-center my-8 text-3xl font-bold px-6 uppercase">
        We offer 3 distinct styles of curbing: Mower, Slant, and Curb
      </h1>
      <div className="w-full h-[160px] relative from-gray-50 to-gray-50 via-slate-400 bg-gradient-to-b">
        <Image
          src="bbf53ba3-a201-4999-a821-be3175a28300"
          alt="Logo image"
          fill
          className="w-full h-full object-contain p-4"
        />
      </div>
      <Divider className="my-8" />
      <div>
        <h1 className="text-3xl font-bold text-center px-6 uppercase my-4">
          Select from a wide variety of colors
        </h1>
        <div className="text-center text-lg mx-8 md:mx-24">
          Colors can be a bit unpredictable, so we can&apos;t promise an exact
          match. We like to say we&apos;re &quot;in the neighborhood&quot; of
          the color you want. Plus, keep in mind that colors can fade as time
          goes on. That&apos;s why a natural finish is usually the way to go.
        </div>
        <div className="flex flex-row flex-wrap gap-2 text-white p-4 justify-center">
          {colors.map((c) => {
            return (
              <div
                key={c.hexCode}
                className="w-[100px] h-[90px] md:w-[150px] md:h-[150px] p-2 text-lg"
                style={{ backgroundColor: `#${c.hexCode}` }}
              >
                {c.name}
              </div>
            );
          })}
        </div>
      </div>
      <Divider className="my-8" />
      <div className="my-4">
        <h1 className="text-3xl font-bold text-center px-6 uppercase my-4">
          Stamped patterns and styles to give your yard a unique touch
        </h1>
        <div className="text-center text-lg mx-8 md:mx-24 my-4">
          Stamping is a great way to make your curbs stand out, and usually
          involves color too. It works best when you&apos;re trying to mimic a
          pattern from the house; otherwise, it can end up being a bit
          overwhelming.
        </div>
        <div className="flex flex-row gap-2 justify-center flex-wrap">
          <Image
            src="348e7469-9994-4f90-514d-4276b0166500"
            alt="stamped curb"
            width={400}
            height={500}
            className="rounded-lg"
          />
          <Image
            src="4c1a471b-c5f3-4a3c-2a3d-745b01f00800"
            alt="stamped curb"
            width={185}
            height={500}
            className="rounded-lg"
          />
          <Image
            src="f777991b-c643-4cae-b87b-84455e7d6c00"
            alt="stamped curb"
            width={180}
            height={500}
            className="rounded-lg"
          />
          <Image
            src={GENERIC_GALLERY[12].src}
            alt={GENERIC_GALLERY[12].alt}
            width={GENERIC_GALLERY[12].width / 3}
            height={GENERIC_GALLERY[12].height / 3}
            className="rounded-lg"
          />
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
