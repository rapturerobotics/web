import Link from "next/link";
import React from "react";
import classNames from "classnames";

interface NavLinkProps {
  href: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
    <Link href={href} passHref={true}>
      <a className={classNames("font-semibold hover:text-blue-500", className)}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
