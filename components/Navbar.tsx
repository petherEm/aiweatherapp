import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="p-4 bg-black flex items-center justify-center">
        <div className="text-white text-2xl font-light">
          Developed by{" "}
          <Link
            className="font-bold hover:text-rose-500"
            href="https://www.piotrmaciejewski.com"
          >
            Piotr
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
