import React from "react";
import NavBar from "../Navbar";

function WhatWeDo() {
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
                WhatWeDo
            </h1>
        </div>
    );
}

export default WhatWeDo;
