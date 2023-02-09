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
  "All reservations must be made through FLIGHTSFLAIR LTD, and doing so constitutes acceptance of our Booking Conditions, which serve as the basis for our whole relationship with you. We shall offer the services that are listed in your booking confirmation letter. You must ensure the accuracy of the confirmation and quickly notify FLIGHTSFLAIR of any errors. You will be liable for any expenses resulting from your failure to disclose. The terms and conditions of the service provider, which FLIGHTSFLAIR will communicate to you before the contract is finalised, are applicable to any services not supplied by FLIGHTSFLAIR.";
const text3 =
  "Only the dates noted in the confirmation are valid for the booked services. Tickets cannot be changed to another airline or itinerary; they are only good for the airline they were purchased for. It is necessary to utilise the airline tickets in the order they were purchased. The consumer may lose the ability to fly on any aircraft if a certain route is not used, or the airline may charge a higher re-invoice fee.";
const text4 =
  "When booking, a non-refundable deposit of £200, £275, or £300 per person per trip is required to confirm your booking. If the booking is made close to the departure date, the full amount will be due at that time. Please note, some trips may require a higher deposit.";
const text5 =
  "Upon acceptance of your booking, we'll send you a confirmation letter. A contract will be established from the date of the confirmation or, if booking within 7 days of departure, when we accept your deposit. Your confirmation letter will have details on final payments. The balance of the trip price is due before the departure date or as stated in the confirmation. Some trips may require full payment earlier. If the balance isn't paid by the due date, we reserve the right to cancel your booking.";
const text6 =
  "You must give us the remaining payment for the trip together with all the needed information in order for us to confirm your travel plans. The necessary information includes your full name as it appears on your passport, your date of birth, your nationality, your passport number, the date your passport was issued, the expiration date of your passport, and any existing medical conditions that might prevent you from making your travel plans. Without the submission of this information, your reservation cannot be verified.";
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

const bookingTermData = [
  {
    id: 1,
    title: "General Terms and Condition",
    description: text1,
  },
  {
    id: 2,

    title: "Our contact",
    description: text2,
  },
  {
    id: 3,

    title: "Validity",
    description: text3,
  },
  {
    id: 4,

    title: "Deposit requirements",
    description: text4,
  },
  {
    id: 5,

    title: "Acceptance of booking and final payment",
    description: text5,
  },
  {
    id: 6,

    title: "Your details",
    description: text6,
  },
  {
    id: 7,

    title: "Cancellation by traveler",
    description: text7,
  },
  {
    id: 8,

    title: "Claims and complaint",
    description: text8,
  },
  {
    id: 9,

    title: "Cancellation by us",
    description: text9,
  },
  {
    id: 10,

    title: "Booking amendments",
    description: text10,
  },
  {
    id: 11,

    title: "Prices & surcharges",
    description: text11,
  },
  {
    id: 12,

    title: "Age & health requirements",
    description: text12,
  },
  {
    id: 13,

    title: "Passport & visas",
    description: text13,
  },
  {
    id: 14,

    title: "Travel Insurance",
    description: text14,
  },
  {
    id: 15,

    title: "Change of itinerary",
    description: text15,
  },
  {
    id: 16,

    title: "Optional activities",
    description: text16,
  },
];
function BookingTerms() {
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
      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
        {bookingTermData.map((bookingTerm) => (
          <div key={bookingTerm.id} className="booking_term_wrapper">
            <strong className="booking_term_title">
              {bookingTerm.id}
              {". "}
              {bookingTerm.title}
            </strong>
            <span className="booking_term_description">
              {":"} {bookingTerm.description}
            </span>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default BookingTerms;
