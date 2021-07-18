import logo from './logo.svg';
import './App.css';
import Listsection from './components/Listsection';
import Formsection from './components/Formsection';
import Bulb from './Bulb/Bulb';

function App() {
  return (
    <div className="App">
      <Listsection/>
      <Formsection/> 
    </div>
  );
}


// function App() {
//   return <Bulb />
// }

export default App;
