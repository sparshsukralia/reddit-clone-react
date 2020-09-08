import React from "react";

function SearchForm() {
  return (
    <div className="container">
      <h3>Search Reddit</h3>
      <form className="search-form">
        <input type="text" id="search-input" placeholder="Search..." />
        <br />
        <div className="limit">
          <h5>Limit:</h5>
          <select className="select" name="limit" id="limit">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
