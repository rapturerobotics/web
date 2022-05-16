import React from "react";

const IntroductionBlock: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:p-12 items-center gap-8 pb-8">
      <div>
        <h1 className="text-7xl font-semibold mb-8 font-work">
          Rapture Robotics
        </h1>

        <p className="text-lg font-akshar">
          We are an Autonomous Surface and Underwater Systems team of future
          engineers. Stay tune for the updates!
        </p>
      </div>

      <img
        src="https://ceamlmpfvaqkmhrnccjo.supabase.co/storage/v1/object/public/images/rapture_logo_transparent_1024x1024.png"
        width={1024}
        height={1024}
        alt="Rapture logo with pulse animation"
        className="animate-pulse p-2"
      />
    </div>
  );
};

export default IntroductionBlock;
