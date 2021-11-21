import React from "react";
import Data from "../data.json";

// const {invoice} = data;
// const invoiceList = () => {

const DataList = () => {

        return (
            <div className="invoices">
                {Data.invoices.map((invoice) => (
                    <div key={invoice.id} className="item"> 
                        <div className="invoice-number"><span>#</span>{invoice.id}</div>
                        <div className="invoice-date">{invoice.createdAt}</div>
                        <div className="invoice-name">{invoice.clientName}</div>
                        <div className="invoice-price"><span className="pound">£ </span>{invoice.total.toFixed(2)}</div>
                        <div className="invoice-status">
                            <div className="circle"></div>
                            <p className="letter">{invoice.status}</p>
                        </div>
                        <img className="arrow right" src={require('../assets/icon-arrow-right.svg').default} alt="arrow-right"/>
                    </div>
                ))}
            </div>
        )
    }


export default DataList


