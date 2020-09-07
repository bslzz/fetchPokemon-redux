import React from 'react';
import { Link } from 'react-router-dom';

const PokemonHomePage = ({ name }) => {
  return (
    <div
      className="card mx-auto bg-light shadow rounded"
      style={{ maxWidth: '20rem' }}
    >
      <div className="card-header">
        <span className="text-info text-capitalize">{name}</span>
      </div>

      <div className="card-body">
        <Link className="btn btn-primary" to={`/pokemon/${name}`}>
          View
        </Link>
      </div>
    </div>
  );
};

export default PokemonHomePage;
