"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./logo";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

const MENU_LIST = [
  { text: "Users", href: "/" },
  { text: "Todos", href: "/todos" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const pathname = usePathname();

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu) => (
            <div
              onClick={() => {
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={pathname === menu.href} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
