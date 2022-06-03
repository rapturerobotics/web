import React from "react";
import ScrollingImageGallery, {
  ScrollingImageGalleryProps,
} from "./ScrollingImageGallery";

interface ImageGalleryBlockProps {
  galleryProps: ScrollingImageGalleryProps;
}

const ImageGalleryBlock: React.FC<ImageGalleryBlockProps> = ({
  children,
  galleryProps,
}) => {
  return (
    <div>
      <ScrollingImageGallery {...galleryProps} />
    </div>
  );
};

export default ImageGalleryBlock;
