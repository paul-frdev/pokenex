import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { PokemonsList } from './components/pokemons/PokemonsList';
import { Pokemon } from './components/pokemons/Pokemon';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <PokemonsList />
      </BrowserRouter>
    </div>
  );
}

export default App;
