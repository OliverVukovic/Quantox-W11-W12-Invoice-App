import React from "react";
import Data from "../data.json"

const {invoice} = data;
const invoiceList = () => {

return (
    <div className="invoices">
        {Data.invoices.map((invoice) => (
        <Link to={`/${invoice.id}`}>
            <div key={invoice.id} className="item"> 
                <div className="invoice-date">{invoice.createdAt}</div>
                <div className="invoice-name">{invoice.clientName}</div>
                <div className="invoice-price"><span className="pound">$ </span>{invoice.price}</div>
                <div className="invoice-status">
                    <div className="circle"></div>
                    <p className="letter">{invoice.status}</p>
                </div>
                <img className="arrow right" src={require('../assets/icon-arrow-right.svg').default} alt="arrow-right"/>
            </div>
        </Link>
        ))};
    </div>
)}
