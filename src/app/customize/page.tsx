import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

const colors = [
  { name: "Adobe", hexCode: "685c47" },
  { name: "Autumn Gold", hexCode: "af8050" },
  { name: "Baja Red", hexCode: "976c51" },
  { name: "Bayou", hexCode: "847b63" },
  { name: "Brick Red", hexCode: "8c5239" },
  { name: "Canyon", hexCode: "8c735a" },
  { name: "Caramel", hexCode: "9f916a" },
  { name: "Cliffside Brown", hexCode: "a98f6a" },
  { name: "Cobblestone", hexCode: "5a5a52" },
  { name: "Cocoa", hexCode: "7a6953" },
  { name: "Dark Gray (Carbon)", hexCode: "424242" },
  { name: "Dark Gray (Iron Oxide)", hexCode: "424242" },
  { name: "Dune", hexCode: "8d806b" },
  { name: "Eastern Tan", hexCode: "92816d" },
  { name: "Euroblue (Cobalt)", hexCode: "729da1" },
  { name: "Flagstone Brown", hexCode: "8c6b4a" },
  { name: "Granite Red", hexCode: "866762" },
  { name: "Graphite (Carbon)", hexCode: "292929" },
  { name: "Graphite (Iron Oxide)", hexCode: "292929" },
  { name: "Green Slate", hexCode: "6a6f62" },
  { name: "Harvest Gold", hexCode: "a58452" },
  { name: "Jet Black (Carbon)", hexCode: "293d3a" },
  { name: "Jet Black (Iron Oxide)", hexCode: "354b4b" },
  { name: "Kailua", hexCode: "635242" },
  { name: "Lakeside Brown", hexCode: "af8050" },
  { name: "Light Gray (Carbon)", hexCode: "52524a" },
  { name: "Light Gray (Iron Oxide)", hexCode: "52524a" },
  { name: "Mesa Buff", hexCode: "9c844a" },
  { name: "Mesquite", hexCode: "847b6b" },
  { name: "Miami Buff", hexCode: "9e9974" },
  { name: "Mocha", hexCode: "84735a" },
  { name: "Omaha Tan", hexCode: "9c8463" },
  { name: "Outback", hexCode: "948c7b" },
  { name: "Padre Brown", hexCode: "5b5542" },
  { name: "Palomino", hexCode: "9c844a" },
  { name: "Pebble", hexCode: "9c8c73" },
  { name: "Pewter", hexCode: "6b6b63" },
  { name: "Plum", hexCode: "8e7671" },
  { name: "Pueblo Brown", hexCode: "6c6858" },
  { name: "Roadside Brown", hexCode: "8c866f" },
  { name: "Rustic Brown", hexCode: "7b6352" },
  { name: "Salmon", hexCode: "946b4a" },
  { name: "San Diego Buff", hexCode: "a58c63" },
  { name: "Sandstone", hexCode: "9c8c63" },
  { name: "Sangria", hexCode: "9c735a" },
  { name: "Santa Fe", hexCode: "947363" },
  { name: "Sequoia Sand", hexCode: "8d7b5f" },
  { name: "Sierra", hexCode: "7b735a" },
  { name: "Silversmoke (Carbon)", hexCode: "5e6159" },
  { name: "Silversmoke (Iron Oxide)", hexCode: "5e6159" },
  { name: "Southern Blush", hexCode: "917657" },
  { name: "Spanish Gold", hexCode: "946b42" },
  { name: "Sunset Rose", hexCode: "9c735a" },
  { name: "Taupe", hexCode: "7b6b5a" },
  { name: "Terra Cotta", hexCode: "9c6339" },
  { name: "Tile Red", hexCode: "946352" },
  { name: "Western Gold", hexCode: "a98f6a" },
  { name: "Yosemite Brown", hexCode: "8c7352" },
];

export default function Customize() {
  return (
    <div className="flex-col">
      <Hero text="CUSTOMIZE" subtext="WITH STYLES, STAMPS, AND COLORS" />
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
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
