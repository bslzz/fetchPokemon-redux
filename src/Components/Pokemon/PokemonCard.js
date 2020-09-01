import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ name }) => {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div className="card" style={{ width: '18rem' }}>
          <img src="..." className="card-img-top" alt="random" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Link to={`/pokemon/${name}`}>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
