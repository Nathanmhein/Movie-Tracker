import Nav from './Nav';
import {Home, About, Shop} from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Shop />
    </div>
  )
}

export default App
