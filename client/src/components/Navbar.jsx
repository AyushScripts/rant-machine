import React from "react";
import { Link } from "react-router-dom";
import { IoCreate } from "react-icons/io5";

const Navbar = () => {
    
  return (

      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-b-xl bg-gradient-to-r from-[#051A3B] to-[#0D47A1]">
        <div className="flex flex-col md:gap-1">
          <h1 className="font-montserrat text-base sm:text-2xl lg:text-4xl font-semibold text-[#BBDEFB]">
            RantMachine.
          </h1>
          <p className="font-roboto text-xs sm:text-base lg:text-lg text-[#FFDF32]">
            Express yourself, BOLDLY!
          </p>
        </div>
        <Link to="/rants/create">
          <IoCreate
            title="Create rant"
            className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl"
          />
        </Link>
      </div>

  );
};

export default Navbar;
