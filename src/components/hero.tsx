import Image from "next/image";

interface IProps {
  text: string;
  subtext?: string;
}

export default function Hero({ text, subtext }: IProps) {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <div className="relative w-full h-full">
        <Image
          src="a1ebae64-2fc4-4a7b-5471-18f8786f6900"
          alt="Hero image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute backdrop-brightness-50 p-2 space-y-4">
        <h1 className="font-semibold text-zinc-100 text-5xl">{text}</h1>
        <h2 className="font-light text-zinc-100 text-3xl">{subtext}</h2>
      </div>
    </div>
  );
}
