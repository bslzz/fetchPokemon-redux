import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonLists } from '../../redux/actions/pokemonActions';
import { ShowData } from './ShowData';
import ReactPaginate from 'react-paginate';

const PokemonLists = () => {
  const dispatch = useDispatch();
  const PokemonLists = useSelector((state) => state.PokemonLists);
  const FetchData = (page = 1) => {
    dispatch(getPokemonLists(page));
  };
  useEffect(() => {
    FetchData(1);
  }, [dispatch]);

  return (
    <>
      {ShowData()}

      <ReactPaginate
        pageCount={Math.ceil(PokemonLists.count / 20)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => FetchData(data.selected + 1)}
        containerClassName="pagination"
        activeLinkClassName="activePage"
      />
    </>
  );
};

export default PokemonLists;
