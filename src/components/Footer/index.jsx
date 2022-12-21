import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="footer_inner_box">
          <div className="footer_des_items">
            FlightsFlair LTD is a sub agent of ATOL Many of the flights and
            flight-inclusive holidays on this website are financially protected
            by the ATOL scheme. But ATOL protection does not apply to all
            holiday and travel services listed on this website. Please ask us to
            confirm what protection may apply to your booking. Please see our
            booking conditions for information, or for more information about
            financial protection and the ATOL Certificate go to
            www.atol.org.uk/ATOLCertificate.
          </div>
          <div>
			<div className="footer_contact">Contact Info</div>
			<div className="footer_phone">0208-638-6789</div>
			<div className="footer_email">sales@flightsflair.com</div>
		  </div>
          <div className="footer_service_wraper">
		  <div className="footer_contact">Our Service</div>
		  <div className="footer_servives_items">Booking Terms</div>
		  <div className="footer_servives_items">Cheap Flights to Peshawar, Pakistan from UK</div>
		  <div className="footer_servives_items">Cheap Flights to Islamabad, Pakistan from UK</div>
		  <div className="footer_servives_items">Cheap Flights to Karachi, Pakistan from UK</div>
		  <div className="footer_servives_items">Cheap Flights to Sialkot, Pakistan from UK </div>
		  <div className="footer_servives_items">Cheap Flights to Lahore, Pakistan from UK </div>
		  </div>
        </div>
      </div>
      <div className="f_social_box">
        <div className="footer_social_container">

		</div>
      </div>
    </>
  );
};

export default Footer;
