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
        <div className="row my-5">
          <div className="col">
            <PokemonSummary
              weight={pokemonData.weight}
              pic={pokemonData.sprites.front_default}
            />
          </div>
        </div>
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
        Name: <span className="text-info">{pokemonName}</span>
      </h1>
      {showData()}
    </div>
  );
};

export default PokemonDetails;
