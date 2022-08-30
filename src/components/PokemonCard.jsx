import React from 'react'
import { StarOutlined } from '@ant-design/icons'

import '../styles/PokemonCard.css'


function PokemonCard({item}) {
  return (
    <div className='Pokemon--card'>
        <img src={item.sprites.front_default} alt={item.name} />
        <div className="Pokemon--info">
            <div className="Pokemon--title">
                <h1>{item.name}</h1>
                <span><StarOutlined/></span>
            </div>
            <ul className="ul">
                <li>poderes</li>
            </ul>
        </div>
    </div>
  )
}

export default PokemonCard