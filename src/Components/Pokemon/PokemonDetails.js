import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonDetail } from '../../redux/actions/pokemonActions';
import PokemonSummary from './PokemonSummary';
import PokemonPics from './PokemonPics';

const PokemonDetails = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const PokemonDetails = useSelector((state) => state.PokemonDetails);

  useEffect(() => {
    dispatch(PokemonDetail(pokemonName));
  }, [dispatch, pokemonName]);

  const showData = () => {
    if (PokemonDetails.data[pokemonName]) {
      const pokemonData = PokemonDetails.data[pokemonName];
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <PokemonPics
                weight={pokemonData.weight}
                pic={pokemonData.sprites.front_default}
                pic1={pokemonData.sprites.back_default}
                pic2={pokemonData.sprites.front_shiny}
                pic3={pokemonData.sprites.back_shiny}
              />
            </div>
            <div className="col-md-4 mb-3">
              <h1 className="text-uppercase">Stats</h1>
              {pokemonData.stats.map((el, index) => (
                <PokemonSummary
                  key={index}
                  statName={el.stat.name}
                  baseStat={el.base_stat}
                />
              ))}
            </div>
            <div className="col-md-4">
              <h1 className="text-uppercase">Abilities</h1>
              {pokemonData.abilities.map((el, index) => (
                <PokemonSummary key={index} abilityName={el.ability.name} />
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (PokemonDetails.loading) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    if (PokemonDetails.errorMsg !== '') {
      return <p>{PokemonDetails.errorMsg}</p>;
    }
    return <h6>Error getting Pokemon</h6>;
  };

  return (
    <div className="py-5 my-5 shadow p-3 mb-5 rounded">
      <h1 className="text-center mb-5">
        Name: <span className="text-info text-capitalize">{pokemonName}</span>
      </h1>
      {showData()}
    </div>
  );
};

export default PokemonDetails;
