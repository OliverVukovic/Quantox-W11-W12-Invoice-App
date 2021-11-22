import React from "react";
import { useState } from "react/cjs/react.development";

export default function Theme(props) {

//     const [theme, setTheme] = useState({
//         light: true
//     });

//     const handleChangeTheme = event => {
//         setTheme({ ...theme, [event.target.name]: event.target.checked });
//     };

//     const currentTheme = theme.light === true ? "light" : "dark";
//   document.documentElement.setAttribute(".dark-version", currentTheme);


    return <div>
        <img className="moon" src={require('../assets/icon-moon.svg').default} alt="moon"/>
        <img className="sun" src={require('../assets/icon-sun.svg').default} alt="sun"/>
    </div>;
}