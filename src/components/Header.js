import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { showSideBar } from "../utils/sideToggleSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { YOUTUBE_SEARCH_SUGGESTION } from "../utils/constant";

const Header = () => {
  const [searchBar, setSearchBar] = useState("");
  const [showSuggestion, setShowSuggestion] = useState([]);
  const [hideSuggestionBar, setHideSuggestionBar] = useState(false);
  console.log(searchBar);
  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestion();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchBar]);
  const getSuggestion = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchBar
    );
    const json = await data.json();
    //console.log(json[1]);
    setShowSuggestion(json[1]);
  };
  console.log(showSuggestion);
  const dispatch = useDispatch();
  const toggleClick = () => {
    dispatch(showSideBar());
  };
  return (
    <>
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
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
            onFocus={() => setHideSuggestionBar(true)}
            onBlur={() => setHideSuggestionBar(false)}
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
      {hideSuggestionBar && (
        <div className="-mt-8 w-96 py-3 px-2 m-2  outline-none ml-[40rem] bg-white rounded-lg absolute">
          <ul>
            {showSuggestion.map((suggest) => (
              <li key={suggest}>{suggest}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
