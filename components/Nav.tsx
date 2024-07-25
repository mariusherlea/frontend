"use client";
import { usePathname, redirect } from "next/navigation";
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

const Nav = ({ isUserAuthenticated }: { isUserAuthenticated: boolean }) => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex flex-col lg:flex-row gap-6">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                href={link.href}
                className="font-bold text-[13px] uppercase tracking-[3px] hover:text-accent-hover transition-all"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/** redirecting to the homepage if the user is not authenticated and pathname is "/dashboard" */}
      {!isUserAuthenticated && pathname === "/dashboard" && redirect("/")}
    </nav>
  );
};

export default Nav;
