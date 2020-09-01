const initialState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const PokemonListReducer = (state = initialState, action) => {
  switch (action.types) {
    case 'POKEMON_LIST_LOADING':
      return { ...state, loading: true, errorMsg: '' };
    case 'POKEMON_LIST_SUCCESS':
      return { ...state, loading: false, data: action.payload, errorMsg: '' };
    case 'POKEMON_LIST_FAILED':
      return {
        ...state,
        errorMsg: 'Error fetching PokemonLists',
        loading: false,
      };

    default:
      return state;
  }
};

export default PokemonListReducer;
