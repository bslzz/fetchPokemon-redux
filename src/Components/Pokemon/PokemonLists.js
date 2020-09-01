import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonLists } from '../../redux/actions/pokemonActions';
import { Link } from 'react-router-dom';

const PokemonLists = () => {
  const dispatch = useDispatch();
  const PokemonLists = useSelector((state) => state.PokemonLists);

  useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(getPokemonLists(page));
  };

  const ShowData = () => {
    if (PokemonLists.loading) {
      return <p>Loading...</p>;
    }

    if (PokemonLists.data) {
      return (
        <div className={'list-wrapper'}>
          {PokemonLists.data.map((el) => {
            return (
              <div className={'pokemon-item'}>
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </div>
            );
          })}
        </div>
      );
    }

    if (PokemonLists.errorMsg !== '') {
      return <p>{PokemonLists.errorMsg}</p>;
    }

    return <p>unable to get data</p>;
  };
  return <>{ShowData()}</>;
};

export default PokemonLists;
