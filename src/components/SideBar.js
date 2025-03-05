import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isToggle = useSelector((store) => store.sideBar.isToggle);

  if (!isToggle) return null;
  return (
    <div className=" shadow-inner px-5 ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col items-center justify-center"></div>

      <ul className="menu bg-base text-base-content p-4 w-40 ">
        {/* Sidebar content here */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/">Shorts</a>
        </li>
        <li>
          <a href="/">Subscriptions</a>
        </li>
        <li>
          <a href="/">YouTube Music</a>
        </li>

        <div>
          <hr />
        </div>
        <div className="py-3">You</div>

        <li>
          <a href="/">History</a>
        </li>
        <li>
          <a href="/">Playlists</a>
        </li>
        <li>
          <a href="/">Your videos</a>
        </li>
        <li>
          <a href="/">Your courses</a>
        </li>
        <li>
          <a href="/">Watch later</a>
        </li>
        <li>
          <a href="/">Liked videos</a>
        </li>
        <li>
          <a href="/">Downloads</a>
        </li>
        <li>
          <a href="/">Your clips</a>
        </li>
        <div>
          <hr />
        </div>
        <div className="py-3">Explore</div>

        <li>
          <a href="/">Trending</a>
        </li>
        <li>
          <a href="/">Shopping</a>
        </li>
        <li>
          <a href="/">Music</a>
        </li>
        <li>
          <a href="/">Films</a>
        </li>
        <li>
          <a href="/">Live</a>
        </li>
        <li>
          <a href="/">Gaming</a>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Sport</a>
        </li>
        <div>
          <hr />
        </div>
        <li className="text-gray-400">
          About Press Copyright Contact us Creator Advertise Developers
          <br />
          Terms Privacy Policy & Safety How YouTube <br /> works Test new
          features
          <br /> © 2025 Google LLC
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
