import React from "react";
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
    >
      <img
        src={sponsor.logo_image}
        className="w-full text-slate-900"
        alt={`Logo of ${sponsor.name}`}
      />
    </a>
  );
};

export default SponsorCard;
