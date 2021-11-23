
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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [showNewInvoice, setShowNewInvoice] = useState(false);

  return ( 
    <Router>
    <div className="App">
      <Aside />
        <Routes>
          <Route exact path="/" element={<Main />}/> 
          <Route exact path="/client" element={<Client />}/>
          <Route exact path="/new" element={<New />}/>
          <Route exact path="/edit" element={<Edit />}/>
          <Route exact path="/delete" element={<Delete />}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
