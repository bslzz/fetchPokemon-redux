import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonDetail } from '../../redux/actions/pokemonActions';
import PokemonSummary from './PokemonSummary';

const PokemonDetails = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const PokemonDetails = useSelector((state) => state.PokemonDetails);

  useEffect(() => {
    dispatch(PokemonDetail(pokemonName));
  }, [dispatch, pokemonName]);

  console.log(PokemonDetails);
  const showData = () => {
    const pokemonData = PokemonDetails.data[pokemonName];
    if (pokemonData) {
      return (
        <>
          <div>
            <PokemonSummary
              weight={pokemonData.weight}
              pic={pokemonData.sprites.front_default}
              pic1={pokemonData.sprites.back_default}
              pic2={pokemonData.sprites.front_shiny}
              pic3={pokemonData.sprites.back_shiny}
            />
          </div>
        </>
      );
    }

    if (PokemonDetails.loading) {
      return <p>Loading...</p>;
    }
    if (PokemonDetails.errorMsg !== '') {
      return <p>{PokemonDetails.errorMsg}</p>;
    }
    return <h6>Error getting Pokemon</h6>;
  };

  return (
    <div className="py-5 my-5 shadow p-3 mb-5 rounded">
      <h1>
        Name: <span className="text-info text-capitalize">{pokemonName}</span>
      </h1>
      {showData()}
    </div>
  );
};

export default PokemonDetails;
