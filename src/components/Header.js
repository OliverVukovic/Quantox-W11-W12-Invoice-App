import React from "react";
import { useState } from 'react';
import Filter from "./Filter";
import { useNavigate } from 'react-router-dom';
import New from "./New";


export default function Header(props) {

    const [ShowNewInvoice, setShowNewInvoice] = useState(false);


    const navigate = useNavigate();
        
    function newPage() {
        navigate(`/new`)
        // setShowNewInvoice(true)
    }

    const [show,setShow] = useState(false)
    const [arrow,setArrow] = useState(true)

    function showModal() {
        setShow(true);
        setArrow(false)
        if (show) {
            setArrow(true)
            setShow(false)
        }
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
                    
                    <button onClick={showModal} className="no-color-btn">Filter by status 
                        {arrow ?
                        <img className="arrow down" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/> : <img className="arrow down up" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/>
                        }
                    </button>

                    {/* <Filter /> */}
                    

                    {
                            show?
                        
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

                        :null
                    }

                </div>
                <button onClick={()=>setShowNewInvoice(true)} className="violet-btn">
                    <img className="btn-plus" src={require('../assets/icon-plus.svg').default} alt="plus"/> New Invoice
                </button>
                {/* <button onClick={() => setShowNewInvoice(true)} className="violet-btn"><img className="btn-plus" src={require('../assets/icon-plus.svg').default} alt="plus"/> New Invoice</button> */}
            </div>

            {
               ShowNewInvoice?
                <New />:null
            }
            
        </header>
        );
}