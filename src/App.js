import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ListContainer from "./containers/listContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ListContainer/>
    </div>
  );
}

export default App;
