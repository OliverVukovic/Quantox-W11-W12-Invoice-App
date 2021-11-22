
import './App.css';
import './styles/Aside.css';
import './styles/Main.css';
import './styles/New.css';
import './styles/Edit.css';
import './styles/Client.css';
import './styles/Delete.css';
import './styles/Header.css';
import Main from './components/Main';
import Aside from './components/Aside';
import Client from './components/Client';
import New from './components/New';
import Edit from './components/Edit';
import Delete from './components/Delete';
import EmptyPage from './components/EmptyPage';
import { useState } from 'react';



function App() {

  const [showNewInvoice, setShowNewInvoice] = useState(false);

  return ( 
    <div className="App">
      <Aside />
      <Main />
      <New />
      <Client />
      <Edit />
      <Delete />
    </div>
  );
}

export default App;
