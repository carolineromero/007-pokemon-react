
import './App.css';
import Header from './Header';
import PokemonList from './PokemonList';
import Search from './Search';


function App() {

  return (
    <div className="container">
      <Header/>
      <Search/>
     <PokemonList/>
    </div>
      
  );
}

export default App;
