import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ name }) => {
  return (
    <div
      className="card mx-auto bg-light shadow rounded"
      style={{ maxWidth: '20rem' }}
    >
      <div className="card-header capitalize">Pokemon</div>
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <Link className="btn btn-primary" to={`/pokemon/${name}`}>
          View
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
