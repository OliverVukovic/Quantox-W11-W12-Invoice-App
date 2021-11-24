import React, { useState } from "react";
import { useLocation } from "react-router-dom";


export default function New(props) {

    let invoice = useLocation().state;

    const [terms, setTerms] = useState(false)
    const [arrow,setArrow] = useState(true)

    function openTerms() {
        setTerms(true);
        setArrow(false)
        if (terms) {
            setArrow(true)
            setTerms(false)
        }
    }

    // const name = document.getElementsByClassName


    return (
        <div className="new light-version">

            <div className="left-side">
                <div className="headline-left">
                    <h1 className="invoices">New Invoice</h1>
                </div>

                <div className="bill-form">
                    <p className="violet-text">Bill From</p>
                    <p>Street Address</p>
                    <div className="light-border">
                        <input className="bold-text" type="text"/>
                    </div>
                    
                    <div className="adress">

                        <div className="city">
                            <p>City</p>
                            <div className="light-border">
                            <input className="bold-text" type="text"/>
                            </div>
                        </div>

                        <div className="postcode">
                            <p>Post Code</p>
                            <div className="light-border">
                            <input className="bold-text" type="text"/>
                            </div>
                        </div>

                        <div className="country">
                            <p>Country</p>
                            <div className="light-border">
                            <input className="bold-text" type="text"/>
                            </div>
                        </div>

                    </div>

                    <p className="violet-text">Bill To</p>
                    <p>Client's Name</p>
                    <div className="light-border">
                        <input className="bold-text" type="text"/>
                    </div>

                    <p>Client's Email</p>
                    <div className="light-border">
                        <input className="bold-text" type="text"/>
                    </div>

                    <p>Street Adress</p>
                    <div className="light-border">
                        <input className="bold-text" type="text"/>
                    </div>

                    <div className="adress">

                        <div className="city">
                            <p>City</p>
                            <div className="light-border">
                                <input className="bold-text" type="text"/>
                            </div>
                        </div>

                        <div className="postcode">
                            <p>Post Code</p>
                            <div className="light-border">
                                <input className="bold-text" type="text"/>
                            </div>
                        </div>

                        <div className="country">
                            <p>Country</p>
                            <div className="light-border">
                                <input className="bold-text" type="text"/>
                            </div>
                        </div>
                        
                    </div>

                    <div className="invoice-date">
                        <div className="date">
                            <p>Invoice Date</p>
                            <div className="light-border">
                            <input className="bold-text" type="date"/>
                                {/* <img className="calendar" src={require('../assets/icon-calendar.svg').default} alt="calendar"/> */}
                            </div>
                        </div>

                        <div className="date">
                        <p>Payment Terms</p>
                        <div onClick={openTerms} className="light-border pay-terms">
                        <p className="bold-text">Net  Days</p>
                            {arrow ?
                            <img className="arrow down" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/>
                            : <img className="arrow down up" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/>
                            }

                        </div>
                        { 
                                terms ?
                                
                            <div className="filter-2">
                        
                                <label className="container-1">
                                <p className="bold-text">Net 1 Day</p>
                                </label>
                                <label className="container-1">
                                <p className="bold-text">Net 7 Days</p>
                                </label>
                                <label className="container-1">
                                <p className="bold-text">Net 14 Days</p>
                                </label>
                                <label className="container-1">
                                <p className="bold-text">Net 30 Days</p>
                                </label>
                            
                            </div>

                                :null

                            }
                    </div>
                </div>

                    <p>Project Description</p>
                    <div className="light-border">
                        <input className="bold-text" type="text"/>
                    </div>

                    <h3 className="gray">Item List</h3>

                    <div className="item-list-names">
                        
                        <div className="item-name">
                            <p>Item Name</p>
                            <div className="light-border">
                                <input className="bold-text" type="text"/>
                            </div>
                        </div>

                        <div className="quantity">
                            <p>Qty.</p>
                            <div className="light-border">
                                <input className="bold-text" type="text"/>
                            </div>
                        </div>

                        <div className="price">
                            <p>Price</p>
                            <div className="light-border">
                                <input className="bold-text" type="text"/>
                            </div>
                        </div>

                        <div className="total">
                            <p>Total</p>
                            <div className="no-border">
                                <input className="bold" type="text"/>
                            </div>
                        </div>

                        <img className="trash" src={require('../assets/icon-delete.svg').default} alt="delete"/>

                    </div>

                    <button className="no-color-btn-2">+ Add New Item</button>

                </div>

                <div className="buttons-down">

                    <button className="no-color-btn-3"
                        onClick={props.closeNew}
                    >Discard</button>

                    <div className="buttons-right">
                        <button className="draft-btn">Save as Draft</button>
                        <button className="violet-btn-2">Save & Send</button>
                    </div>

                </div>
                
            </div>
        
        </div>
    );
}


