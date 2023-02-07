import React from "react";
import { useLocation } from "react-router-dom";
import { dubaiCard } from "../DubaiHolidays/BookCardDummy";

const BlogDetails = () => {
  const responsive = window.innerWidth > 900;
  const location = useLocation();
  const params = location.state;
  console.log(location, "location");
  return (
    <div
      className="blog_container"
      style={{
        textAlign: responsive ? "" : "center",
      }}
    >
      <h4 className="blog_heading">Blog Details</h4>
      <div
        className="blog_wrapper"
        style={{
          textAlign: responsive ? "" : "center",
        }}
      >
        <div
          style={{
            width: "110%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }} className="blog_card_items">
            <div style={{ display: "flex" }} className="blog_Card_img">
              <div>
                <img
                  style={{
                    width: 300,
                    height: 300,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                  src={params.img}
                  alt="img"
                />
                <div className="blog_des">{params.title}</div>
              </div>

              <div style={{ fontSize: 15 }} className="blog_des">
                {params.blogDes}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
