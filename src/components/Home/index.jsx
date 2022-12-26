import React from "react";
import NavBar from "../Navbar";
import Banner from "../Banner";
import BookNow from "../BookNow";
import PakistanFlights from "../PakistanFlights";
import DubaiHolidays from "../DubaiHolidays";
import WhyWeChoseUs from "../WhyWeChoseUs";
import Footer from "../Footer";
import MetaData from "../Helmet";

const Home = () => {
  return (
    <div>
      <MetaData title="Flightsflair - Cheap flight from UK to Pakistan,Karachi,Lahore,Islamaba..." />
      <NavBar />
      <Banner />
      <BookNow />
      <PakistanFlights />
      <DubaiHolidays />
      <WhyWeChoseUs />
      <Footer />
    </div>
  );
};

export default Home;
