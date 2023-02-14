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
  const Lahore =
    "Flights Flair is a top-rated travel agency specializing in cheap flights to lahore Pakistan. If you're looking for affordable airfare from London to Lahore, we've got you covered. Our team of experienced travel agents can help you find the best deals on cheap flights to Lahore Pakistan from the UK, whether you're departing from London, Manchester, or any other major airport.If you're looking for direct flights to Lahore from the UK, we can help you find them. At Flights Flair, we have access to a wide range of airlines and can help you find the most convenient and cost-effective route to Lahore. Whether you're looking for nonstop flights or connecting flights with short layovers, we can help you find the best option.If you're based in London and looking for cheap flights to Lahore Pakistan, we can help you find great deals from all the major airports. Whether you're flying from Heathrow, Gatwick, or City Airport. We can also help you find cheap flights to Lahore from Manchester and cheap flights to Lahore from UK and other major cities in the UK.At Flights Flair, we're committed to helping our clients find the best deals on cheap flights to Lahore from UK. We work with a wide range of airlines to bring you the best prices and the most convenient routes.So if you're looking for cheap flights to Lahore from UK, look no further than Flights Flair. Our team of experienced travel agents is ready to help you find the best deals on flights to Lahore from London, Manchester, and other major cities in the UK. With our expertise and access to a wide range of airlines, we can help you find the perfect flight at the perfect price.So don't wait any longer. Start planning your trip to Lahore today with Flights Flair. Whether you're looking for cheap UK to lahore flights or direct Uk to Lahore flights, we've got you covered. With our wide selection of flights and exceptional customer service, you can trust us. Book your cheap flights to Lahore from UK with Flights Flair today!";
  const metaDesc =
    "We provide the best cheap flights to Lahore Pakistan from UK at the most economical rates. Book your UK to Lahore flights with Flights Flair today!";
  const mainTitle = "Cheap Flights To Lahore, Pakistan From UK";
  const bookingTitle =
    "Cheap Flights to Lahore Pakistan From UK | Flightsflair";
  return (
    <div className="bookNow_wrapper">
      <title>{bookingTitle}</title>
      <MetaData title={bookingTitle} description={metaDesc} />
      <div style={{ backgroundColor: "white" }}>
        <NavBar />
      </div>
      <h3 className="title_wrapper">{mainTitle}</h3>
      <div className="field_text_wrapper">
        <p className="text_wrapper">{Lahore}</p>
        <div className="field_wrapper">
          <TripForm
            fromImg={require("../../asstes/images/image7.jpg")}
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
