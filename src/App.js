import { useEffect} from 'react';
import {getPolkemon} from './api';
import PokemonList from './components/PokemonList';
import {getPokemonsWithDetails} from './actions'
import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';

import Searcher from './components/Searcher';

import './App.css';

// {pokemons, setPokemons} pasar por props
function App() {

  const pokemons = useSelector(state =>{ 
    console.log(state)
    return state.pokemons 
  })
  const dispatch = useDispatch()

  useEffect (() => {
    const fetchPokemon = async () => {
      const pokemonRes = await getPolkemon()
      dispatch(getPokemonsWithDetails(pokemonRes))
    }
    fetchPokemon()
  }, [])
  return (
    <div className="App">
      <Searcher/>
      <PokemonList pokemons={pokemons}/>
    </div>
  );

}
// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons
// })

// const mapDispachToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value))
// })

export default App;
// connect(mapStateToProps, mapDispachToProps)(App)