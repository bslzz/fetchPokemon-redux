import React from 'react';

const PokemonSummary = ({ weight, pic }) => {
  return (
    <div class="card mb-3 mx-auto shadow-lg rounded">
      <div class="row">
        <div class="col-md-4">
          <img className="img-fluid" src={pic} alt="random" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">{weight}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonSummary;
