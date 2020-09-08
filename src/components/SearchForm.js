import React from "react";

function SearchForm() {
  return (
    <div className="container">
      <h3>Search Reddit</h3>
      <form className="search-form">
        <input type="text" id="search-input" placeholder="Search..." />
      </form>
    </div>
  );
}

export default SearchForm;
