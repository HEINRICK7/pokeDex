import React from 'react'
import './styles.css'

import {typeColors } from '../../typeColors';
import { Badge } from 'antd';

const Card = ({pokemon}) => {

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="front">
                        <img src={pokemon.image} alt={pokemon.name}/>
                        <div className="card_name">{name}</div>
                        
                    </div>
                   
                    <div className="back">
                        <div className="card_name">{name}</div>
                        <div className="back_content">
                        <div className="card_types">
                            {pokemon.types.map(type => {
                                return (
                                    <div key={type.id}className="card_type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                        {type.type.name}
                                    </div>
                                )
                            })}
                        </div>
                            <div className="card_weight">
                                <p>Peso: </p>
                               {pokemon.weight}
                            </div>
                            <div className="card_height">
                                <p>Altura: </p>
                                {pokemon.height}
                            </div>
                            <div className="card_ability">
                                <p>Abilidade: </p>
                                {pokemon.abilities[0].ability.name}
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Card
