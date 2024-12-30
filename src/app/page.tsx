import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import ImgWithText from "@/components/img-with-text";
import { GENERIC_GALLERY, HEROES } from "@/utils/images";

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
        showLogo={true}
      />
      <div className="flex flex-col my-8 items-center space-y-4">
        <h1 className="text-2xl md:text-6xl font-bold text-zinc-900 text-center">
          CONCRETE LANDSCAPE CURBING
        </h1>
        <div className="text-2xl text-zinc-900 text-center px-4">
          ...serving Pierce County, South King County, and North Thurston County
        </div>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-center gap-x-24 gap-y-12 py-4">
        <ImgWithText
          imageUrl="0500d0da-b144-4b09-aedf-760810149d00"
          header="Our Approach"
          body="Landscape curbing is an art, all about level and flow. If you don't have both, you will not please the mind's eye."
        />
        <ImgWithText
          imageUrl="e5fa2cbd-8944-4a88-c324-5f4a0bbdc700"
          header="Our Services"
          body="JUST CURBS! We do the prep work, which is the most important part of the job. Then, we install the curbing. When you do one thing, you better do it really well! We don't do concrete flat work, we don't do landscaping, and we don't do parking lots; JUST LANDSCAPE CURBING."
        />
        <ImgWithText
          imageUrl={GENERIC_GALLERY[13].src}
          alt={GENERIC_GALLERY[13].alt}
          header="Benefits of Our Curbing"
          body="Landscape curbing eliminates 80% of your edging chores, saving time and money while showcasing your beautiful home. It's a durable, permanent, continuous, low maintenance solution."
        />
        <ImgWithText
          imageUrl={GENERIC_GALLERY[14].src}
          alt={GENERIC_GALLERY[14].alt}
          header="Our Expertise"
          body="With over 65 years of experience on every job site, not only have we learned how to curb, but more importantly, what not to do."
          body2="I've done all the wrong, and I'm not doing that again!"
        />
        <ImgWithText
          imageUrl="e825bab4-46d5-45ed-a361-ae6f0421f700"
          header="Why Choose Us"
          body="We have been serving the South Puget Sound from the same location since 1993. No one else in this area even comes close to our expertise or craftsmanship. Like a finely tuned orchestra, each plays his role to create curbing levels above anyone else. There simply is no comparison."
        />
        <ImgWithText
          imageUrl={"fd45e0bd-64ff-44fe-93d8-a2180a0c0200"}
          header="Service Areas"
          body="We serve Lakewood, Tacoma, Gig Harbor, Puyallup, and more. Our coverage includes most of Pierce County, South King County, and North Thurston County."
        />
      </div>
      <ContactUs />
    </div>
  );
}
