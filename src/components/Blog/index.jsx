import React from "react";
import NavBar from "../Navbar";
import "./blog.css";
import { dubaiCard } from "../DubaiHolidays/BookCardDummy";
import BlogSlider from "./BlogSlider";

function BookNow() {
  const responsive = window.innerWidth > 900;

  return (
    <div style={{ marginBottom: 50 }}>
      <NavBar />
      <BlogSlider />
    </div>
  );
}

export default BookNow;
