import React from "react";
import { useEffect, useState } from "react";


export default function Aside(props) {

    
    // useEffect(() => {
    //     const currentThemeColor = localStorage.getItem('dark-version');
    //     if(currentThemeColor){
    //         setColorTheme(currentThemeColor)
    //     }
    // }, []);

    // const handleClick = (theme) => {
    //     setColorTheme(theme)
    //     localStorage.setItem('dark-version', theme)

    // }
    

    return <aside className="aside-col">
        <div className="log-aside">
            <div className="log-color-down"></div>
            <img className="log-img" src={require('../assets/logo.svg').default} alt="logo"/>
        </div>
        <div className="down-part">
            <div className="dark-light-mode">
            
            <img onClick={props.changeTheme}
              className="moon" src={require('../assets/icon-moon.svg').default} alt="moon"/>
            
            
            
            <img className="sun" src={require('../assets/icon-sun.svg').default} alt="sun"/>
            </div>
            <div className="avatar-photo">
                <img className="profil-img" src={require('../assets/image-avatar.jpg').default} alt="avatar"/>
            </div> 
        </div>
    </aside>;
}