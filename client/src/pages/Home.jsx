import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { MdCreate } from "react-icons/md";

import { LuUser2 } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  const [rants, setRants] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/rants")
      .then((response) => {
        setRants(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Navbar></Navbar>

      {/* Body now */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 sm:mx-6 lg:mx-10 my-8 sm:my-10 lg:my-14">
        {rants.map((item) => (
          //each card
          <div
            key={item._id}
            className="bg-[#B3C7D6] relative gap-3 p-4 sm:p-6 lg:p-8 rounded-[14px]"
          >
            {/* date para */}
            <p className="font-sans text-[#5E5E5E] text-base sm:text-lg">
              {format(new Date(item.createdAt), "do MMMM yy")}
            </p>
            {/* title and username div */}
            <div className="flex flex-col gap-3 pt-2">
              <h2 className="text-[#424242] font-montserrat font-semibold text-lg sm:text-2xl">
                {item.title}
              </h2>
              <div className="flex gap-3 items-center">
                <LuUser2 className="text-[#999999] text-base sm:text-xl" />
                <p className="text-[#999999] font-sans text-base sm:text-xl">
                  {item.name}
                </p>
              </div>
            </div>
            {/* card icons div */}
            <div className=" flex justify-between pt-3 sm:pt-5">
              <Link to={`/rants/details/${item._id}`}>
                <IoIosEye
                  title="View Rant"
                  className="text-[#424242] hover:opacity-80 w-8 h-8 sm:w-10 sm:h-10"
                />
              </Link>
              <Link to={`/rants/edit/${item._id}`}>
                <MdCreate
                  title="Edit Rant"
                  className="text-[#424242] hover:opacity-80 w-8 h-8 sm:w-10 sm:h-10"
                />
              </Link>
              <Link to={`/rants/delete/${item._id}`}>
                <MdDelete
                  title="Delete Rant"
                  className="text-[#424242] hover:opacity-80 w-8 h-8 sm:w-10 sm:h-10"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
