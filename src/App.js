import { useEffect} from 'react';
import {getPolkemon} from './api';
import PokemonList from './components/PokemonList';
import {getPokemonsWithDetails, setLoading} from './actions'
import { useDispatch, useSelector } from 'react-redux';
// import { connect } from 'react-redux';

import Spinner from './components/Spiner';
import Searcher from './components/Searcher';

import './App.css';

// {pokemons, setPokemons} pasar por props
function App() {

  const pokemons = useSelector(state => state.pokemons )
  const loading = useSelector( state => state.loading)
  const dispatch = useDispatch()
  
  useEffect (() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true))
      const pokemonRes = await getPolkemon()
      dispatch(getPokemonsWithDetails(pokemonRes))
      dispatch(setLoading(false))
    }
    fetchPokemon()
  }, [])
  return (
    <div className="App">
      <Searcher/>
      { loading
        ? <Spinner/>
        : <PokemonList pokemons={pokemons}/> 
      }
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