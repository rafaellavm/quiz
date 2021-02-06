import logo from './logo.svg';
import './App.css';
import Inicio from './Home/Inicio'
import Categorias from './Jogo/Categorias'
import Perguntas from './Jogo/Perguntas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Jogo de Perguntas e Respostas</h1>
      </header>
      <h1 className="App-intro">Bem-vindo</h1>
      <Perguntas />

    </div>

  );
}

export default App;
