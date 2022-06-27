import './App.css';
import PokemonItems from './PokemonItems';
import pokemons from './data.jsx';

function PokemonList(){
    const ListaPokemons = pokemons.map (item => {
        return (
            <PokemonItems name= {item.name} type = {item.type} imagen = {item.sprite}/>
        )
    }
    )

    return (
        <main className='list-pokemons'>
            {ListaPokemons}
        </main>
    );
}

export default PokemonList;