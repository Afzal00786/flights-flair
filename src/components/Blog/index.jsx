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
      {/* <div className="blog_card_container">
        <div className="blog_card_tag_type">HOLIDAY DESTINATIONS</div>
        <img
          width={"100%"}
          height={208}
          src="https://media.easemytrip.com/media/Blog/India/638134579086369115/638134579086369115lJNfxp.png"
        />
        <div style={{ padding: 20 }}>
          <div className="blog_card_title_text">Best place to celebrate</div>
          <div className="blog_small_details_container">
            Easymytrpipi
            <AccessTimeIcon style={{ fontSize: 14, color: "gray" }} />
            February 23, 2023
          </div>
        </div>
      </div>
      <div className="blog_card_container">
        <div className="blog_card_tag_type">TRAVEL TIPS/OTHERS</div>
        <img
          width={"100%"}
          height={208}
          src=" https://cf.bstatic.com/xdata/images/hotel/max300/256757105.jpg?k=b54096b81f4be9dd84052ecee997e626e32bcf95e87e158523081bafb02849ad&o=&hp=1"
        />
        <div style={{ padding: 20 }}>
          <div className="blog_card_title_text">Best place to celebrate</div>
          <div className="blog_small_details_container">
            Easymytrpipi
            <AccessTimeIcon style={{ fontSize: 14, color: "gray" }} />
            February 23, 2023
          </div>
        </div>
      </div>
      <div className="blog_card_container">
        <div className="blog_card_tag_type">PILGRIMAGE</div>
        <img
          width={"100%"}
          height={208}
          src="https://tse2.mm.bing.net/th?id=OIP.gmw2BhbIbh90Qo076RBHiAHaFL&pid=Api&P=0"
        />
        <div style={{ padding: 20 }}>
          <div className="blog_card_title_text">Best place to celebrate</div>
          <div className="blog_small_details_container">
            Easymytrpipi
            <AccessTimeIcon style={{ fontSize: 14, color: "gray" }} />
            February 23, 2023
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default BookNow;
