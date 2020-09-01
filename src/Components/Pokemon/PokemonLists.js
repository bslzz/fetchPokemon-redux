import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonLists } from '../../redux/actions/pokemonActions';
import PokemonCard from './PokemonCard';

const PokemonLists = () => {
  const dispatch = useDispatch();
  const PokemonLists = useSelector((state) => state.PokemonLists);

  useEffect(() => {
    const FetchData = (page) => {
      dispatch(getPokemonLists(page));
    };
    FetchData(1);
  }, [dispatch]);

  const ShowData = () => {
    if (PokemonLists.loading) {
      return <p>Loading...</p>;
    }

    if (PokemonLists.data) {
      return (
        <div className="row my-5 g-4">
          {PokemonLists.data.map((pokemonList, index) => (
            <div className="col-sm-12 col-md-4">
              <PokemonCard key={index} name={pokemonList.name} />
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
  return <>{ShowData()}</>;
};

export default PokemonLists;
