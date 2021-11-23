import React from "react";
import { useState } from 'react';
import Filter from "./Filter";
import { useNavigate } from 'react-router-dom';


export default function Header(props) {

    const [showNewInvoice, setShowNewInvoice] = useState(false);

    const handleClick = () => {
        console.log('Ovo radi...')
    }

    const navigate = useNavigate();
        
    function newPage() {
        navigate(`/new`)
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

                    {/* <Filter /> */}
                    
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
                <button onClick={()=>{newPage()}} className="violet-btn">
                    <img className="btn-plus" src={require('../assets/icon-plus.svg').default} alt="plus"/> New Invoice
                </button>
                {/* <button onClick={() => setShowNewInvoice(true)} className="violet-btn"><img className="btn-plus" src={require('../assets/icon-plus.svg').default} alt="plus"/> New Invoice</button> */}
            </div>
            
        </header>
        );
}