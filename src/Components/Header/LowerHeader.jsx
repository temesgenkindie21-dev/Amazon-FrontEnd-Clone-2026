import React from "react";
import { Link } from "react-router-dom";

function LowerHeader() {
  return (
    <div className=" bg-[#232f3e] text-white">
      <ul className="flex flex-col md:flex-row gap-1.5 ml-2.5 p-2">
        <li className="hover:border-2 hover:border-white hover:rounded-[3px] duration-200">
          <Link to="" className="flex items-center">
            <i className="ri-menu-line "></i>
            <p>All</p>
          </Link>
        </li>
        <li className="hover:border-2 hover:border-white hover:rounded-[3px] hidden md:block duration-200">
          <Link to="">Today's Deals</Link>
        </li>
        <li className="hover:border-2 hover:border-white hover:rounded-[3px] hidden md:block duration-200">
          <Link to="">Customer</Link>
        </li>
        <li className="hover:border-2 hover:border-white hover:rounded-[3px] hidden md:block duration-200">
          <Link to="">Service</Link>
        </li>
        <li className="hover:border-2 hover:border-white hover:rounded-[3px] hidden md:block duration-200">
          <Link to="">Registry</Link>
        </li>
        <li className="hover:border-2 hover:border-white hover:rounded-[3px] hidden md:block duration-200">
          <Link to="">Gift Cards</Link>
        </li>
        <li className="hover:border-2 hover:border-white hover:rounded-[3px] hidden md:block duration-200">
          <Link to="">Sell</Link>
        </li>
      </ul>
    </div>
  );
}

export default LowerHeader;
