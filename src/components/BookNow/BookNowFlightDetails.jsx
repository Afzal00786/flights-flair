import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import MetaData from "../Helmet";
import NavBar from "../Navbar";
import TripForm from "../TripForm";

import "./bookNow.css";
function BookNowFlightDetails() {
  const responsive = window.innerWidth > 700;
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  let data = location.state;

  return (
    <div className="bookNow_wrapper">
      <MetaData title={data?.mainTitle} />

      <NavBar styling />
      <div className="title_wrapper">{data?.mainTitle}</div>
      <div className="field_text_wrapper">
        <div className="text_wrapper">{data?.description}</div>
        <div className="field_wrapper">
          <TripForm fromImg={data.fromImg} styling />
        </div>
      </div>
      <div style={{ marginTop: 80 }} />
      <Footer />
    </div>
  );
}

export default BookNowFlightDetails;
