import React from "react";
import NavLink from "./NavLink";

const NavBar: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <NavLink href="/members">Members</NavLink>
      <NavLink href="/sponsors">Sponsors</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </div>
  );
};

export default NavBar;
