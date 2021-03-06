import React from 'react';
import { useSelector } from 'react-redux';
import PokemonHomePage from './PokemonHomePage';

export const ShowData = () => {
  const PokemonLists = useSelector((state) => state.PokemonLists);
  if (PokemonLists.loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (PokemonLists.data) {
    return (
      <div className="row my-5 g-4">
        {PokemonLists.data.map((pokemonList, index) => (
          <div className="col-sm-12 col-md-4">
            <PokemonHomePage key={index} name={pokemonList.name} />
          </div>
        ))}
      </div>
    );
  }

  if (PokemonLists.errorMsg !== '') {
    return <p>{PokemonLists.errorMsg}</p>;
  }

  return <p>Unable to get data</p>;
};
