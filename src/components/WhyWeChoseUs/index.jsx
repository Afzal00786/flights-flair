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
                You won't find a better price than ours! Compare our flights
                with those of others and find out for yourself!
              </p>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <FaCertificate />
              </div>
              <h4 className="why_card_heading">Workmanship Quality</h4>
              <p className="why_card_text">
                We are available to assist our clients at any time. You can
                count on our flight specialists to help you every step of the
                way!
              </p>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <FaHardHat />
              </div>
              <h4 className="why_card_heading">Low Deposits</h4>
              <p className="why_card_text">
                Don't forget to start your journey with a little deposit, as
                this will allow you to explore further!
              </p>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <SlLocationPin style={{ color: "white" }} />
              </div>
              <h4 className="why_card_heading">Multiple Location</h4>
              <p className="why_card_text">
                We provide various points of interest so you may begin your
                adventure from any of the ones listed above.
              </p>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <BiWallet />
              </div>
              <h4 className="why_card_heading">Affordable Package</h4>
              <p className="why_card_text">
                Best fares around the UK. You will not be disappointed by our
                fares, which are quite reasonable in relation to your demands.
              </p>
            </div>
            <div className="why_chose_card">
              <div className="card_icon_box">
                <MdLocalOffer />
              </div>
              <h4 className="why_card_heading">Special Offer</h4>
              <p className="why_card_text">
                You may take advantage of exclusive offers! Simply visit or
                contact us to obtain the particular information you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWeChoseUs;
