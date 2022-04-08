import React from "react";
import classNames from "classnames";
import CarouselPage, { CarouselPageProps } from "./CarouselPage";

interface CarouselProps {
  pages: Array<CarouselPageProps>;
}

const Carousel: React.FC<CarouselProps> = ({ pages }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const carouselPages = React.useMemo(
    () => pages.map((page, index) => <CarouselPage {...page} key={index} />),
    [pages]
  );

  return (
    <div className="carousel w-full h-full overflow-x-scroll">
      {carouselPages}
    </div>
  );
};

export default Carousel;
