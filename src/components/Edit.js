import React from "react";


export default function Edit(props) {

    return (
        <div className="edit light-version">

        <div className="left-side">
            <div className="headline-left">
                <h2 className="invoices">Edit <span>#</span></h2>
            </div>

            <div className="bill-form">
                <p className="violet-text">Bill From</p>
                <p>Street Address</p>
                <div className="light-border">
                    <p className="bold-text">19 Union Terrace</p>
                </div>
                <div className="adress">

                    <div className="city">
                        <p>City</p>
                        <div className="light-border">
                            <p className="bold-text"></p>
                        </div>
                    </div>

                    <div className="postcode">
                        <p>Post Code</p>
                        <div className="light-border">
                            <p className="bold-text"></p>
                        </div>
                    </div>

                    <div className="country">
                        <p>Country</p>
                        <div className="light-border">
                            <p className="bold-text"></p>
                        </div>
                    </div>

                </div>

                <p className="violet-text">Bill To</p>
                <p>Client's Name</p>
                <div className="light-border">
                    <p className="bold-text"></p>
                </div>

                <p>Client's Email</p>
                <div className="light-border">
                    <p className="bold-text"></p>
                </div>

                <p>Street Adress</p>
                <div className="light-border">
                    <p className="bold-text"></p>
                </div>

                <div className="adress">

                    <div className="city">
                        <p>City</p>
                        <div className="light-border">
                            <p className="bold-text"></p>
                        </div>
                    </div>

                    <div className="postcode">
                        <p>Post Code</p>
                        <div className="light-border">
                            <p className="bold-text"></p>
                        </div>
                    </div>

                    <div className="country">
                        <p>Country</p>
                        <div className="light-border">
                            <p className="bold-text"></p>
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
                        <div className="light-border">
                            <p className="bold-text"></p>
                            <img className="arrow down" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/>
                        </div>
                    </div>
                </div>

                <p>Project Description</p>
                <div className="light-border">
                    <p className="bold-text">e.g. Graphic Design Service</p>
                </div>

                <h3 className="gray">Item List</h3>

                <div className="item-list-names">
                    
                    <div className="item-name">
                        <p>Item Name</p>
                        <div className="light-border">
                            <p className="bold-text"></p>
                        </div>
                    </div>

                    <div className="quantity">
                        <p>Qty.</p>
                        <div className="light-border">
                            <p className="bold-text"></p>
                        </div>
                    </div>

                    <div className="price">
                        <p>Price</p>
                        <div className="light-border">
                            <p className="bold-text"></p>
                        </div>
                    </div>

                    <div className="total">
                        <p>Total</p>
                        <div className="no-border">
                            <p className="bold">155</p>
                        </div>
                    </div>

                    <img className="trash" src={require('../assets/icon-delete.svg').default} alt="delete"/>

                </div>

                <button className="no-color-btn-2">+ Add New Item</button>

            </div>

            <div className="buttons-down-2">
                
                <div className="buttons-right">
                <button className="no-color-btn-3">Cancel</button>
                    <button className="violet-btn-2">Save Changes</button>
                </div>    
            </div>

            
        </div>

    </div>
);
}