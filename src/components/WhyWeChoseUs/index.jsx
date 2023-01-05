import React from "react";
import "./whywechose.css";
import { BsTrophyFill } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiWallet } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";

const WhyWeChoseUs = () => {
  return (
    <>
      <div className="why_chose_container">
        <div className="why_we_chose">
          <h4 className="why_chose_heading">Why Choose Us</h4>
          <div className="why_chose_card_box">
            <div className="why_chose_card">
              <div className="card_icon_box">
                <BsTrophyFill />
              </div>
              <h4 className="why_card_heading">Flexible Prices</h4>
              <p className="why_card_text">
                Price Beating Guarantee- Compare our flights with others and
                you'll get to know the difference!
              </p>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <FaCertificate />
              </div>
              <h4 className="why_card_heading">Workmanship Quality</h4>
              <p className="why_card_text">
                24/7 assistance is available for our customers. Our flight
                experts will assist you to their best!
              </p>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <FaHardHat />
              </div>
              <h4 className="why_card_heading">Low Deposits</h4>
              <p className="why_card_text">
                Start your travel with minimum deposit costs whcih will hep you
                to explore further!
              </p>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <SlLocationPin style={{ color: "white" }} />
              </div>
              <h4 className="why_card_heading">Multiple Location</h4>
              <p className="why_card_text">
                We provide multiple locations for you so you can start your
                journey from any of the mentioned ones.
              </p>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <BiWallet />
              </div>
              <h4 className="why_card_heading">Affordable Package</h4>
              <p className="why_card_text">
                Best fares all over UK. You won't be disheartened by our fares
                which are very fair according to your needs
              </p>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <MdLocalOffer />
              </div>
              <h4 className="why_card_heading">Special Offer</h4>
              <p className="why_card_text">
                Exclusive deals are available for you! Just visit or call us to
                get the specific details you are hoping for
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWeChoseUs;
