import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const Header: React.FC = () => {
  return (
    <header className="flex justify-center p-4 px-8 border-b border-b-slate-800">
      <nav className="w-full max-w-5xl flex justify-between">
        <Link href="/" passHref={true}>
          <a className="flex items-center gap-2">
            <img
              src="https://ceamlmpfvaqkmhrnccjo.supabase.co/storage/v1/object/public/images/rapture_logo_transparent_1024x1024.png"
              className="w-12 mb-1"
            />

            <span className="font-work text-2xl text-center hidden lg:block">
              Rapture Robotics
            </span>
          </a>
        </Link>

        <div className="flex items-center gap-4">
          <NavLink href="/members">Members</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
