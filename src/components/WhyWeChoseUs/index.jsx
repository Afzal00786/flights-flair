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
          <div className="why_chose_heading">Why Choose Us</div>
          <div className="why_chose_card_box">
            <div className="why_chose_card">
              <div className="card_icon_box">
                <BsTrophyFill />
              </div>
              <div className="why_card_heading">Flexible Prices</div>
              <div className="why_card_text">
                Price Beating Guarantee- Compare our flights with others and
                you'll get to know the difference!
              </div>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <FaCertificate />
              </div>
              <div className="why_card_heading">Workmanship Quality</div>
              <div className="why_card_text">
			  24/7 assistance is available for our customers. Our flight experts will assist you to their best!
              </div>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <FaHardHat />
              </div>
              <div className="why_card_heading">Low Deposits</div>
              <div className="why_card_text">
			  Start your travel with minimum deposit costs whcih will hep you to explore further!
              </div>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <SlLocationPin style={{color:"white"}}  />
              </div>
              <div className="why_card_heading">Multiple Location</div>
              <div className="why_card_text">
			  We provide multiple locations for you so you can start your journey from any of the mentioned ones.
              </div>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <BiWallet />
              </div>
              <div className="why_card_heading">Affordable Package</div>
              <div className="why_card_text">
			  Best fares all over UK. You won't be disheartened by our fares which are very fair according to your needs
              </div>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <MdLocalOffer />
              </div>
              <div className="why_card_heading">Special Offer</div>
              <div className="why_card_text">
			  Exclusive deals are available for you! Just visit or call us to get the specific details you are hoping for
              </div>
            </div>
     
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWeChoseUs;
