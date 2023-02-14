import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import MetaData from "../Helmet";
import NavBar from "../Navbar";
import TripForm from "../TripForm";

import "./bookNow.css";
const FlightKarachi = () => {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const data = location.state;
  const metaDesc =
    "We provide the best cheap flights to Karachi Pakistan from UK at the most economical rates. Book your UK to Karachi flights with Flights Flair today!";
  const bookingTitle =
    "Cheap Flights to Karachi Pakistan From UK | Flightsflair";
  const mainTitle = "Cheap Flights To Karachi, Pakistan From UK";
  const karachi =
    "Are you looking for cheap flights to Karachi from Uk? Take a look at Flights Flair! We have some of the finest bargains on cheap flights to Karachi Pakistan from London and cheap flights from Manchester to Karachi. We have you covered.We also provide a number of direct flights from the UK to Karachi. We also provide direct flights from London to Karachi for your convenience.So, why should you fly with Flights Flair to Karachi? To begin with, we have a reputation for offering some of the finest cheap flights to Karachi from UK. Our travel specialists are continually on the lookout for the finest bargains and discounts, so you can be confident you're receiving the best value available.Flights Flair exclusively works with the industry's leading airlines, assuring a smooth and enjoyable flight for all of our passengers.If you're planning a vacation to Karachi, Pakistan, you'll want to discover the greatest airline price possible.Flights Flair specialises in finding cheap flights to Karachi Pakistan. We have several alternatives to pick from. And, because of our wide network of airlines and partners, we can provide some of the most competitive fares on the market.In addition flights to Karachi Pakistan, we also provide a number of direct UK to Karachi flights. If you're flying from London, we also provide direct flights from London to Karachi.So, why should you fly with Flights Flair to Karachi? We not only have some of the greatest prices on cheap flights from London to Karachi and other UK airports, but we also have a team of dedicated travel specialists ready to help you with all of your travel requirements. So don't wait any longer. Start planning your trip to today with Flights Flair. Book your cheap UK to Karachi flights with Flights Flair today!";

  return (
    <div className="bookNow_wrapper">
      <title>{bookingTitle}</title>
      <MetaData title={bookingTitle} description={metaDesc} />
      <div style={{ backgroundColor: "white" }}>
        <NavBar />
      </div>
      <h3 className="title_wrapper">{mainTitle}</h3>
      <div className="field_text_wrapper">
        <p className="text_wrapper">{karachi}</p>
        <div className="field_wrapper">
          <TripForm
            fromImg={require("../../asstes/images/image1.jpg")}
            styling
          />
        </div>
      </div>
      <div style={{ marginTop: 80 }} />
      <Footer />
    </div>
  );
};

export default FlightKarachi;
