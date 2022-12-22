import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const NavBar = ({ styling }) => {
  const [flights, setFlights] = useState(false);
  const handlePopoverOpen = (event) => {
    setFlights(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setFlights(null);
  };

  const navigation = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleOpenModal = () => {
    navigation("/Flights");
  };

  const handleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleMobileClose = () => {
    setMobileOpen(!mobileOpen);
  };
  const karachi =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";
  const Lahore =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const Islamabad =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const Peshawar =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const Sialkot =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";
  const bookCard = [
    {
      id: 1,
      description: karachi,
      mainTitle: "Cheap Flights To Karachi, Pakistan From UK",
      fromImg:
        "https://flightsflair.com/wp-content/uploads/2022/10/kltyaksucnk_400x500-768x576.jpg",
    },
    {
      id: 2,
      description: Lahore,
      mainTitle: "Cheap Flights To Lahore, Pakistan From UK",
      fromImg:
        "https://sastiparwaaz.com/wp-content/uploads/2022/10/pbrqvukjqf8_400x500-e1666871984683.jpg",
    },
    {
      id: 3,
      description: Islamabad,
      mainTitle: "Cheap Flights To Islamabad, Pakistan From UK",
      fromImg:
        "https://sastiparwaaz.com/wp-content/uploads/2022/10/qasim-nagori-1x3qakkpzZU-unsplash-1.jpg",
    },
    {
      id: 4,
      description: Peshawar,
      mainTitle: "Cheap Flights To Peshawar, Pakistan From UK",
      fromImg:
        "https://sastiparwaaz.com/wp-content/uploads/2022/10/licensed-image-_1_.jpg",
    },
    {
      id: 5,
      description: Sialkot,
      mainTitle: "Cheap Flights To Sialkot, Pakistan From UK",
      fromImg:
        "https://flightsflair.com/wp-content/uploads/2022/10/nnzkznywhau_400x500.jpg",
    },
  ];
  return (
    <>
      {mobileOpen && (
        <>
          <div style={{ display: "flex" }}>
            <div className="Mobille_navbar">
              <div onClick={() => navigation("/")} className="nav_items1">
                Home
              </div>
              <div
                onClick={() => navigation("/WhatWeDo")}
                className="nav_items1"
              >
                What We Do
              </div>
              <div
                onClick={() => navigation("/BookingTerms")}
                className="nav_items1"
              >
                Booking Terms
              </div>
              <div className="nav_items1">Flights</div>
              <div
                onClick={() => navigation("/ContactUs")}
                className="nav_items1"
              >
                Contact Us
              </div>
            </div>
          </div>
        </>
      )}

      {flights ? (
        <>
          <div onMouseLeave={handlePopoverClose} className="drowpDownBoxStyle">
            <div className="box"></div>
            {bookCard.map((data) => {
              return (
                <div
                  className="dropdownTextContainer"
                  onClick={() =>
                    navigation("/BookNowFlightDetails", { state: data })
                  }
                >
                  <div className="dropdownText">{data.mainTitle}</div>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "100%",
          flexDirection: "row-reverse",
          marginRight: 5,
        }}
      >
        <div className={styling ? "nav_bar" : "nav_bar_wrapper"}>
          <div className="nav_bar_inner">
            <div className="nav_logo">FlightsFlair</div>
            <div className="nav_right_sec">
              <div className="nav_items" onClick={() => navigation("/")}>
                Home
              </div>
              <div
                className="nav_items"
                onClick={() => navigation("/WhatWeDo")}
              >
                What We Do
              </div>
              <div
                className="nav_items"
                onClick={() => navigation("/BookingTerms")}
              >
                Booking Terms
              </div>
              <div
                style={{ display: "flex", flexDirection: "row" }}
                className="nav_items"
                onMouseEnter={handlePopoverOpen}
                onClick={handleOpenModal}
              >
                <div className="overlay"></div>
                <div className="FiightText">
                  Flights
                  <div style={{ height: 10, marginBottom: 5 }}>
                    <ArrowDropDownIcon />
                  </div>
                </div>
              </div>
              <div
                className="nav_items"
                onClick={() => navigation("/ContactUs")}
              >
                Contact Us
              </div>
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
          paddingLeft: 3,
          paddingRight: 3,
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
