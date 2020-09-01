import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ name }) => {
  return (
    <div className="card mx-auto" style={{ maxWidth: '18rem' }}>
      <img src="..." className="card-img-top img-fluid" alt="random" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Link to={`/pokemon/${name}`}>View</Link>
      </div>
    </div>
  );
};

export default PokemonCard;
