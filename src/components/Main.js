import React from "react";
// import Data from './data.json';
import Data from "./Data";
import { useState } from 'react';


export default function Main(props) {

    // const { invoice } = props; 
    const [showNewInvoice, setShowNewInvoice] = useState(false);


    return (
    <main className="light-version">

        <header>

            <div className="headline">
                <div className="headline-left">
                    <h1 className="invoices">Invoices</h1>
                    <p>No invoices</p>
                </div>
            </div>

            <div className="headline-right">
                <button className="no-color-btn">Filter by status <img className="arrow down" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/></button>
                <button onClick={() => setShowNewInvoice(true)} className="violet-btn"><img className="btn-plus" src={require('../assets/icon-plus.svg').default} alt="plus"/> New Invoice</button>
            </div>
            
        </header>


        <section>
            <Data />
                
                {/* {showInvoice ? */}
                    {/* <div key={invoice.id} className="item"> 

                        <div className="invoice-number"><span>#</span>{invoice.number}</div>
                        <div className="invoice-date">{invoice.date}</div>
                        <div className="invoice-name">{invoice.name}</div>
                        <div className="invoice-price"><span className="pound">$ </span>{invoice.price}</div>
                        <div className="invoice-status">
                            <div className="circle"></div>
                            <p className="letter">{invoice.status}</p>
                        </div>
                        <img className="arrow right" src={require('../assets/icon-arrow-right.svg').default} alt="arrow-right"/> </div> */}
                    {/* </div> : (
                        <div className="empty-page"> 
                        <img src={require('../assets/illustration-empty.svg').default} alt="empty-page"/>
                        <h3>There is nothing here</h3>
                        <p className="empty-page-text">Create an invoice by clicking the <span className="bold">New Invoice</span> button and get started</p>
                    </div>
                    )     */}
                {/* } */}

        </section>

    </main>
    );
}