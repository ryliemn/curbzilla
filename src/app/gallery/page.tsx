"use client";
import ContactUs from "@/components/contact-us";
import { BEFORE_AND_AFTERS } from "@/utils/images";
import { Divider } from "@nextui-org/react";
import "keen-slider/keen-slider.min.css";
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from "keen-slider/react";
import {
  ArrowLeft,
  CircleArrowLeft,
  CircleArrowRight,
  Dot,
} from "lucide-react";
import Image from "next/image";
import { MutableRefObject, useCallback, useEffect, useState } from "react";

export default function Gallery() {
  const [curIdx, setCurIdx] = useState(0);

  const next = () => {
    if (curIdx === BEFORE_AND_AFTERS.length - 1) setCurIdx(0);
    else setCurIdx(curIdx + 1);
  };

  const prev = () => {
    if (curIdx === 0) setCurIdx(BEFORE_AND_AFTERS.length - 1);
    else setCurIdx(curIdx - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl my-4">BEFORE & AFTER</h1>
      <Divider />
      <div className="relative">
        <div className="my-4">
          {BEFORE_AND_AFTERS.map((pair, idx) => {
            return idx === curIdx ? (
              <div key={idx} className="space-y-4">
                <Image
                  src={pair.before}
                  alt="an image of curbing"
                  width={900}
                  height={500}
                  className="rounded-lg"
                />
                <Image
                  src={pair.after}
                  alt="an image of curbing"
                  width={900}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            ) : null;
          })}
        </div>
        <div className="flex w-full absolute top-1/2 -translate-y-1/2">
          <div
            className="mr-auto bg-gray-500 rounded-full relative md:right-8"
            onClick={prev}
          >
            <CircleArrowLeft
              className="w-16 h-16 cursor-pointer"
              color="white"
            />
          </div>
          <div className="mx-auto self-center flex">
            {BEFORE_AND_AFTERS.map((pair, idx) => {
              return (
                <Dot
                  key={idx}
                  color={idx === curIdx ? "black" : "lightgray"}
                  className="h-5 w-5"
                />
              );
            })}
          </div>
          <div
            className="ml-auto bg-gray-500 rounded-full relative md:left-8"
            onClick={next}
          >
            <CircleArrowRight
              className="w-16 h-16 cursor-pointer"
              color="white"
            />
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
