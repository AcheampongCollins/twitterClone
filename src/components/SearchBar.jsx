import React from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="searchBar">
      <BiSearch style={{ fontSize: "25px" }} />
      <input
        type="search"
        className="border-none outline-none bg-gray-200 px-1 text-sm"
        placeholder="Search Twitter"
      />
      <button>X</button>
    </div>
  );
}

export default SearchBar;
