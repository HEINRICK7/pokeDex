import React, { useEffect, useState } from 'react'

import {Spinner} from '../../components/Spinner/index'

import { getAllPokemon ,getPokemon} from '../../pokemon'

import  Card from '../../components/Card/index'

import './styles.css'

const Home = () => {

    const [pokemons, setPokemons] = useState([])
    const [ search, setSearch ] = useState('');
    const [loading, setLoading] = useState(true);
    const urlPokemonApi = `https://pokeapi.co/api/v2/pokemon/`

    useEffect(() => {
       async function fetchData() {
           const response = await getAllPokemon(urlPokemonApi);
            setLoading(false) 
           await pokemonData(response.results);
    
       }
       fetchData();
    }, []);

    const pokemonData = async data => {
        const loadingPokemon = await Promise.all(
            data.map(async(pokemon,index) => {
                const pokemonRecord = await getPokemon(pokemon.url);

                const id = (index + 1)
                const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
                return {
                    ...pokemonRecord,
                    image


                }})
        );
        setPokemons(loadingPokemon);
        console.log('w',pokemons)
    }
    const handleChange = (e) => {
        setSearch(e.target.value)
      }

      const filteredPokemons = pokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(search.toLowerCase()));
        

    return (
        <>

            <h1>PokeDex</h1>
            <div className="pokemon-search">
               <form>
                 <input 
                 type="text" 
                 placeholder="pesquizar" 
                 className="coin-input"
                 onChange={handleChange}
                 />
               </form>
            </div>
            <>
                {
                loading ? (
                    < Spinner />
                ): (
                    <>
                    <div className="grid-container">
                     {filteredPokemons.map((pokemon, i) => {
                       
                        return (
                            <>
                               < Card key={i} pokemon={pokemon}/>
                            </> 
                        )
                      })}
                      </div>
                    </>
                )}
            </>
        </>
    )
}

export default Home
