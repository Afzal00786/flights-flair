import React from "react";
import "./BlogSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function BlogSlider() {
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
            style={{
              marginLeft: responsive ? 100 : 0,
              fontSize: responsive ? 40 : 20,
            }}
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
