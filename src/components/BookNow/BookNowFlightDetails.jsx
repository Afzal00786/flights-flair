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
  let data = location.state;

  return (
    <div className="bookNow_wrapper">
      <title>{data?.bookingTitle}</title>
      <MetaData title={data?.bookingTitle} description={data?.metaDesc} />
      <div style={{ backgroundColor: "white" }}>
        <NavBar />
      </div>
      <h3 className="title_wrapper">{data?.mainTitle}</h3>
      <div className="field_text_wrapper">
        <p className="text_wrapper">{data?.description}</p>
        <div className="field_wrapper">
          <TripForm
            fromImg={data.fromImg}
            width={data.width}
            height={data.height}
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
