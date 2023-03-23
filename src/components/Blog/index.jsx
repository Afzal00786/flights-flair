import React from "react";
import NavBar from "../Navbar";
import "./blog.css";
import BlogCard from "./BlogCard";
import BlogSlider from "./BlogSlider";

function BookNow() {
  let btns = document.getElementsByClassName("blog_btn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace("active", "");
      }
      this.className += "active";
    });
  }

  return (
    <div style={{ marginBottom: 50 }}>
      <NavBar />
      <BlogSlider />
      <div class="blog_active_btn">
        <button class="blog_btn ">HOLIDAY DESTINATIONS</button>
        <button class="blog_btn ">TRAVEL TIPS/OTHERS</button>
        <button class="blog_btn ">PILGRIMAGE</button>
      </div>
      <BlogCard />
    </div>
  );
}

export default BookNow;
