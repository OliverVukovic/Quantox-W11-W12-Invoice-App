import React from "react";


export default function Delete(props) {

    return (

        <div className="delete-confirmation light-version">
            <div className="delete-modal">
                <h2>Confirm Deletion</h2>
                <p>Are you sure you want to delete invoice <span>#</span>? This action cannot be undone.</p>
                <div className="btn-right">
                    <button className="no-color-btn-4">Cancel</button>
                    <button className="delete-btn">Delete</button>
                </div>

            </div>
        </div>
);
}