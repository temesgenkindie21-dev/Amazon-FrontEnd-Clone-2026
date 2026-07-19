import React, { useContext } from "react";
import Amazon_logo from "../../assets/amazon_logo.png";
import UnitedStatesFlag from "../../assets/united_states_flag.png";
import { Link } from "react-router-dom";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <div className="sticky top-0 z-50 ">
      <div className=" bg-black p-3 text-white flex flex-col md:flex-row items-center gap-2.5 mx-auto h-auto md:h-28">
        <div className="flex items-center justify-center max-w-[250px]">
          <Link
            to="/"
            className="mr-5 hover:border-2 hover:border-white hover:rounded-[3px] duration-200"
          >
            <img
              src={Amazon_logo}
              alt=""
              className="w-[80%] pt-1  align-middle "
            />
          </Link>
          <div className="flex items-center justify-center gap-1 p-1 font-bold hover:border-2 hover:border-white hover:rounded-[3px] duration-200">
            <i className="ri-map-pin-line text-white text-2xl"></i>
            <div>
              <p className="text-[10px]">Delivered to</p>
              <span className="text-lg">Ethiopia</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-[10px] overflow-hidden w-full bg-white text-black flex-1 focus-within:border-2 focus-within:border-red-200 ">
          <select
            name=""
            id=""
            className="font-bold p-2.5 outline-1 outline-white border-none"
          >
            <option value="">All</option>
          </select>
          <input
            type="text"
            className="font-bold p-2.5 outline-1 outline-white border-[1px] border-white w-full -mr-0.5"
            placeholder="search product"
          />
          <i className="ri-search-line bg-[#febd69] hover:bg-yellow-500 text-2xl p-[7px] "></i>
        </div>
        <div className="flex items-center justify-center gap-2.5 max-w-[450px] ">
          <Link
            to=""
            className="w-[100px] flex p-2.5 hover:border-2 hover:border-white hover:rounded-[3px] hidden md:block duration-200"
          >
            <img src={UnitedStatesFlag} alt="" className="w-[40%]" />
            <select name="" id="" className="border-none font-bold">
              <option value="">EN</option>
            </select>
          </Link>
          <Link
            to={!user && "/auth"}
            className="hover:border-2 hover:border-white hover:rounded-[3px] duration-200"
          >
            <section>
              {user ? (
                <>
                  <p className="text-[10px] capitalize">
                    Hellow {user?.email?.split("@")[0]}
                  </p>
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p className="text-[10px] capitalize">Sign In</p>
                  <span>Account & Lists</span>
                </>
              )}
            </section>
          </Link>
          <Link
            to="/orders"
            className="hover:border-2 hover:border-white hover:rounded-[3px] duration-200"
          >
            <div>
              <p className="text-[10px]">returns</p>
              <span>& Orders</span>
            </div>
          </Link>
          <Link
            to="/cart"
            className="relative hover:border-2 hover:border-white hover:rounded-[3px] duration-200"
          >
            <i className="ri-shopping-cart-line text-5xl"></i>
            <span className="absolute font-bold top-0 left-4 text-xl text-orange-400">
              {totalItem}
            </span>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </div>
  );
}

export default Header;
