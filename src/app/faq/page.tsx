import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import ImgWithText from "@/components/img-with-text";
import { Code, Divider, Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function Communities() {
  const header = "FREQUENTLY ASKED QUESTIONS";
  const qas = [
    {
      question:
        "Is your product similar to the concrete edging I see for sale in the local hardware store?",
      answer:
        "No! We are NOT BLOCKS. We are a continuously poured landscape border that is installed wet. This is what makes us the best landscape edging around. We are one continuous piece, like a sidewalk.",
    },
    {
      question:
        "Will having a concrete landscape border installed destroy our existing landscaping?",
      answer:
        "No! The method we use to install concrete landscape curbing will minimize the damage to existing landscaping.",
    },
    {
      question:
        "Do you help with figuring out what we want our landscape border to look like? Or do we have to come up with the design by ourselves?",
      answer:
        "We love to be part of the creative design process on all of our installations. We are also highly experienced in helping your landscape border achieve the accent and style you picture in your mind.",
    },
    {
      question:
        "Why do you say your concrete curbing is continuous when I see cut lines all over the place?",
      answer:
        "The lines that you see cut into the curbing are stress relieving cuts to control where the curbing cracks. Without these, Mother Nature would decide where to put the cracks. All concrete requires stress cuts.",
    },
  ];

  const rules = [
    "The first 24 hours are the most important time to keep everyone away from the curbing; neighbors, kids, pets, and even you. During this time, curiosity can damage the curb. Make sure sprinklers are off and no water is sprayed directly onto the curbing. Don't even breathe on it!",
    "48 hours in, the curbing is stronger, but can still be damaged. Sprinklers are OK.",
    "After 5 days, you may now place a lawnmower wheel on the curb for mowing.",
    "After 2 weeks, you may now run a wheelbarrow over the curbing.",
  ];

  return (
    <div className="flex-col">
      <Hero text={header} />
      <div className="flex-col text-center px-24">
        {qas.map((qa, idx) => {
          return (
            <div key={idx} className="">
              <div className="text-2xl my-4">
                {idx + 1}. {qa.question}
              </div>
              <div className="my-4 text-lg text-zinc-700">{qa.answer}</div>
              <Divider />
            </div>
          );
        })}
        <div className="text-5xl my-8">THE INSTALLATION PROCESS</div>
        <div className="flex gap-x-24 flex-wrap justify-center gap-y-8">
          <ImgWithText
            imageUrl="0500d0da-b144-4b09-aedf-760810149d00"
            body="1. A shallow trench is prepared for the curbing"
          />
          <ImgWithText
            imageUrl="e5fa2cbd-8944-4a88-c324-5f4a0bbdc700"
            body="2. After mixing to proper consistency, the extrusion machine places concrete in the trench"
          />
          <ImgWithText
            imageUrl="5e63e3fc-919d-4152-a92d-fd8daf185d00"
            body="3. Finishes and stress relieving cuts are applied"
          />
          <ImgWithText
            imageUrl="94993eab-247c-4ce8-bb9a-102ff5c93d00"
            body="4. Clean-up, leaving the curbing as the only sign of our work"
          />
        </div>
        <Divider className="my-8" />
        <div className="my-4">
          <div className="text-5xl">CURB CARE</div>
          <div className="text-lg text-zinc-700 my-2">
            Unless instructed otherwise, follow these rules
          </div>
          <div className="flex text-left mx-28">
            <ol className="list-decimal">
              {rules.map((rule, idx) => {
                return (
                  <li key={idx} className="px-4 py-2">
                    {rule}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
