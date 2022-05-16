import React from "react";
import Link from "next/link";
import NavBar from "./NavBar";
import Container from "./Container";

const Header: React.FC = () => {
  return (
    <Container
      row={true}
      className="border-b-2 border-b-slate-800 sticky top-0 bg-inherit"
    >
      <Link href="/" passHref={true}>
        <a className="flex items-center gap-2" aria-label="Rapture Logo">
          <img
            src="https://ceamlmpfvaqkmhrnccjo.supabase.co/storage/v1/object/public/images/rapture_logo_transparent_1024x1024.png"
            alt="Rapture Logo"
            className="w-12 mb-1"
          />

          <span className="font-work text-2xl text-center hidden md:block">
            Rapture Robotics
          </span>
        </a>
      </Link>

      <NavBar />
    </Container>
  );
};

export default Header;
