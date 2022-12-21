import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

const NavBar = ({ styling }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleMobileClose = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      {mobileOpen && (
        <>
          <div style={{ display: "flex" }}>
            <div className="Mobille_navbar">
              <div className="nav_items1">Home</div>
              <div className="nav_items1">What We Do</div>
              <div className="nav_items1">Booking Terms</div>
              <div className="nav_items1">Flights</div>
              <div className="nav_items1">Contact Us</div>
            </div>
          </div>
        </>
      )}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "100%",
          flexDirection: "row-reverse",
          marginRight: 5,
        }}
      >
        <div className={styling ? "" : "nav_bar_wrapper"}>
          <div className="nav_bar_inner">
            <div className="nav_logo">FlightsFlair</div>
            <div className="nav_right_sec">
              <div className="nav_items">Home</div>
              <div className="nav_items">What We Do</div>
              <div className="nav_items">Booking Terms</div>
              <div className="nav_items">Flights</div>
              <div className="">Contact Us</div>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
          marginRight: 5,
          justifyContent: "space-between",
          height: 80,
          alignItems: "center",
        }}
      >
        <div className="nav_logo">FlightsFlair</div>
        {mobileOpen ? (
          <>
            <div onClick={handleMobileOpen}>
              <CloseIcon
                style={{
                  color: "black",
                  fontSize: 25,
                }}
              />
            </div>
          </>
        ) : (
          <>
            <div onClick={handleMobileClose}>
              <MenuIcon style={{ color: "black", fontSize: 25 }} />
            </div>
          </>
        )}
      </Box>
    </>
  );
};

export default NavBar;
