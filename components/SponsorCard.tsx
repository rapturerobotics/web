import React from "react";
import Image from "next/image";
import Sponsor from "../types/sponsor";

interface SponsorCardProps {
  sponsor: Sponsor;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor }) => {
  return (
    <a
      className="h-full flex flex-col justify-center bg-white rounded p-4 shadow"
      href={sponsor.website_url}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={sponsor.logo_image}
        width={1024}
        height={1024}
        className="w-full text-slate-900"
        alt={`Logo of ${sponsor.name}`}
      />
    </a>
  );
};

export default SponsorCard;
