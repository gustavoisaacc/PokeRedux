import React from 'react'
import { StarOutlined } from '@ant-design/icons'

import '../styles/PokemonCard.css'


function PokemonCard({item}) {
  const type = item.types.map(item => item.type.name).join(', ')
  console.log(type)
  return (
    <div className='Pokemon--card'>
        <img src={item.sprites.front_default} alt={item.name} />
        <div className="Pokemon--info">
            <div className="Pokemon--title">
                <h1>{item.name}</h1>
                <span><StarOutlined/></span>
            </div>
            <ul className="ul">
                <li>{type}</li>
            </ul>
        </div>
    </div>
  )
}

export default PokemonCard