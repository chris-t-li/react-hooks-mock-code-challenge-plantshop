import React, { useState } from "react";

function Search({ searchPlants }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={(e) => {
          searchPlants(e.target.value.toLowerCase())
          setSearchQuery(e.target.value.toLowerCase())
        }}
      />
    </div>
  );
}

export default Search;
