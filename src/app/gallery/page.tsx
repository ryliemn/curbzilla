import ContactUs from "@/components/contact-us";
import {
  Photo,
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import Image from "next/image";
import "react-photo-album/rows.css";

const photos = [
  {
    asset: "94993eab-247c-4ce8-bb9a-102ff5c93d00",
    width: 1080,
    height: 780,
    alt: "Hiking boots",
  },
];

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
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="flex-col">
      {/* <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
      /> */}
      <ContactUs />
    </div>
  );
}
