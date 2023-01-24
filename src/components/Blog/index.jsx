import React from "react";
import NavBar from "../Navbar";
import "./blog.css";
import { dubaiCard } from "../DubaiHolidays/BookCardDummy";
import Footer from "../Footer";

function BookNow() {
  const responsive = window.innerWidth > 900;

  return (
    <>
      <NavBar />
      <div
        className="blog_container"
        style={{
          textAlign: responsive ? "" : "center",
        }}
      >
        <h4 className="blog_heading">Blog</h4>
        <div
          className="blog_wrapper"
          style={{
            textAlign: responsive ? "" : "center",
          }}
        >
          {dubaiCard.map((data) => {
            return (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="blog_card_items">
                  <div className="blog_Card_img">
                    <img
                      style={{
                        width: "100%",
                        height: 200,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      src={data.img}
                      alt="img"
                    />
                    <div className="blog_des">{data.des}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookNow;
