import React from 'react';

const PokemonPics = ({ weight, pic, pic1, pic2, pic3 }) => {
  return (
    <div className="row">
      <figure className="col">
        <img className="img-fluid" src={pic} alt="random" />
        <img className="img-fluid" src={pic1} alt="random" />
        <img className="img-fluid" src={pic2} alt="random" />
        <img className="img-fluid" src={pic3} alt="random" />
      </figure>

      <small className="text-muted">
        Weight: <span className="text-info">{weight}</span> kg
      </small>
    </div>
  );
};

export default PokemonPics;
