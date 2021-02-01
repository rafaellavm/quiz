import logo from './logo.svg';
import './App.css';
import Inicio from './Home/Inicio'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <h1 className="App-intro">Bem-vindo</h1>
      <Inicio />

    </div>

  );
}

export default App;
