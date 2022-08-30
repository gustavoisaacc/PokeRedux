import axios from "axios";

export const getPolkemon = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.data.results)
    .catch( error => console.log(error))
}

export const getPokemonDetails = (pokemon) => {
    return axios.get(pokemon.url)
    .then(res => res.data)
    .catch((err) => console.log(err));
  }