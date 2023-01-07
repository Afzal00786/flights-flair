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
  const description =
    "We provide the best cheap flights to Pakistan from UK at the most economical rates. Book your UK flights to Pakistan with Flights Flair today!";
  return (
    <div>
      {/* <DocumentMeta {...meta} /> */}
      <MetaData
        description={description}
        title="Cheap Flights to Pakistan From UK With Special Fares 2023 "
      />
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
