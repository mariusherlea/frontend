"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Restaurants",
    href: "/about",
  },
  {
    name: "Pool",
    href: "/contact",
  },
  {
    name: "Best deals",
    href: "/dashboard",
  },
  {
    name: "Contact",
    href: "/dashboard",
  },
];
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-2xl text-primary flex items-center">
        <FaBars />
      </SheetTrigger>
      <SheetContent side="right" className="flex justify-center items-center">
        <nav className="flex flex-col gap-8 text-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.href}
                key={index}
                className="text-2xl font-primary text-primary hover:text-accent transition-all"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
