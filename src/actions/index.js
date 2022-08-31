import { getPokemonDetails } from '../api'
import {SET_LOADING, SET_POKEMONS} from './type'

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
})
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
})

 export const getPokemonsWithDetails = (pokemons = []) => 
 async (dispatch) => {
    const pokemonsDetaild = await Promise.all(pokemons.map((pokemon) => getPokemonDetails(pokemon)))
      dispatch(setPokemons(pokemonsDetaild))
 }