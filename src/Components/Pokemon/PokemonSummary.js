import React from 'react';

const PokemonSummary = ({
  weight,
  pic,
  pic1,
  pic2,
  pic3,
  statName,
  baseStat,
}) => {
  return (
    <div class="row">
      <div class="col-md-4">
        <img className="img-fluid" src={pic} alt="random" />
        <img className="img-fluid" src={pic1} alt="random" />
        <img className="img-fluid" src={pic2} alt="random" />
        <img className="img-fluid" src={pic3} alt="random" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            {statName}: {baseStat}
          </p>
          <p class="card-text">
            <small class="text-muted">{weight}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonSummary;
