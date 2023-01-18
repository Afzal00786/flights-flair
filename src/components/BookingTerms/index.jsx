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
  "Please take the time to read and understand the General terms & conditions set out below prior to booking a trip with us. We strongly recommend that you carefully read all information relating to your trip on our website or the confirmation letter we sent prior to the ticket issuance to ensure that you understand the itinerary, level of comfort and physical demands of the trip you are undertaking.";
const text2 =
  "All bookings are made with FLIGHTSFLAIR LTD. By booking a trip with us in writing, by telephone, electronically (online), or in person, you are deemed to have agreed to these Booking Conditions (which constitutes the entire agreement between you and us) and your booking will be accepted by us on this basis. The services to be provided are those referred to in your booking confirmation letter. It is also the customer’s responsibility upon receipt of a confirmation to check that the information on it is complete and correct. Any inaccuracies must be immediately reported to FLIGHTSFLAIR . Costs resulting from a failure to report shall be borne by the customer. Services which are not arranged or provided by FLIGHTSFLAIR  are governed by the terms and conditions of carriage and the general terms and conditions of the provider concerned, which FLIGHTSFLAIR  provides to the customer before the contract is concluded.";
const text3 =
  "The booked services are valid only on the dates indicated in the confirmation. Validity of flight tickets: Flight tickets are generally valid only for transport on the airlines for which they were purchased. Transfers of bookings to other airlines and changes in itineraries or additional stopovers are no longer possible during the customer’s journey. Flight tickets must be fully used in the booked order. Failure to use certain flight routes may result in the loss of the customer’s right to travel on all booked flights, or in the airline re-invoicing the ticket price. This may be higher than the price of the originally booked flight tickets.";
const text4 =
  "At the time of booking, you are required to pay a non-refundable deposit of £200, £275, or £300, as applicable, per person per trip for your booking to be confirmed. If your booking is made within few days of the departure date, then the full amount is payable at the time of booking. Please note that a higher deposit may be required for some selected trips.";
const text5 =
  "If we accept your booking, we will issue a confirmation letter. A contract will exist between us from the date we issue the confirmation or if you book within 7 days of departure the contract will exist when we accept your deposit. Please refer to your booking confirmation for details regarding final payments. Payment of the balance of the trip price is due before the departure date or the time given in the confirmation letter. Please note that full payment may be required earlier for some selected trips. If this balance is not paid on or before the due date, we reserve the right to treat your booking as cancelled.";
const text6 =
  "In order for us to confirm your travel arrangements, you must provide all requested details with the balance of the trip price. Necessary details include full name as per passport, date of birth, nationality, passport number, passport issue, and expiry date, and any pre-existing medical conditions you have which may affect your ability to complete your travel arrangements. Your booking cannot be confirmed without the provision of these details.";
const text7 =
  "Should you or any member of your party be forced to cancel your tickets, we must be notified in writing by the person who made the booking and who is therefore responsible for the payment. Please keep that in mind most of the cancellation will result in loss of 100% of total cost of all travel arrangements. Please consult your reservation adviser and book a Refundable/Changeable ticket. Charter flights carry 100% cancellation fee both before and after ticket issue.";

const text8 =
  "If you have a complaint about your trip please inform us at 0208-638-6789 or call our representative at the time in order that they can attempt to rectify the matter. If satisfaction is not reached through these means then any further complaint should be put in writing to us within 30 days of the end of the trip";
const text9 =
  "We may cancel a trip at any time up to 30 days before departure, subject to clause 13. We may cancel a trip at any time prior to departure if, due to terrorism, natural disasters, political instability or other external events it is not viable for us to operate the planned itinerary. If we cancel your trip, you can transfer amounts paid to an alternate departure date or alternatively receive a full refund. In circumstances where the cancellation is due to external events outside our reasonable control refunds will be less any unrecoverable costs. We are not responsible for any incidental expenses that you may have incurred as a result of your booking including but not limited to visas, vaccinations, travel insurance excess or non-refundable flights. Please note that different cancellation conditions may apply to some styles of trips, your booking consultant will advise if differences apply.";

const text10 =
  "Amendments to any other arrangements made in conjunction with your trip will have different charges which will be confirmed at the time of changes +£50 administration fee will be charged. Any changes in bookings must be requested by the customer in writing.";

const text11 =
  "Our trip prices are subject to variable and seasonal pricing, both of which are standard practice within the travel industry. This means our trip prices may vary at any time in accordance with demand, market conditions and availability. It is likely that different passengers on the same trip may have been charged different prices. Your best option if you like the price you see is to book at that time. Once you have received a quote the price will be locked in provided you pay the required deposit prior to the quote’s expiry. Any reduced pricing or discounts that may become available after you have paid your deposit will not apply. If you wish to cancel your booking to take advantage of a cheaper price, full cancellation conditions apply.";

const text12 =
  "Minimum General Policy: For most of our tours minimum age is 12 years. All travellers under the age of 18 must be accompanied by a legal guardian, or in lieu of a legal guardian, by an escort over the age of 18, appointed by their legal guardian. The legal guardian or their designee will be responsible for the traveller under the age of 18 day to day’s care. If a legal guardian elects to designate an escort in their lieu, they will be required to complete and sign a relevant document, to delegate their authority. We are able to provide details on mandatory health requirements; however, we are not medical experts. It is your responsibility to ensure that you obtain proper and detailed medical advice at least two months prior to travel for the latest health requirements and recommendations for your destination.";

const text13 =
  "You must carry a valid passport and have obtained all of the appropriate visas, permits and certificates for the countries in which you will visit during your trip. Your passport must be valid for 6 months beyond the duration of the trip. It is your responsibility to ensure that you are in possession of the correct visas, permits and certificates for your trip; please refer to the website for details. We are not responsible if you are refused entry to a country because you lack the correct passport, visa or other travel documentation.";

const text14 =
  "All our clients need to have a personal travel insurance. You are responsible for obtaining the insurance. Your travel insurance should provide cover against personal accident, death, medical expenses and emergency repatriation, we also strongly recommend it covers cancellation, curtailment, personal liability and loss of luggage and personal effects. Travel insurance information will be gathered by the tour leader on the first day of your trip. We recommend that you read carefully the General Terms and Conditions of your Insurance before Departure.";

const text15 =
  "While we endeavor to operate all trips as described we reserve the right to change the trip itinerary. Please call us before departure for the most recent updates to your itinerary. Before departure: If we make a major change we will inform you as soon as reasonably possible if there is time before departure. The definition of a major change is deemed to be a change affecting at least one. When a major change is made you may choose between accepting the change, obtaining a refund of money paid on the land portion of the trip only or accepting an alternative trip offered. After departure: We reserve the right to change an itinerary after departure due to local circumstances or events outside of our control. In such emergency circumstances the additional cost of any necessary itinerary alterations will be covered by you. Please note we are not responsible for any incidental expenses that may be incurred as a result of the change of itinerary such as visas, vaccinations or non-refundable flights";

const text16 =
  "Optional activities not included in the trip price do not form part of the trip or this contract. You accept that any assistance given by your group leader or local representative in arranging optional activities does not render us liable for them in any way. The contract for the provision of that activity will be between you and activity provider.";

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
            General Terms and Condition
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
