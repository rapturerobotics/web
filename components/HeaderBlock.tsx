import React from "react";

export interface HeaderBlockProps {
  backgroundImage: string;
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({
  backgroundImage,
  children,
}) => {
  return (
    <div
      className="carousel-page w-full h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-opacity-40 bg-black w-full h-full flex flex-col items-center justify-center">
        <header className="flex flex-col items-center justify-center max-w-3xl gap-6 text-center">
          {children}
        </header>
      </div>
    </div>
  );
};

export default HeaderBlock;
