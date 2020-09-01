const initialState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const PokemonDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POKEMON_DETAIL_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'POKEMON_DETAIL_SUCCESS':
      return {
        ...state,
        loading: true,
        errorMsg: '',
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    case 'POKEMON_DETAIL_FAILED':
      return {
        ...state,
        loading: false,
        errorMsg: 'Unable to fetch the data',
      };
    default: {
      return state;
    }
  }
};

export default PokemonDetailReducer;
