import React from "react";
import { useState } from 'react';


export default function Header(props) {

    const [showNewInvoice, setShowNewInvoice] = useState(false);

    const handleClick = () => {
        console.log('Zdravo, Olivere! Ovo radi...')
    }

    return (
    
        <header>

            <div className="headline">
                <div className="headline-left">
                    <h1 className="invoices">Invoices</h1>
                    <p>No invoices</p>
                </div>
            </div>

            <div className="headline-right">
                <div className="filter-dropdown">
                    
                    <button className="no-color-btn">Filter by status 
                        <img className="arrow down" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/>
                    </button>
                    
                    <div className="filter">
                        <label className="container">
                            <input type="checkbox"></input>
                            <span className="checkmark"></span> Draft
                        </label>
                        <label className="container">
                            <input type="checkbox"></input>
                            <span className="checkmark"></span> Pending
                        </label>
                        <label className="container">
                            <input type="checkbox"></input>
                            <span className="checkmark"></span> Paid
                        </label>
                    </div>

                </div>
                <button onClick={handleClick} className="violet-btn"><img className="btn-plus" src={require('../assets/icon-plus.svg').default} alt="plus"/> New Invoice</button>
                {/* <button onClick={() => setShowNewInvoice(true)} className="violet-btn"><img className="btn-plus" src={require('../assets/icon-plus.svg').default} alt="plus"/> New Invoice</button> */}
            </div>
            
        </header>
        );
}