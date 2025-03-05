import React from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { showSideBar } from "../utils/sideToggleSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const toggleClick = () => {
    dispatch(showSideBar());
  };
  return (
    <div className=" grid grid-flow-col items-center shadow-md">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleClick()}
          alt="youtube menu"
          className="w-7 h-7 mt-10 ml-6 cursor-pointer"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />

        <Link to="/">
          <img
            alt="youtube logo"
            className="w-28 h-28 p-2 mx-8"
            src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/youtube-logo.jpeg"
          />
        </Link>
      </div>
      <div className="col-span-10 m-auto flex items-center border border-gray-300 rounded-full w-fit">
        <input
          type="text"
          placeholder="Search"
          className="w-96 p-2 rounded-l-full outline-none"
        />
        <button className="rounded-r-full border bg-gray-100 px-6 py-3 flex items-center justify-center">
          <CiSearch />
        </button>
      </div>

      <div className="col-span-1 w-8 h-8">
        <img
          alt="user icon"
          src="https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
