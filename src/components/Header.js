import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { showSideBar } from "../utils/sideToggleSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cacheResult } from "../utils/searchCacheSlice";
//import { YOUTUBE_SEARCH_SUGGESTION } from "../utils/constant";

const Header = () => {
  const [searchBar, setSearchBar] = useState("");
  const [showSuggestion, setShowSuggestion] = useState([]);
  const [hideSuggestionBar, setHideSuggestionBar] = useState(false);
  console.log(searchBar);
  console.log(showSuggestion);
  const dispatch = useDispatch();
  const cacheResults = useSelector((store) => store.searchCache);
  useEffect(() => {
    const timer = setTimeout(() => {
      //getSuggestion();
      if (cacheResults[searchBar]) {
        setShowSuggestion();
      } else {
        getSuggestion();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchBar]);
  const getSuggestion = async () => {
    //(youtube suggestion url are not working)
    //   const data = await fetch(
    //     "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=" +
    //       searchBar
    //   );
    //   console.log(data);
    //   const json = await data.json();
    //   console.log(json[1]);
    //   setShowSuggestion(json[1]);

    //(updated url )
    const url = `https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=${searchBar}`;
    console.log(url);

    try {
      const response = await fetch(url);
      console.log(response);
      const text = await response.text(); // Get response as text
      console.log(text);

      // Extract JSON-like data from function call
      // used Regex Extracts content inside square brackets
      const jsonData = text.match(/\[(.*)\]/s);

      console.log(jsonData);

      if (jsonData) {
        const parsedData = JSON.parse(`[${jsonData[1]}]`);
        console.log(parsedData);
        // Extract first value of each suggestion
        const loopResult = parsedData[1].map((item) => item[0]);
        setShowSuggestion(loopResult);
        dispatch(cacheResult({ [searchBar]: loopResult }));
      } else {
        console.error("Failed to extract data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(showSuggestion);

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
        <div className="-mt-8 w-96 py-3 px-2 m-2  outline-none ml-[40rem] bg-white rounded-lg absolute z-10">
          <ul>
            {showSuggestion.map((suggest, index) => (
              <li key={index}>{suggest}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
