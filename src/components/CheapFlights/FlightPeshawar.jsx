import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import MetaData from "../Helmet";
import NavBar from "../Navbar";
import TripForm from "../TripForm";

import "./bookNow.css";
function FlightPeshawar() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const Peshawar =
    "Are you planning a trip to Peshawar, Pakistan and looking for the best deal? Look no further than Flights Flair, your trusted travel agency for cheap flights to Peshawar from UK. We offer a wide range of options for travellers, including London to Peshawar cheap flights and cheap flights to Heathrow.No matter where you are starting from in the UK, Flights Flair has a flight option for you. We offer flights from Manchester to Peshawar, making it easy for travellers in the north of England. We also have a variety of London to Peshawar flights available, ensuring that travellers from the south of England can easily visit Peshawar.If you're looking for the best deal on airfare, be sure to check out our cheap flights to Peshawar from UK. We offer competitive prices and great value, so you can plan your trip to Peshawar without breaking the bank.One popular option for travellers is the London Heathrow to Peshawar flights. These flights, available at affordable prices through Flights Flair, make it easy for travellers in the capital to visit the vibrant city of Peshawar. We also offer flights from Manchester to Peshawar, giving travellers in the north of England the opportunity to explore this historic city.In addition to our direct flights, we also have a variety of cheap flight options from London to Peshawar. No matter where you are starting from in the UK. We understand that airfare can be a major expense when planning a trip, which is why we offer the best deals on flights to Peshawar Pakistan to ensure that you can plan your dream vacation without breaking the bank.So why wait? Start planning your trip to Peshawar with Flights Flair today. With a variety of flights to Peshawar Pakistan available, including cheap flights from London and Manchester, we have the perfect option for your travel needs. Book your cheap flights to Peshawar from UK with Flights Flair now.";

  const metaDesc =
    "We provide the best cheap flights to Peshawar Pakistan from UK at the most economical rates. Book your Manchester to Peshawar flights with Flights Flair today!";
  const mainTitle = "Cheap Flights To Peshawar, Pakistan From UK";
  const bookingTitle =
    "Cheap Flights to Peshawar Pakistan From UK | Flightsflair";
  return (
    <div className="bookNow_wrapper">
      <title>{bookingTitle}</title>
      <MetaData title={bookingTitle} description={metaDesc} />
      <div style={{ backgroundColor: "white" }}>
        <NavBar />
      </div>
      <h3 className="title_wrapper">{mainTitle}</h3>
      <div className="field_text_wrapper">
        <p className="text_wrapper">{Peshawar}</p>
        <div className="field_wrapper">
          <TripForm
            fromImg={require("../../asstes/images/image5.jpg")}
            styling
          />
        </div>
      </div>
      <div style={{ marginTop: 80 }} />
      <Footer />
    </div>
  );
}

export default FlightPeshawar;
