import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            height={18}
            width={118}
            alt="Car Hub Logo"
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
