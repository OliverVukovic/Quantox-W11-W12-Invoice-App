import React from "react";

export default function Main(props) {
    return (
    <main>

        <header>

            <div className="headline">
                <div className="headline-left">
                    <h1 className="invoices">Invoices</h1>
                    <p>There are <span> *7* </span> total invoices</p>
                </div>
            </div>

            <div className="headline-right">
                <button className="no-color-btn">Filter by status <img className="arrow down" src={require('../assets/icon-arrow-down.svg').default} alt="arrow-down"/></button>
                <button className="violet-btn"><img className="btn-plus" src={require('../assets/icon-plus.svg').default} alt="plus"/> New Invoice</button>
            </div>
            
        </header>

        <section>

            <div className="item">
                <div className="invoice-number"><span>#</span></div>
                <div className="invoice-date"></div>
                <div className="invoice-name"></div>
                <div className="invoice-price"><span className="pound">$ </span></div>
                <div className="invoice-status">
                    <div className="circle"></div>
                    <p className="letter"></p>
                </div>
                <img className="arrow right" src={require('../assets/icon-arrow-right.svg').default} alt="arrow-right"/>
            </div>
          
        </section>


{/*           
              Filter by status
              Draft
              Pending
              Paid
              
              New Invoice

              <!-- No invoices -->
              There is nothing here
              Create an invoice by clicking the New Invoice button and get started
              <!-- No invoices end -->

              <!-- Create new invoice form -->
              Go back

              New Invoice
              
              Bill From
              
              Street Address
              City
              Post Code
              Country
              
              Bill To
              
              Client's Name
              Client's Email
              e.g. email@example.com
              Street Address
              City
              Post Code
              Country
              
              Invoice Date
              
              Payment Terms
              Net 1 day
              Net 7 days
              Net 14 days
              Net 30 days
              
              Project Description
              e.g. Graphic Design Service
              
              Item List
              
              Item Name
              Qty.
              Price
              Total
              
              Add New Item
              
              Discard
              Save as Draft
              Save & Send
              <!-- Create new invoice end --> */}

    </main>
    );
}