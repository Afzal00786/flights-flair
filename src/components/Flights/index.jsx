import React from "react";
import NavBar from "../Navbar";

function Flights() {
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
                Flights
            </h1>
        </div>
    );
}

export default Flights;
