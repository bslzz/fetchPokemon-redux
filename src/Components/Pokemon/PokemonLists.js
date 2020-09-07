import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonLists } from '../../redux/actions/pokemonActions';
import { ShowData } from './ShowData';

const PokemonLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchData = (page) => {
      dispatch(getPokemonLists(page));
    };
    FetchData(1);
  }, [dispatch]);

  return <>{ShowData()}</>;
};

export default PokemonLists;
