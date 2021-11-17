import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Aside from './components/Aside';
import Clients from './components/Clients';
import New from './components/New';
import Edit from './components/Edit';
import { useState } from 'react';


function App() {

  const [showInvoice, setShowInvoice] = useState(false);

  return ( 
    <div className="App">
      <Aside></Aside>
      <Main></Main>
      <New></New>
      <Edit></Edit>
    </div>
  );
}

export default App;
