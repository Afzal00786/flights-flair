import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import { bookCard } from "./BookCardDummy";

const Footer = () => {
  const navigation = useNavigate();
  return (
    <>
      <div className="footer_wrapper">
        <div className="footer_inner_box">
          <p className="footer_des_items">
            FlightsFlair LTD is a sub agent of ATOL Many of the flights and
            flight-inclusive holidays on this website are financially protected
            by the ATOL scheme. But ATOL protection does not apply to all
            holiday and travel services listed on this website. Please ask us to
            confirm what protection may apply to your booking. Please see our
            booking conditions for information, or for more information about
            financial protection and the ATOL Certificate go to
            www.atol.org.uk/ATOLCertificate.
          </p>
          <div>
            <div className="footer_contact">Contact Info</div>
            <div className="footer_ways_wrapper">
              <div className="iconStyling2">
                <PhoneEnabledIcon />
              </div>
              <div className="footer_phone">0208-638-6789</div>
            </div>
            <div className="footer_ways_wrapper">
              <div className="iconStyling2">
                <EmailIcon />
              </div>
              <div className="footer_email">support@flightsflair.com</div>
            </div>
          </div>
          <div className="footer_service_wraper">
            <div className="footer_contact">Our Services</div>
            <div
              className="footer_servives_items"
              onClick={() => navigation("/BookingTerms")}
            >
              Booking Terms
            </div>
            {bookCard.map((data, index) => {
              return (
                <div
                  key={index}
                  className="footer_servives_items"
                  onClick={() =>
                    navigation("/BookNowFlightDetails", { state: data })
                  }
                >
                  {data.mainTitle}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="f_social_box">
        <div className="footer_social_container">
          <div className="footer_copyrights">
            Copyright © 2022 Flights Flair
          </div>
          <div className="footer_socoal_icons">
            <a
              href="https://www.facebook.com/profile.php?id=100089312886036"
              target="_"
            >
              <div className="f_socail_items">
                <BsFacebook />
              </div>
            </a>
            <div className="f_socail_items">
              <AiOutlineTwitter />
            </div>
            <div className="f_socail_items">
              <AiOutlineYoutube />
            </div>
            <div className="f_socail_items">
              <FaInstagramSquare />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
