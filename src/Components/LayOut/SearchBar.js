import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

const SearchBar = () => {
  const history = useHistory();
  const [searchBar, setSearchBar] = useState('');

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };
  const searchPokemon = (e) => {
    e.preventDefault();
    history.push(`/pokemon/${searchBar}`.toLowerCase());
  };

  return (
    <>
      <form className="d-flex">
        <input
          className="form-control mr-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchBar}
          onChange={searchHandler}
        />
        <NavLink
          to="/pokemon/test"
          className="btn btn-outline-info searchBtn"
          type="submit"
          onClick={searchPokemon}
        >
          Search
        </NavLink>
      </form>
    </>
  );
};

export default SearchBar;
