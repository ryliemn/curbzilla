import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import { HEROES, OVERHEAD } from "@/utils/images";
import { Divider } from "@nextui-org/react";
import Image from "next/image";

export default function Communities() {
  const cities = Array.from(
    new Set([
      "Auburn",
      "Bonney Lake",
      "Federal Way",
      "Fircrest",
      "Gig Harbor",
      "Kent",
      "Lacey",
      "Lakewood",
      "Puyallup",
      "Tacoma",
      "Sumner",
      "University Place",
      "Edgewood",
      "Lakeland",
      "Milton",
      "North Tacoma",
      "Parkland",
      "Algona",
      "Covington",
      "Des Moines",
      "Maple Valley",
      "Pacific",
      "Port Orchard",
      "South Hill",
    ])
  ).sort();

  return (
    <div className="flex-col">
      <Hero text="WHERE WE CURB" imgSrc={HEROES[3].src} alt={HEROES[3].alt} />

      <h1 className="text-5xl font-bold text-zinc-900 text-center my-8">
        COMMUNITIES WE HAVE CURBED
      </h1>
      <div className="flex-row justify-center items-center text-xl my-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 grid-flow-rows text-center gap-4">
          {cities.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <Divider className="my-8" />
      <h1 className="text-5xl font-bold text-zinc-900 text-center">
        TESTIMONIALS
      </h1>
      <h2 className="text-center text-lg text-zinc-700 font-semibold my-2">
        Don&apos;t just take it from us...
      </h2>
      <div className="flex flex-col my-4">
        <div className="flex-col md:flex-row flex md:p-2 gap-y-4">
          <div className="md:flex-1 relative min-h-[300px]">
            <Image
              src="53d05202-23ba-4496-31ff-743101ffd200"
              fill
              className="md:rounded-lg"
              alt="Hero image"
            />
          </div>
          <div className="md:flex-2 px-8 text-xl">
            <span className="underline font-bold text-center">Wow!</span>
            <div className="my-4 space-y-4">
              <div>
                No other word in the English language can explain the way
                CurbZilla transformed our home&apos;s lawn and garden areas into
                aesthetically pleasing, park-like showcases. The new curbs have
                only been sculpted in place for a few hours and four neighbors
                have already stopped by to look them over, nod and smile, and
                heartily approve! What the CurbZilla creators accomplished in a
                single afternoon has become the talk of the neighborhood!
              </div>
              <div>
                The new curbs were recommended to us based on our needs. We
                chose a curb that will support the wheels of a riding lawnmower.
                What this means is that no one will have to follow up with a
                weed whacker to cut any errant left over grass after mowing
                almost an acre of lawn. There will be no grass creeping into the
                garden. In short, the work of keeping our lawn and garden
                looking amazing has just become a lot easier! Best of all, there
                will be more time to simply enjoy being outdoors!
              </div>
              <div>
                We&apos;re sold on CurbZilla and on the men who made it all
                happen today. They sealed the curbs at day&apos;s end and
                followed up by giving careful instructions about how to protect
                them for the first few hours, days and weeks until they&apos;re
                fully set and tough as can be.
              </div>
              <div>
                We highly recommend CurbZilla to any homeowner, builder, or
                homeowner&apos;s association that wants to make a statement
                about quality workmanship and natural beauty without saying a
                word.
              </div>
            </div>
            <div className="font-bold text-right">
              Jackie and Kris Smith, Tacoma WA
            </div>
          </div>
        </div>
        <div className="flex-col-reverse md:flex-row flex md:p-2 gap-y-4 my-4">
          <div className="md:flex-2 px-8 text-xl">
            <div className="my-4 space-y-4">
              <div>
                What a beautiful and functional improvement this curbing made to
                our yard! We waiting 5 years to do this and now wonder why we
                waited so long. [The Curbzilla team] are the best of people, who
                care about doing good work and work hard at doing it. We enjoyed
                the short time they were working at our home and continue to
                enjoy the work they did here every day. We would certainly use
                CurbZilla again or recommend them to others. Thanks guys!
              </div>
            </div>
            <div className="font-bold text-right">
              Bob and Ardell, Graham WA
            </div>
          </div>
          <div className="md:flex-1 relative min-h-[300px]">
            <Image
              src="24cc6470-6aa6-4858-154d-41a4f64b4600"
              alt="Hero image"
              fill
              className="md:rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <Image
          src={OVERHEAD.src}
          alt={OVERHEAD.alt}
          width={400}
          height={300}
          className="ml-auto mr-auto rounded-lg"
        />
        <div className="ml-auto mr-auto text-center text-xl italic">
          A satellite shot of one of our most detailed jobs!
        </div>
      </div>

      <ContactUs />
    </div>
  );
}
