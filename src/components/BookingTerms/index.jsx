import React, { useEffect, useState } from "react";
import NavBar from "../Navbar";
import Grid from "@mui/material/Grid";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "./whatWeDo.css";
import Footer from "../Footer";
import MetaData from "../Helmet";
import { useLocation } from "react-router-dom";
const text1 =
  "Before booking a trip with us, we kindly ask that you take a moment to read and understand our General terms & conditions. We highly recommend checking all information related to your trip on our website or in the confirmation letter we send, to make sure you fully understand the itinerary, comfort level, and physical demands of your journey. This will ensure a smooth and enjoyable trip.";
const text2 =
  "All bookings are made with FLIGHTSFLAIR LTD and are deemed as agreement to our Booking Conditions, which form the entire agreement between you and us. The services outlined in your booking confirmation letter will be provided by us. It's your responsibility to check the confirmation for accuracy and report any inaccuracies to FLIGHTSFLAIR promptly. Any costs from failure to report will be your responsibility. Services not provided by FLIGHTSFLAIR are subject to the terms and conditions of the service provider, which FLIGHTSFLAIR will provide to you before the contract is confirmed.";
const text3 =
  "The booked services are only valid on the dates specified in the confirmation. Flight tickets are only valid for the airline they were purchased for, and changes in itinerary or airlines are not possible. The flight tickets must be used in the order they were booked. If a flight route is not used, the customer may lose the right to travel on all flights or face higher re-invoice costs from the airline.";
const text4 =
  "When booking, a non-refundable deposit of £200, £275, or £300 per person per trip is required to confirm your booking. If the booking is made close to the departure date, the full amount will be due at that time. Please note, some trips may require a higher deposit.";
const text5 =
  "Upon acceptance of your booking, we'll send you a confirmation letter. A contract will be established from the date of the confirmation or, if booking within 7 days of departure, when we accept your deposit. Your confirmation letter will have details on final payments. The balance of the trip price is due before the departure date or as stated in the confirmation. Some trips may require full payment earlier. If the balance isn't paid by the due date, we reserve the right to cancel your booking.";
const text6 =
  "In order for us to confirm your travel arrangements, you must provide all requested details with the balance of the trip price. Necessary details include full name as per passport, date of birth, nationality, passport number, passport issue, and expiry date, and any pre-existing medical conditions you have which may affect your ability to complete your travel arrangements. Your booking cannot be confirmed without the provision of these details.";
const text7 =
  "Should you or any member of your party be forced to cancel your tickets, we must be notified in writing by the person who made the booking and who is therefore responsible for the payment. Please keep that in mind most of the cancellation will result in loss of 100% of total cost of all travel arrangements. Please consult your reservation adviser and book a Refundable/Changeable ticket. Charter flights carry 100% cancellation fee both before and after ticket issue.";

const text8 =
  "If you have any issues with your trip, please let us know at 0208-638-6789 or talk to our representative on the spot for a quick resolution. If you're still not satisfied, please send us a written complaint within 30 days of the end of your trip.";
const text9 =
  "We may cancel a trip at any time up to 30 days before departure, subject to clause 13. We may cancel a trip at any time prior to departure if, due to terrorism, natural disasters, political instability or other external events it is not viable for us to operate the planned itinerary. If we cancel your trip, you can transfer amounts paid to an alternate departure date or alternatively receive a full refund. In circumstances where the cancellation is due to external events outside our reasonable control refunds will be less any unrecoverable costs. We are not responsible for any incidental expenses that you may have incurred as a result of your booking including but not limited to visas, vaccinations, travel insurance excess or non-refundable flights. Please note that different cancellation conditions may apply to some styles of trips, your booking consultant will advise if differences apply.";

const text10 =
  "Changes to any other travel arrangements will have additional fees, which will be confirmed at the time of the change. There will also be a £50 administrative fee. To make changes, please send a written request.";

const text11 =
  "Trip prices can change due to demand and availability, which is common in the travel industry. Book quickly if you like the price you see, as it will be locked in once you make a deposit. Unfortunately, any discounts or lower prices after you've made a deposit do not apply. If you need to cancel, regular cancellation policies apply.";

const text12 =
  "For most of our tours, the minimum age requirement is 12 years. If you're under 18, you'll need to be accompanied by a legal guardian or an escort over 18 appointed by your legal guardian.Legal guardians must fill out and sign a form to delegate their power if they choose to name an escort in the child's place. Your legal guardian or escort will be responsible for taking care of you during the trip. If you need more information on health requirements for your destination, we can provide it, but it's your responsibility to get proper medical advice before traveling.";

const text13 =
  "Make sure to bring along a valid passport and all necessary visas, permits, and certificates for the countries you'll be visiting during your trip. It's a good idea to check that your passport is valid for at least 6 months beyond the trip's duration. Don't worry, you can easily find all the information you need on the website. We just want to make sure your travels go smoothly and you have a great time. However, please keep in mind that it's ultimately your responsibility to have all the correct travel documentation.";

const text14 =
  "As a requirement for all clients, obtaining personal travel insurance is your responsibility. The insurance should provide coverage for personal accident, death, medical expenses, and emergency repatriation. Additionally, we strongly suggest that it includes protection against cancellations, curtailments, personal liability, loss of luggage and personal effects. The tour leader will collect travel insurance information on the first day of the trip. Please take the time to thoroughly review the General Terms and Conditions of your insurance prior to departure.";

const text15 =
  "We make every effort to operate trips as planned, however, we reserve the right to modify the itinerary. For the most recent updates, please contact us before departure. In the case of a significant change prior to departure, we will inform you promptly and give you the option to accept the change, receive a refund for the land portion of the trip only, or choose an alternative trip offered. After departure, unforeseen circumstances or events outside of our control may necessitate changes to the itinerary. In these cases, any additional expenses incurred from itinerary alterations will be your responsibility. Please note, we are not accountable for any additional costs that may arise from itinerary changes, such as visas, vaccinations or non-refundable flights.";

const text16 =
  "Activities that are not included in the trip cost are not considered part of the trip or agreement. It is understood that the help provided by the tour leader or local representative in organizing these optional activities does not make us responsible for them in any manner. The agreement for the provision of these activities will be solely between you and the provider of the activity.";

function BookingTerms() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [showDropDown3, setShowDropDown3] = useState(false);
  const [showDropDown4, setShowDropDown4] = useState(false);
  const [showDropDown5, setShowDropDown5] = useState(false);
  const [showDropDown6, setShowDropDown6] = useState(false);
  const [showDropDown7, setShowDropDown7] = useState(false);
  const [showDropDown8, setShowDropDown8] = useState(false);
  const [showDropDown9, setShowDropDown9] = useState(false);
  const [showDropDown10, setShowDropDown10] = useState(false);
  const [showDropDown11, setShowDropDown11] = useState(false);
  const [showDropDown12, setShowDropDown12] = useState(false);
  const [showDropDown13, setShowDropDown13] = useState(false);
  const [showDropDown14, setShowDropDown14] = useState(false);
  const [showDropDown15, setShowDropDown15] = useState(false);
  const check = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  const handleDropDown = (number) => {
    console.log(check[number], "value");
    if (number === 1) {
      setShowDropDown(!showDropDown);
    } else if (number === 2) {
      setShowDropDown1(!showDropDown1);
    } else if (number === 3) {
      setShowDropDown2(!showDropDown2);
    } else if (number === 4) {
      setShowDropDown3(!showDropDown3);
    } else if (number === 5) {
      setShowDropDown4(!showDropDown4);
    } else if (number === 6) {
      setShowDropDown5(!showDropDown5);
    } else if (number === 7) {
      setShowDropDown6(!showDropDown6);
    } else if (number === 8) {
      setShowDropDown7(!showDropDown7);
    } else if (number === 9) {
      setShowDropDown8(!showDropDown8);
    } else if (number === 10) {
      setShowDropDown9(!showDropDown9);
    } else if (number === 11) {
      setShowDropDown10(!showDropDown10);
    } else if (number === 12) {
      setShowDropDown11(!showDropDown11);
    } else if (number === 13) {
      setShowDropDown12(!showDropDown12);
    } else if (number === 14) {
      setShowDropDown13(!showDropDown13);
    } else if (number === 15) {
      setShowDropDown14(!showDropDown14);
    } else if (number === 16) {
      setShowDropDown15(!showDropDown15);
    }
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const newLocal = "Booking Terms - FlightsFlair ";
  return (
    <div>
      <MetaData title={newLocal} />
      <NavBar />
      <div className="booking_terms_upper_Image">
        <div className="booking_terms_Inner_Image">
          <div className="booking_text_styling">Booking Terms</div>
        </div>
      </div>

      <Grid container md={12} xs={12} className="booking_terms_wrapper">
        <Grid style={{ margin: 10 }} item md={5} xs={12}>
          <div
            onClick={() => handleDropDown(1)}
            className="booking_terms_userSide"
          >
            {showDropDown ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            General Terms and Condition:
          </div>
          {showDropDown && (
            <div className="booking_terms_dropdown_text">{text1}</div>
          )}
          <div
            onClick={() => handleDropDown(2)}
            className="booking_terms_userSide"
          >
            {showDropDown1 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Our contact
          </div>
          {showDropDown1 && (
            <div className="booking_terms_dropdown_text">{text2}</div>
          )}
          <div
            onClick={() => handleDropDown(3)}
            className="booking_terms_userSide"
          >
            {showDropDown2 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Validity
          </div>
          {showDropDown2 && (
            <div className="booking_terms_dropdown_text">{text3}</div>
          )}
          <div
            onClick={() => handleDropDown(4)}
            className="booking_terms_userSide"
          >
            {showDropDown3 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Deposit requirements
          </div>
          {showDropDown3 && (
            <div className="booking_terms_dropdown_text">{text4}</div>
          )}
          <div
            onClick={() => handleDropDown(5)}
            className="booking_terms_userSide"
          >
            {showDropDown4 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Acceptance of booking and final payment
          </div>
          {showDropDown4 && (
            <div className="booking_terms_dropdown_text">{text5}</div>
          )}
          <div
            onClick={() => handleDropDown(6)}
            className="booking_terms_userSide"
          >
            {showDropDown5 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Your details
          </div>
          {showDropDown5 && (
            <div className="booking_terms_dropdown_text">{text6}</div>
          )}
          <div
            onClick={() => handleDropDown(7)}
            className="booking_terms_userSide"
          >
            {showDropDown6 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Cancellation by traveler
          </div>
          {showDropDown6 && (
            <div className="booking_terms_dropdown_text">{text7}</div>
          )}
          <div
            onClick={() => handleDropDown(8)}
            className="booking_terms_userSide"
          >
            {showDropDown7 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Claims and complain
          </div>
          {showDropDown7 && (
            <div className="booking_terms_dropdown_text">{text8}</div>
          )}
        </Grid>
        <Grid
          style={{ margin: 10 }}
          item
          md={5}
          xs={12}
          className="booking_terms_right_wrapper"
        >
          <div
            onClick={() => handleDropDown(9)}
            className="booking_terms_serviceSide"
          >
            {showDropDown8 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Cancellation by us
          </div>
          {showDropDown8 && (
            <div className="booking_terms_dropdown_text">{text9}</div>
          )}
          <div
            onClick={() => handleDropDown(10)}
            className="booking_terms_serviceSide"
          >
            {showDropDown9 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Booking amendments
          </div>
          {showDropDown9 && (
            <div className="booking_terms_dropdown_text">{text10}</div>
          )}
          <div
            onClick={() => handleDropDown(11)}
            className="booking_terms_serviceSide"
          >
            {showDropDown10 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Prices & surcharges
          </div>
          {showDropDown10 && (
            <div className="booking_terms_dropdown_text">{text11}</div>
          )}
          <div
            onClick={() => handleDropDown(12)}
            className="booking_terms_serviceSide"
          >
            {showDropDown11 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Age & health requirements
          </div>
          {showDropDown11 && (
            <div className="booking_terms_dropdown_text">{text12}</div>
          )}
          <div
            onClick={() => handleDropDown(13)}
            className="booking_terms_serviceSide"
          >
            {showDropDown12 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Passport & visas
          </div>
          {showDropDown12 && (
            <div className="booking_terms_dropdown_text">{text13}</div>
          )}
          <div
            onClick={() => handleDropDown(14)}
            className="booking_terms_serviceSide"
          >
            {showDropDown13 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Travel Insurance
          </div>
          {showDropDown13 && (
            <div className="booking_terms_dropdown_text">{text14}</div>
          )}
          <div
            onClick={() => handleDropDown(15)}
            className="booking_terms_serviceSide"
          >
            {showDropDown14 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Change of itinerary
          </div>
          {showDropDown14 && (
            <div className="booking_terms_dropdown_text">{text15}</div>
          )}
          <div
            onClick={() => handleDropDown(16)}
            className="booking_terms_serviceSide"
          >
            {showDropDown15 ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
            Optional activities
          </div>
          {showDropDown15 && (
            <div className="booking_terms_dropdown_text">{text16}</div>
          )}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default BookingTerms;
