import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import ImgWithText from "@/components/img-with-text";
import { HEROES } from "@/utils/images";

export default function Home() {
  const header = "CURBING SOUTH PUGET SOUND";
  const subtext = "SINCE 1993";

  return (
    <div>
      <Hero
        text={header}
        subtext={subtext}
        imgSrc={HEROES[1].src}
        alt={HEROES[1].alt}
      />
      <div className="flex flex-col my-8 items-center space-y-4">
        <h1 className="text-2xl md:text-6xl font-bold text-zinc-900 text-center">
          CONCRETE LANDSCAPE CURBING
        </h1>
        <div className="text-2xl text-zinc-900 text-center">
          ...serving Pierce County, South King County, and North Thurston County
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center gap-x-24 gap-y-12 py-4">
        <ImgWithText
          imageUrl="0500d0da-b144-4b09-aedf-760810149d00"
          header="Our Approach"
          body="Landscape curbing is an art, all about level and flow. Our experienced team works like a fine-tuned orchestra to create curbing levels above anyone else in the area."
        />
        <ImgWithText
          imageUrl="e5fa2cbd-8944-4a88-c324-5f4a0bbdc700"
          header="Our Services"
          body="We offer continuous, seam-free concrete landscape bordering. Choose from many different looks and styles of concrete curbing to match your home perfectly."
        />
        <ImgWithText
          imageUrl="5e63e3fc-919d-4152-a92d-fd8daf185d00"
          header="Benefits of Our Curbing"
          body="Our landscape curbing eliminates the need for edging and trimming. Save time and money while showcasing your beautiful home with our durable, low-maintenance solution."
        />
        <ImgWithText
          imageUrl="94993eab-247c-4ce8-bb9a-102ff5c93d00"
          header="Our Expertise"
          body="Curbzilla brings over 65 years of landscape curbing experience. We're locally owned and operated, with the owner present on every job site since 1993."
        />
        <ImgWithText
          imageUrl="e825bab4-46d5-45ed-a361-ae6f0421f700"
          header="Why Choose Us"
          body="We've served the greater Tacoma, Federal Way, and Lakewood areas for over 20 years. Our commitment is to provide the best product possible and ensure customer satisfaction."
        />
        <ImgWithText
          imageUrl="fd45e0bd-64ff-44fe-93d8-a2180a0c0200"
          header="Service Areas"
          body="We serve Lakewood, Tacoma, Gig Harbor, Puyallup, and more. Our coverage includes most of Pierce County, South King County, and North Thurston County."
        />
      </div>
      <ContactUs />
    </div>
  );
}
