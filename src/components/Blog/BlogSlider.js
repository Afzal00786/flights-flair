import React from "react";

import "./BlogSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

function BlogSlider() {
  const navigation = useNavigate();

  const responsive = window.innerWidth > 700;
  return (
    <>
      <div
        className="Slider"
        style={{
          textAlign: responsive ? "" : "center",
        }}
      >
        <div id="blogBackground">
          <div
            style={{ marginLeft: 100, fontSize: 40 }}
            className="text_conatiner"
          >
            <div className="blog_img_text">Destination that are Meant to</div>
            <div className="blog_img_text">Give Incredible Holiday</div>
            <div className="blog_img_text">Experience </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSlider;
