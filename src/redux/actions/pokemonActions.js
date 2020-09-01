import axios from 'axios';

export const getPokemonLists = (page) => async (dispatch) => {
  try {
    dispatch({
      type: 'POKEMON_LIST_LOADING',
    });
    const perPage = 20;
    const offSet = page * perPage - perPage;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offSet}`
    );
    dispatch({
      type: 'POKEMON_LIST_SUCCESS',
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: 'POKEMON_LIST_FAILED',
    });
  }
};
export const PokemonDetail = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: 'POKEMON_DETAIL_LOADING',
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch({
      type: 'POKEMON_DETAIL_SUCCESS',
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (error) {
    dispatch({
      type: 'POKEMON_DETAIL_FAILED',
    });
  }
};
