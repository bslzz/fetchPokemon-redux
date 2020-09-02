import React from 'react';

const PokemonSummary = ({ statName, baseStat, abilityName }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="col-6">
          <p>
            <span className="text-capitalize">
              {statName} <span className="text-info">{baseStat}</span>
            </span>
          </p>
        </div>
        <div className="col-6">
          <h6 className="text-capitalize">{abilityName}</h6>
        </div>
      </div>
    </div>
  );
};

export default PokemonSummary;
