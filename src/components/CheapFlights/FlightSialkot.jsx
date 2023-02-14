import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import MetaData from "../Helmet";
import NavBar from "../Navbar";
import TripForm from "../TripForm";

import "./bookNow.css";
function BookNowFlightDetails() {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const data = location.state;
  const Sialkot =
    "Flights Flair is a leading travel agency that offers cheap flights to Sialkot Pakistan. If you're looking to travel from London Heathrow or from Manchester to Sialkot, we've got you covered. We offer a range of flights, so you can choose the one that best suits your needs.When it comes to flights to Sialkot from UK, Flights Flair is the best choice. We have a wide selection of London to Sialkot flights and from Manchester also, so you can easily find a flight that fits your schedule and budget. Whether you're looking for cheap flights or more luxurious options.If you're departing from London, we offer flights from London to Sialkot. From Manchester, we have flights to Sialkot Pakistan departing from Manchester Airport. No matter where you're flying from, we can help you find the best flights.Our selection of flights to Sialkot from UK includes options departing from London Heathrow and Manchester Airport. Whether you're looking for cheap flights to Sialkot from Uk or more luxurious options, we have something for everyone.At Flights Flair, we understand that the process of booking flights can be stressful, which is why we strive to make it as easy as possible for our customers. When you book flights to Sialkot with us, you can trust that you're getting the best deal possible. We also offer a range of services to make your journey as smooth as possible.At Flights Flair, we're committed to providing our customers with the best travel experience possible. That's why we offer a range of services to make your journey as smooth as possible. From booking your flights to Sialkot Pakistan to arranging accommodation and transportation at your destination, we've got you covered.So if you're looking for cheap flights to Sialkot from UK. Don't wait any longer. Start planning your trip to Sialkot from UK today with Flights Flair. ";
  const metaDesc =
    "We provide the best cheap flights to Sialkot Pakistan from UK at the most economical rates. Book your London to Sialkot flights with Flights Flair today!";
  const mainTitle = "Cheap Flights To Sialkot, Pakistan From UK";
  const bookingTitle =
    "Cheap Flights to Sialkot Pakistan From UK | Flightsflair";
  return (
    <div className="bookNow_wrapper">
      <title>{bookingTitle}</title>
      <MetaData title={bookingTitle} description={metaDesc} />
      <div style={{ backgroundColor: "white" }}>
        <NavBar />
      </div>
      <h3 className="title_wrapper">{mainTitle}</h3>
      <div className="field_text_wrapper">
        <p className="text_wrapper">{Sialkot}</p>
        <div className="field_wrapper">
          <TripForm
            fromImg={require("../../asstes/images/image4.jpg")}
            styling
          />
        </div>
      </div>
      <div style={{ marginTop: 80 }} />
      <Footer />
    </div>
  );
}

export default BookNowFlightDetails;
