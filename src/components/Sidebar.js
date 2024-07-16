import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-12 mt-16 bg-[#0F0F0F] text-gray-200">
      <ul className="mb-4">
        <li className="font-medium text-2xl">
          <Link to="/">Home</Link>
        </li>
        <li className="font-medium text-2xl">Shorts</li>
        <li className="font-medium text-2xl">Videos</li>
        <li className="font-medium text-2xl">Live</li>
      </ul>
      <h1 className="font-medium mt-4">Subscriptions</h1>
      <ul>
        <li className="font-thin">Music</li>
        <li className="font-thin">Sports</li>
        <li className="font-thin">Gaming</li>
        <li className="font-thin">Movies</li>
      </ul>
      <h1 className="font-medium mt-4">Watch later</h1>
      <ul>
        <li className="font-thin">Music</li>
        <li className="font-thin">Sports</li>
        <li className="font-thin">Gaming</li>
        <li className="font-thin">Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
