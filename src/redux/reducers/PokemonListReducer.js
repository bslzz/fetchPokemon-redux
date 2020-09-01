const initialState = {
  loading: false,
  data: [],
  errorMsg: '',
  count: 0,
};

const PokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POKEMON_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case 'POKEMON_LIST_FAILED':
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to get pokemon',
      };
    case 'POKEMON_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: '',
        count: action.payload.count,
      };
    default:
      return state;
  }
};

export default PokemonListReducer;
