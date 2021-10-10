import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Routes from './Routes';
import AddBug from './components/AddBug';
 
function App() {
  return (
    <div className="App">
        <Routes/>
        {/* <AddBug/> */}
    </div>
  );
}
 
export default App;