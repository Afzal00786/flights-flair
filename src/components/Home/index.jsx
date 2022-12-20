import React from "react";
import NavBar from "../Navbar";
import Banner from "../Banner";
import TripForm from "../TripForm";
import BookNow from "../BookNow";
import PakistanFlights from "../PakistanFlights";
import Footer from "../Footer"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <h1>Today's Lowest Fare</h1>
      <BookNow />
      <PakistanFlights />
      <Footer/>
    </div>
  );
};

export default Home;
