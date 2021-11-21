import React from "react";
import Data from "../data.json";



    const DataList = () => {
    return (

        // <div className="invoice-page light-version">
        <div className="column light-version">
            {Data.invoices.map((invoice) => (
            <div key={invoice.id} className="invoice-page"> 
    
            <div className="client-header">
                <div className="back-btn">
                    <button className="go-back"><img className="arrow-left" src={require('../assets/icon-arrow-left.svg').default} alt="arrow-left"/>Go back</button>
                </div>

                <div className="btn-up-bar">    
                    <div className="up-bar-left">
                        <p>Status</p>
                        <div className="invoice-status-2">
                            <div className="circle"></div>
                            <p className="letter">{invoice.status}</p>
                        </div>

                    </div>

                    <div className="up-bar-right">
                        <button className="no-color-btn-4">Edit</button>
                        <button className="delete-btn">Delete</button>
                        <button className="violet-btn-3">Mark as Paid</button>
                    </div>
                </div>
            </div>

            <div className="client-section">
                <div className="invoice-data">
                    <div className="inv-data-left">
                        <h4><span>#</span>{invoice.id}</h4>
                        <p>{invoice.description}</p>
                    </div>

                    <div className="inv-data-right">
                        <p>{invoice.street}</p>
                        <p>{invoice.city}</p>
                        <p>{invoice.postCode}</p>
                        <p>{invoice.country}</p>
                    </div>
                </div>

                <div className="sending-data">
                    <div className="date-payment-due">
                        <div>
                            <p>Invoice Data</p>
                            <h4>{invoice.createdAt}</h4>
                        </div>

                        <div>
                            <p>Payment Due</p>
                            <h4>{invoice.paymentDue}</h4>
                        </div>
                    </div>

                    <div className="bill-to">
                        <p>Bill To</p>
                        <h4>{invoice.clientName}</h4>
                        <p>{invoice.clientAddress.street}</p>
                        <p>{invoice.clientAddress.city}</p>
                        <p>{invoice.clientAddress.postCode}</p>
                        <p>{invoice.clientAddress.country}</p>
                    </div>

                    <div className="sent-to">
                        <p>Sent to</p>
                        <h4>{invoice.clientEmail}</h4>
                    </div>
                </div>

                <div className="payment-data">
                    <div className="item-list-names">
                        
                        <div className="item-name">
                            <p>Item Name</p>
                            <div className="no-border">
                            <p className="bold-text">{invoice.items.name}</p>
                            </div>
                        </div>

                        <div className="quantity">
                            <p>QTY.</p>
                            <div className="no-border">
                                <p className="bold">{invoice.items.quantity}</p>
                            </div>
                        </div>

                        <div className="price">
                            <p>Price</p>
                            <div className="no-border">
                                <p className="bold">£ {invoice.items.price}</p>
                            </div>
                        </div>

                        <div className="total">
                            <p>Total</p>
                            <div className="no-border">
                                <p className="bold-text">£ {invoice.items.total}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dark-part">
                    <p>Amount Due</p>
                    <h2 className="color-white">£ {invoice.total.toFixed(2)}</h2>
                </div>
                
            </div>
       
        </div>
                ))}
        </div>
        );
    }

    export default DataList