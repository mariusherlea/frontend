import Link from "next/link";
import Image from "next/image";

import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "./ui/button";
import Dropdown from "./Dropdown";

const socials = [
  {
    name: "youtube",
    href: "https://www.youtube.com",
    icon: <FaYoutube />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    name: "twitter",
    href: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    name: "facebook",
    href: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
];

const Header = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  console.log(isUserAuthenticated);
  return (
    <header className="py-6 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/**logo & socials icons*/}
          <div className="flex items-center gap-5 justify-center xl:w-max">
            {/**logo */}
            <Link href="google.com">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={160}
                height={160}
              />
            </Link>
            {/**separator */}
            <div className="w-[1px] h-[40px] bg-gray-300"></div>
            {/**socials icons */}
            <div className="flex gap-2">
              {socials.map((item, index) => {
                return (
                  <Link
                    href={item.href}
                    key={index}
                    className="bg-accent text-white hover:bg-accent-hover text-sm w-[28px] h-[28px] rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
          {/**sign in & sign up btns */}
          <div>
            <div>
              {isUserAuthenticated ? (
                <Dropdown />
              ) : (
                <div className="flex gap-2">
                  <RegisterLink>
                    <Button>Register</Button>
                  </RegisterLink>
                  <LoginLink>
                    <Button>Sign in</Button>
                  </LoginLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
