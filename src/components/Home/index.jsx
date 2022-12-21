import React from "react";
import NavBar from "../Navbar";
import Banner from "../Banner";
import TripForm from "../TripForm";
import BookNow from "../BookNow";
import PakistanFlights from "../PakistanFlights";
import WhyWeChoseUs from "../WhyWeChoseUs"
import Footer from "../Footer"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
  
      <BookNow />
      <WhyWeChoseUs/>
      <PakistanFlights />
      <Footer/>
    </div>
  );
};

export default Home;
