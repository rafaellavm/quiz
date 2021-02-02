import logo from './logo.svg';
import './App.css';
import Inicio from './Home/Inicio'
import Categorias from './Jogo/Categoria'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Jogo de Perguntas e Respostas</h1>
      </header>
      <h1 className="App-intro">Bem-vindo</h1>
      <Categorias />

    </div>

  );
}

export default App;
