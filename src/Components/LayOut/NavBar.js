import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          MyPokeMon
        </Link>
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
