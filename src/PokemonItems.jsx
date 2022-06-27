import './App.css';

function PokemonItems ({name, type, imagen}){
    return (
        <article className='list-pokemons-item'>
            <div className='list-pokemons-item-content'>
                <img
                    src={imagen}
                    alt="pokemon-1"
                ></img>
                <h3>
                    {name}
                    <span>{type}</span>
                </h3>
            </div>
        </article>
    )
}

export default PokemonItems;