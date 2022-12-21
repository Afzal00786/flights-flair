import React from "react";
import NavBar from "../Navbar";

function ContactUs() {
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
                ContactUs
            </h1>
        </div>
    );
}

export default ContactUs;
