import { combineReducers } from 'redux';
import PokemonListReducer from './PokemonListReducer';
import PokemonDetailReducer from './PokemonDetailReducer';

const RootReducer = combineReducers({
  PokemonLists: PokemonListReducer,
  PokemonDetails: PokemonDetailReducer,
});

export default RootReducer;
