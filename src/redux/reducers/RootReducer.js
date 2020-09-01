import { combineReducers } from 'redux';
import PokemonListReducer from './PokemonListReducer';

const RootReducer = combineReducers({ PokemonLists: PokemonListReducer });

export default RootReducer;
