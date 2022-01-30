// import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.scss";

function SearchBar({ paddingY, paddingX, width, bgColor, fontSize }) {
  return (
    <div
      className="searchBar"
      style={{
        padding: `${paddingY} ${paddingX}`,
        width: `${width}`,
        background: `${bgColor}`,
      }}
    >
      <BiSearch style={{ fontSize: `${fontSize}` }} />
      <input
        type="search"
        placeholder="Search Twitter"
        style={{ background: `${bgColor}` }}
      />
      <button>X</button>
    </div>
  );
}

export default SearchBar;
