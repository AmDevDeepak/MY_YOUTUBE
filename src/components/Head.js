import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { youtubeSearchAPI } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import menuline from "../assets/menu-line.png";
import logo from "../assets/logo.png";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(youtubeSearchAPI + searchQuery);
    const json = await response.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed z-10 w-full bg-[#0F0F0F] grid grid-flow-col p-5">
      <div className="flex col-span-1 gap-3 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          src={menuline}
          alt="Menu"
          className="h-8 cursor-pointer"
        ></img>

        <a href="">
          <img className="h-14" src={logo} alt="Youtube-logo"></img>
        </a>
      </div>

      <div className="col-span-10 p-2 relative">
        <div>
          <input
            className="w-1/2 border-none outline-none rounded-l-full px-3 py-2 bg-[#212121] text-gray-200"
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-4 py-2 rounded-r-full bg-[#222222] font-bold text-gray-200">
            Search
          </button>
        </div>
        {suggestions.length > 0 && showSuggestions && (
          <div className="z-10 suggestions fixed top-[4.5vw] bg-[#222222] w-[42vw] py-2 px-5 rounded-md shadow-md text-gray-200">
            <ul className="flex flex-col gap-2">
              {suggestions.map((suggestion) => (
                <li className="py-2 shadow-sm" key={suggestion}>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Head;
