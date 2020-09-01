import React from 'react';
import NavBar from './Components/LayOut/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonLists from './Components/Pokemon/PokemonLists';
import PokemonDetails from './Components/Pokemon/PokemonDetails';
import { Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={PokemonLists} />
          <Route path="/pokemon/:pokemon" component={PokemonDetails} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
