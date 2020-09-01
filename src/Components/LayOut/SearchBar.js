import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
  return (
    <form className="d-flex">
      <input
        className="form-control mr-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <NavLink
        to="/pokemon/test"
        className="btn btn-outline-info searchBtn"
        type="submit"
      >
        Search
      </NavLink>
    </form>
  );
};

export default SearchBar;
