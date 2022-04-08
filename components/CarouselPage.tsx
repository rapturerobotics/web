import React from "react";

export interface CarouselPageProps {
  backgroundImage: string;
  title: string;
  description: string;
  readMoreSource?: string;
}

const CarouselPage: React.FC<CarouselPageProps> = ({
  backgroundImage,
  title,
  description,
  readMoreSource,
}) => {
  return (
    <div
      className="carousel-page w-full h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-opacity-40 bg-black w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-3xl gap-6 text-center">
          <h2 className="text-white text-6xl font-bold">{title}</h2>
          <p className="text-gray-300 text-lg">{description}</p>
          <a
            className="text-white p-2 px-6 border-2 rounded-sm uppercase transition-colors duration-200 hover:bg-white hover:text-black"
            href={readMoreSource}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
