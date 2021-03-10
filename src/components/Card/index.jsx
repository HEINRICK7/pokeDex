import React from 'react'
import './styles.css'

import {typeColors } from '../../typeColors'

const Card = ({pokemon}) => {

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    return (
        <>
            <div className="Card">
                <div className="card_img">
                    <img src={pokemon.image} width="200px" alt="pokemon.name"/>

                </div>

                <div className="card_name">
                    {name}
                </div>

                <div className="card_types">
                    {pokemon.types.map(type => {
                        return (
                            <div className="card_type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })}
                </div>

                <div className="card_info">
                    <div className="card_weight">
                        <p>Weight</p>
                        {pokemon.weight}
                    </div>
                    <div className="card_height">
                        <p>Height</p>
                        {pokemon.height}
                    </div>
                    <div className="card_ability">
                        <p>Ability</p>
                        {pokemon.abilities[0].ability.name}
                    </div>
                </div>
                <div className="card_price">

                </div>
            </div>
        </>
    )
}

export default Card
