import React from "react";
import "./search-box.styles.css";

// functional component
export const SearchBox = ({ placeholder, handleChange, value }) => (
  <input className="search" type="text" value={value} placeholder={placeholder} onChange={handleChange} />
);