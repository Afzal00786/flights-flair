import React, { useState } from "react";
import NavBar from "../Navbar";
import Grid from "@mui/material/Grid";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";
import "./contactUs.css";
import Footer from "../Footer";
import ContactUsForm from "./ContactUsForm";
function WhatWeDo() {
  return (
    <div>
      <NavBar />
      <div className="booking_terms_upper_Image">
        <div className="booking_terms_Inner_Image">
          <div className="booking_text_styling">Contact Us</div>
        </div>
      </div>

      <Grid container md={12} xs={12} className="booking_terms_wrapper">
        <Grid
          style={{ margin: 10 }}
          item
          md={5}
          xs={12}
          className="booking_terms_left_wrapper"
        >
          <div>
            <div className="contact_us_header_text">Get in touch with us</div>
            <div className="hear_from_you_text">we'd love to hear from you</div>
            <div className="contact_us_wrapper">
              <div className="contact_us_ways_wrapper">
                <div className="iconStyling">
                  <PhoneEnabledIcon />
                </div>
                <div className="contactUsWaysText">
                  <div className="call_us_text">Call us</div>
                  <div className="call_us_phone">0308234411661</div>
                </div>
              </div>
              <div className="contact_us_ways_wrapper">
                <div className="iconStyling">
                  <EmailIcon />
                </div>
                <div className="contactUsWaysText">
                  <div className="call_us_text">Email us</div>
                  <div className="call_us_phone">sales@sastiparwaaz.com</div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          style={{ margin: 10 }}
          item
          md={5}
          xs={12}
          //   className="booking_terms_right_wrapper"
        >
          <ContactUsForm />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default WhatWeDo;
