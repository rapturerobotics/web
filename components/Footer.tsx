import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/rapture_robotics",
      alt: "Rapture Instagram Account",
      icon: FaInstagram,
    },
    {
      href: "https://www.linkedin.com/company/rapturerovauv",
      alt: "Rapture LinkedIn Page",
      icon: FaLinkedin,
    },
    {
      href: "https://www.youtube.com/channel/UCE66YNffWluSd1NCPYI_Seg",
      alt: "Rapture YouTube Channel",
      icon: FaYoutube,
    },
    {
      href: "https://github.com/rapturerobotics",
      alt: "Rapture GitHub Organization",
      icon: FaGithub,
    },
    {
      href: "https://www.facebook.com/Rapture-110481111594245/",
      alt: "Rapture Facebook Page",
      icon: FaFacebook,
    },
    {
      href: "https://twitter.com/RaptureRobotics",
      alt: "Rapture Twitter Account",
      icon: FaTwitter,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center pt-16 p-12 gap-2">
      <div className="flex gap-2 mb-1">
        {socialLinks.map((link, index) => (
          <Link href={link.href} passHref={true} key={index}>
            <a target="_blank">{<link.icon size={32} />}</a>
          </Link>
        ))}
      </div>

      <div className="text-gray-400">Rapture Robotics • © 2022</div>

      <div className="text-gray-400">
        Made with{" "}
        <span className="px-1">
          <FaHeart className="inline" />
        </span>{" "}
        by{" "}
        <span className="text-gray-300">
          <Link href="https://www.linkedin.com/in/bayram-kazik" passHref={true}>
            <a>Bayram</a>
          </Link>
        </span>{" "}
        from Rapture
      </div>
    </div>
  );
};

export default Footer;
