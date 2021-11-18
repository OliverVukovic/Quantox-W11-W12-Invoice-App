import React from "react";

export default function Client(props) {
    return (

        <div className="invoice-page">
    
            <div className="client-header">
                <div className="back-btn">
                    <button className="go-back"><img className="arrow-left" src={require('../assets/icon-arrow-left.svg').default} alt="arrow-left"/>Go back</button>
                </div>

                <div className="btn-up-bar">    
                    <div className="up-bar-left">
                        <p>Status</p>
                        <div className="invoice-status-2">
                            <div className="circle"></div>
                            <p className="letter">Pending</p>
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
                        <h4><span>#</span>XM9141</h4>
                        <p>Grafic Design</p>
                    </div>

                    <div className="inv-data-right">
                        <p>19 Union Terrace</p>
                        <p>London</p>
                        <p>EI 3EZ</p>
                        <p>United Kingdom</p>
                    </div>
                </div>

                <div className="sending-data">
                    <div className="date-payment-due">
                        <div>
                            <p>Invoice Data</p>
                            <h4>21 Aug 2021</h4>
                        </div>

                        <div>
                            <p>Payment Due</p>
                            <h4>20 Sep 2021</h4>
                        </div>
                    </div>

                    <div className="bill-to">
                        <p>Bill To</p>
                        <h4>Alex Grim</h4>
                        <p>84 Church Way</p>
                        <p>Bradford</p>
                        <p>BDI 9PB</p>
                        <p>United Kingdom</p>
                    </div>

                    <div className="sent-to">
                        <p>Sent to</p>
                        <h4>alexgrim@mail.com</h4>
                    </div>
                </div>

                <div className="payment-data">
                    <div className="item-list-names">
                        
                        <div className="item-name">
                            <p>Item Name</p>
                            <div className="no-border">
                                <p className="bold-text">Banner Design</p>
                            </div>
                        </div>

                        <div className="quantity">
                            <p>QTY.</p>
                            <div className="no-border">
                                <p className="bold">1</p>
                            </div>
                        </div>

                        <div className="price">
                            <p>Price</p>
                            <div className="no-border">
                                <p className="bold">$ 156.00</p>
                            </div>
                        </div>

                        <div className="total">
                            <p>Total</p>
                            <div className="no-border">
                                <p className="bold-text">$ 156.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dark-part">
                    <p>Amount Due</p>
                    <h2 className="color-white">$ 556.00</h2>
                </div>
                
            </div>
       
        </div>
        );
    }