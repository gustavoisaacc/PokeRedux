import React from 'react'
import PokemonCard from './PokemonCard'

import '../styles/PokemonList.css'

function PokemonList({pokemons = []}) {
  console.log(pokemons)
  return (
    <div className='Pokemon__content'>
        <div className="Pokemon--grid">
            {pokemons.map(item => (
              <PokemonCard item={item} key={item.name}/>
            ))}
        </div>
    </div>
  )
}

export default PokemonList