import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Aside from './components/Aside';
import Clients from './components/Clients';


function App() {
  return (
    <div className="App">
      <Aside></Aside>
      <Main></Main>
    </div>
  );
}

export default App;
