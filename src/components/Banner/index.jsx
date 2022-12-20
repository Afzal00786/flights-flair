import React, { useState } from "react";
import "./banner.css";
import TripForm from "../TripForm";

const Banner = () => {
  const [active, setactive] = useState(1);
  return (
    <div className="banner_wrapper">
      <TripForm />
    </div>
  );
};

export default Banner;
