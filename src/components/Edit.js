import React, { useState } from "react";
import { useLocation } from "react-router-dom";


export default function Edit(props) {

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

    return (
        <div className="edit light-version">

        <div className="left-side">
            <div className="headline-left">
                <h2 className="number-of-invoice">Edit <span> #</span>{invoice.id}</h2>
            </div>

            <div className="bill-form">
                <p className="violet-text">Bill From</p>
                <p>Street Address</p>
                <div className="light-border">
                    <p className="bold-text">{invoice.senderAddress.street}</p>
                </div>
                <div className="adress">

                    <div className="city">
                        <p>City</p>
                        <div className="light-border">
                            <p className="bold-text">{invoice.senderAddress.city}</p>
                        </div>
                    </div>

                    <div className="postcode">
                        <p>Post Code</p>
                        <div className="light-border">
                            <p className="bold-text">{invoice.senderAddress.postCode}</p>
                        </div>
                    </div>

                    <div className="country">
                        <p>Country</p>
                        <div className="light-border">
                            <p className="bold-text">{invoice.senderAddress.country}</p>
                        </div>
                    </div>

                </div>

                <p className="violet-text">Bill To</p>
                <p>Client's Name</p>
                <div className="light-border">
                    <p className="bold-text">{invoice.clientName}</p>
                </div>

                <p>Client's Email</p>
                <div className="light-border">
                    <p className="bold-text">{invoice.clientEmail}</p>
                </div>

                <p>Street Adress</p>
                <div className="light-border">
                    <p className="bold-text">{invoice.clientAddress.street}</p>
                </div>

                <div className="adress">

                    <div className="city">
                        <p>City</p>
                        <div className="light-border">
                            <p className="bold-text">{invoice.clientAddress.city}</p>
                        </div>
                    </div>

                    <div className="postcode">
                        <p>Post Code</p>
                        <div className="light-border">
                            <p className="bold-text">{invoice.clientAddress.postCode}</p>
                        </div>
                    </div>

                    <div className="country">
                        <p>Country</p>
                        <div className="light-border">
                            <p className="bold-text">{invoice.clientAddress.country}</p>
                        </div>
                    </div>
                    
                </div>

                <div className="invoice-date">
                    <div className="date">
                        <p>Invoice Date</p>
                        <div className="light-border">
                            <p className="bold-text"></p>
                            <img className="calendar" src={require('../assets/icon-calendar.svg').default} alt="calendar"/>
                        </div>
                    </div>

                    <div className="date">
                        <p>Payment Terms</p>
                        <div onClick={openTerms} className="light-border">
                            <p className="bold-text"></p>
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
                    <p className="bold-text">{invoice.description}</p>
                </div>

                <h3 className="gray">Item List</h3>

                <div className="item-list-names">
                            
                            <div className="item-name">
                                <p>Item Name</p>

                            </div>

                            <div className="quantity">
                                <p>Qty.</p>
     
                            </div>

                            <div className="price">
                                <p>Price</p>

                            </div>

                            <div className="total">
                                <p>Total</p>

                            </div>

                            {/* phantom div */}
                            <div style={{width:'13px', height:'16px',backgroundColor:'transparent'}}></div>

                        </div>

                {invoice.items.map((item, index)=>{
                    return (
                        <div className="item-list-names">
                            
                            <div className="item-name">
 
                                <div className="light-border">
                                    <p className="bold-text">{item.name}</p>
                                </div>
                            </div>

                            <div className="quantity">

                                <div className="light-border">
                                    <p className="bold-text">{item.quantity}</p>
                                </div>
                            </div>

                            <div className="price">

                                <div className="light-border">
                                    <p className="bold-text">{item.price.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="total">

                                <div className="no-border">
                                    <p className="bold">{(item.quantity * item.price).toFixed(2)}</p>
                                </div>
                            </div>

                            <img className="trash" src={require('../assets/icon-delete.svg').default} alt="delete"/>

                        </div>  
                    )
                })}

                <button className="no-color-btn-2">+ Add New Item</button>

            </div>

            <div className="buttons-down-2">
                
                <div className="buttons-right">
                    <button 
                        onClick={props.closeEdit}
                        className="no-color-btn-3">Cancel
                    </button>


                    <button className="violet-btn-2">Save Changes</button>
                </div>    
            </div>

        </div>

    </div>
);
}