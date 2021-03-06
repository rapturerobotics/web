import React from "react";
import Image from "next/image";

export interface ScrollingImageGalleryProps {
  imageNames: string[];
}

const IMAGE_BASE =
  "https://ceamlmpfvaqkmhrnccjo.supabase.co/storage/v1/object/public/images";

const ScrollingImageGallery: React.FC<ScrollingImageGalleryProps> = ({
  imageNames,
}) => {
  const imageSources = imageNames.map(
    (imageName) => `${IMAGE_BASE}/${imageName}`
  );

  return (
    <div className="w-full flex overflow-x-auto rounded-xl">
      {imageSources.map((imageSource) => (
        <Image
          src={imageSource}
          key={imageSource}
          className="w-full h-full"
          width={1024}
          height={1024}
        />
      ))}
    </div>
  );
};

export default ScrollingImageGallery;
