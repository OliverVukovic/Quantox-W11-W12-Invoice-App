import './App.css';
import './styles/Aside.css';
import './styles/Main.css';
import './styles/New.css';
import './styles/Edit.css';
import './styles/Client.css';
import './styles/Delete.css';
import './styles/Header.css';
import imgSrc from './assets/icon-moon.svg';
import imgSrc1 from './assets/icon-sun.svg';
import Main from './components/Main';
import Aside from './components/Aside';
import Client from './components/Client';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  const [colorTheme, setColorTheme] = useState(false)
  const [imgg, setImg] = useState(imgSrc)

  function changeTheme() {
    if(colorTheme === false){
      setColorTheme(true);
      setImg(imgSrc1)

    }else {
      setColorTheme(false)
      setImg(imgSrc);
    }
}

  return ( 
  
    <Router>
      <div className={colorTheme ? "dark-version" : "App"}>
        <Aside changeTheme={changeTheme} imgg={imgg}/>
          <Routes>
            <Route exact path="/" element={<Main />}/> 
            <Route exact path="/client" element={<Client />}/>
          </Routes>
            {/* <New />
                <Edit />
                <Delete /> */}
      </div>
       
    </Router>
  );
}

export default App;
