import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const karachi =
  "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";
const Lahore =
  "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

const Islamabad =
  "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

const Peshawar =
  "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

const Sialkot =
  "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";
const bookCard = [
  {
    id: 1,
    description: karachi,
    mainTitle: "Cheap Flights To Karachi, Pakistan From UK",
    fromImg:
      "https://flightsflair.com/wp-content/uploads/2022/10/kltyaksucnk_400x500-768x576.jpg",
  },
  {
    id: 2,
    description: Lahore,
    mainTitle: "Cheap Flights To Lahore, Pakistan From UK",
    fromImg:
      "https://sastiparwaaz.com/wp-content/uploads/2022/10/pbrqvukjqf8_400x500-e1666871984683.jpg",
  },
  {
    id: 3,
    description: Islamabad,
    mainTitle: "Cheap Flights To Islamabad, Pakistan From UK",
    fromImg:
      "https://sastiparwaaz.com/wp-content/uploads/2022/10/qasim-nagori-1x3qakkpzZU-unsplash-1.jpg",
  },
  {
    id: 4,
    description: Peshawar,
    mainTitle: "Cheap Flights To Peshawar, Pakistan From UK",
    fromImg:
      "https://sastiparwaaz.com/wp-content/uploads/2022/10/licensed-image-_1_.jpg",
  },
  {
    id: 5,
    description: Sialkot,
    mainTitle: "Cheap Flights To Sialkot, Pakistan From UK",
    fromImg:
      "https://flightsflair.com/wp-content/uploads/2022/10/nnzkznywhau_400x500.jpg",
  },
];
const Footer = () => {
  const navigation = useNavigate();
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
            <div
              className="footer_servives_items"
              onClick={() => navigation("/BookingTerms")}
            >
              Booking Terms
            </div>
            {bookCard.map((data) => {
              return (
                <div
                  className="footer_servives_items"
                  onClick={() =>
                    navigation("/BookNowFlightDetails", { state: data })
                  }
                >
                  {data.mainTitle}
                </div>
              );
            })}
            {/* <div
              className="footer_servives_items"
              onClick={() => navigation("/BookNowFlightDetails")}
            >
              Cheap Flights to Peshawar, Pakistan from UK
            </div>
            <div className="footer_servives_items">
              Cheap Flights to Islamabad, Pakistan from UK
            </div>
            <div className="footer_servives_items">
              Cheap Flights to Karachi, Pakistan from UK
            </div>
            <div className="footer_servives_items">
              Cheap Flights to Sialkot, Pakistan from UK
            </div>
            <div className="footer_servives_items">
              Cheap Flights to Lahore, Pakistan from UK
            </div> */}
          </div>
        </div>
      </div>
      <div className="f_social_box">
        <div className="footer_social_container">
          <div className="footer_copyrights">
            Copyright © 2022 Flights Flair
          </div>
          <div className="footer_socoal_icons">
            <div className="f_socail_items">
              <BsFacebook />
            </div>
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
