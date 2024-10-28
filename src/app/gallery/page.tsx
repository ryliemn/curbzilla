"use client";

import ContactUs from "@/components/contact-us";
import NextJsLightboxImage from "@/components/next-js-lightbox-image";
import { BEFORE_AND_AFTERS, GENERIC_GALLERY } from "@/utils/images";
import { Divider } from "@nextui-org/react";

import { CircleArrowLeft, CircleArrowRight, Dot } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [curBNAIdx, setCurBNAIdx] = useState(0);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [curLightboxIdx, setLightboxIdx] = useState(-1);

  const next = () => {
    if (curBNAIdx === BEFORE_AND_AFTERS.length - 1) setCurBNAIdx(0);
    else setCurBNAIdx(curBNAIdx + 1);
  };

  const prev = () => {
    if (curBNAIdx === 0) setCurBNAIdx(BEFORE_AND_AFTERS.length - 1);
    else setCurBNAIdx(curBNAIdx - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl my-4">BEFORE & AFTER</h1>
      <Divider />
      <div className="relative">
        <div className="my-4">
          {BEFORE_AND_AFTERS.map((pair, idx) => {
            return idx === curBNAIdx ? (
              <div key={idx} className="space-y-4">
                <Image
                  src={pair.before}
                  alt="an image of curbing"
                  width={900}
                  height={506}
                  className="rounded-lg"
                />
                <Image
                  src={pair.after}
                  alt="an image of curbing"
                  width={900}
                  height={506}
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
                  color={idx === curBNAIdx ? "black" : "lightgray"}
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
      <Divider className="m-4" />
      <div className="h-auto w-full px-8 my-4">
        <RowsPhotoAlbum
          photos={GENERIC_GALLERY}
          render={{ image: renderNextImage }}
          defaultContainerWidth={1200}
          sizes={{
            size: "1168px",
            sizes: [
              { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
            ],
          }}
          onClick={({ index: current }) => setLightboxIdx(current)}
        />
      </div>
      <ContactUs />
      <Lightbox
        index={curLightboxIdx}
        open={curLightboxIdx >= 0}
        close={() => setLightboxIdx(-1)}
        slides={GENERIC_GALLERY}
        render={{ slide: NextJsLightboxImage }}
      />
    </div>
  );
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image fill src={photo.src} alt={alt} title={title} sizes={sizes} />
    </div>
  );
}
