import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import MetaData from "../Helmet";
import NavBar from "../Navbar";
import TripForm from "../TripForm";

import "./bookNow.css";
function FlightIslamabad() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const mainTitle = "Cheap Flights To Islamabad, Pakistan From UK";
  const metaDesc =
    "We provide the best cheap flights to Islamabad Pakistan from UK at the most economical rates. Book your UK to Islamabad flights with Flights Flair today!";
  const bookingTitle =
    "Cheap Flights to Islamabad Pakistan From UK | Flightsflair";
  const Islamabad =
    "Flights Flair is a travel agency that specializes in finding cheap flights to Islamabad Pakistan. If you're looking to fly from London to Islamabad. We also have London to Islamabad cheap flights available.Are you looking for cheap flights to Islamabad Pakistan, from the UK? Look no further than Flights Flair Travel Agency! We have a variety of options for you to choose from, including London to Islamabad cheap flights and direct flights.If you're flying out of Heathrow, we have several options. Our Virgin Airlines Heathrow to Islamabad flight is a popular choice, and we also offer direct flights from Heathrow And Manchester to Islamabad.These direct flights make the journey from London to Islamabad quick and hassle-free and making it easy for travellers from the north of England.If you're looking for direct UK to Islamabad flights, we have several options to choose from. Our Heathrow to Islamabad cheap flights are a great choice for those looking for a budget-friendly option. For those departing from London Gatwick, we have several options including cheap flights to Pakistan from London to Islamabad. If you're departing from Manchester, we also have a cheap flight Manchester to Islamabad Pakistan available.If you're looking for UK to Islamabad flights, we have flights from UK to Islamabad available. Our direct flights to Islamabad Pakistan from the UK are a popular choice for those looking for a nonstop journey.At Flights Flair Travel Agency, we make it easy to find the perfect flight for your trip to Islamabad. Book with us and experience the best in affordable and convenient travel.We have a range of options for cheap UK to Islamabad flights. Whether you're flying from London Heathrow, Manchester, or London Gatwick, we can help you find the cheapest flights. So why wait? Book your flights to Pakistan with Flights Flair today and start planning your next adventure!";

  return (
    <div className="bookNow_wrapper">
      <title>{bookingTitle}</title>
      <MetaData title={bookingTitle} description={metaDesc} />
      <div style={{ backgroundColor: "white" }}>
        <NavBar />
      </div>
      <h3 className="title_wrapper">{mainTitle}</h3>
      <div className="field_text_wrapper">
        <p className="text_wrapper">{Islamabad}</p>
        <div className="field_wrapper">
          <TripForm
            fromImg={require("../../asstes/images/image6.webp")}
            styling
          />
        </div>
      </div>
      <div style={{ marginTop: 80 }} />
      <Footer />
    </div>
  );
}

export default FlightIslamabad;
