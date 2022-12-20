import React from "react";
import NavBar from "../Navbar";
import TripForm from "../TripForm";

import "./bookNow.css";
function BookNowFlightDetails() {
  return (
    <div className="bookNow_wrapper">
      <NavBar styling />
      <div className="field_text_wrapper">
        <div className="text_wrapper">
          Flights Flair is one of the best travel agency in London, UK that has
          hands on experience in dealing with their respected customers. Flights
          Flair offers some of the best and Cheap Flights to Pakistan and Cheap
          Flights to Islamabad at the most economical rates. Now travelling is
          no more a hassle as Flights Flair has sorted it all for you. Whether
          you are planning to aboard Lahore or Karachi, Flights Flair will take
          care of all the essentials one require to travel. Now booking Cheap
          Flights to Lahore or Cheap Flights to Islamabad is not an issue, just
          log on and select the dates as per your choice and we shall guide you
          with the best possible rates in your budget. Our highly qualified
          travel agents are always on their toes to help the customers and to
          provide them with the best and Cheap Flights to Pakistan. Flights
          Flair tries its level best to provide affordable flight deals that are
          not heavy on anyone’s pocket. So now travelling to Pakistan is no more
          a stress, we are your one stop solution to provide Cheap Flights to
          Islamabad and Cheap Flights to Karachi as well. So book your tickets
          with Flights Flair and get the most relaxing and effervescent
          experience of travelling. Book your Cheap Flights to Pakistan and get
          enthralled with the majestic views of beautiful cities of Pakistan.
          Whether you want to book Cheap Flights to Lahore or Cheap Flights to
          Karachi, we will give you the rates that no one can match. So hurry
          up! Flights Flair Awaits to make your dreamy journey a memorable one.
          Book your Cheap Flights to Pakistan today and enjoy the dreamy,
          historical and royal locations of beautiful cities of Pakistan. So if
          you are looking for the best and Cheap Flights to Islamabad, Cheap
          Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot,
          Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights
          Flair!
        </div>
        <div className="field_wrapper">
          <TripForm styling />
        </div>
      </div>
    </div>
  );
}

export default BookNowFlightDetails;
