import React from "react";
import NavBar from "../Navbar";

function BookingTerms() {
    return (
        <div>
            <NavBar />
            <h1
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 500,
                }}
            >
                BookingTerms
            </h1>
        </div>
    );
}

export default BookingTerms;
