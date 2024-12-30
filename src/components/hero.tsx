import Image from "next/image";

interface IProps {
  text: string;
  subtext?: string;
  imgSrc: string;
  alt: string;
  showLogo?: boolean;
}

export default function Hero({ text, subtext, imgSrc, alt, showLogo }: IProps) {
  return (
    <div className="w-full h-[250px] md:h-[400px] flex justify-center items-center">
      <div className="relative w-full h-full">
        <Image src={imgSrc} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>

      <div className="absolute backdrop-brightness-50 p-2 space-y-4">
        {showLogo && (
          <Image
            src="ce6cb5c8-9ebd-426b-c68f-363779dd4600"
            alt={alt}
            width={700}
            height={300}
            className="mx-auto brightness-0 invert"
          />
        )}
        <h1 className="font-semibold text-zinc-100 text-3xl md:text-5xl">
          {text}
        </h1>
        <h2 className="font-semibold text-zinc-100 text-2xl md:text-3xl text-center">
          {subtext}
        </h2>
      </div>
    </div>
  );
}
