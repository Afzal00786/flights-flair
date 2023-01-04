import React from "react";
import NavBar from "../Navbar";
import "./whatwedo.css";
import Footer from "../Footer";
import MetaData from "../Helmet";

function WhatWeDo() {
  const newLocal = "What we do - FlightsFlair ";
  return (
    <div>
      <MetaData title={newLocal} />

      <NavBar />
      <div className="what_banner_wrapper">
        <h3>Our Flight Services</h3>
      </div>
      <div className="about_us_container">
        <div className="about_content_text">
          <div>
            <span className="about_heading">Fly With Us!</span>
            <br />
            <br />
            Now flight booking is easy with FlightsFlair as FlightsFlair
            offering you the best cheap flight tickets for UK to Pakistan, when
            you about to make a booking, all you have to do is follow the step
            which is mention in the page, There are several deal that
            FlightsFlair offers on a daily and monthly basis , These deals
            change constantly, you can easily select the deal option in our
            website, you can comfortably find about the deals and how they are
            valid, FlightsFlair empower you great discount on cheap flight and
            as well introduced the new reasonable flight expression with best
            price guarantee, as customer care service is all in one and first
            rate and we care a lot of our flight reputation, our dedicated team
            is always here for you to provide you best service and closely
            collaborate with our professionals and consultants to create the
            best price for flight tickets to our customers , some of the
            procedures I mention to simply book ticket at cheaper fare, such as
            go to the search box , fill the foam and to the destination , fill
            the date you want to ticket for, fill the number of passenger, click
            on the search button and get a list of flight you want to book which
            is available at low fare, the fare shown above are subject to change
            until the tickets are booked, you can also avail some cashback
            offers to get the best deal, and you also book a flight ticket for
            different dates, after filling the foam and to the section in the
            search box you have to fill in the dates in the depart section to
            search for a flight, you as well get an amazing offer by book round
            trip, to book a cheap flight you need to plan your trip and book
            your ticket well in advance, and in there you avail the cashback
            offer for the various cardholder and there are tremendous pros of
            cheap flights such as promotion, safety and new planes and its
            faster or less accidents prone that other method of travel, it also
            benefits the economy , as well as additional to safety and health,
            the most important benefit of the low-cost airline is that it helps
            to cut the maintenance cost, repair cost, the landing time is
            quicker as possible, it streamlined integration into the global
            economy and empower vital connectivity on the national, regional and
            international scale or many more, so if you are willing to book a
            cheap flight which gives you the standard of travelling, life safety
            or other money-related advantages so don’t miss the opportunity and
            come to us for more information and immediate service as we are here
            for you anytime and accomplish you eco friendly environment .
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WhatWeDo;
