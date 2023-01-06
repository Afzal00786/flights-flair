import React from "react";
import { bookCard } from "./BookCardDummy";
import "./DubaiHolidays.css";

function BookNow() {
  const responsive = window.innerWidth > 700;

  return (
    <>
      <div
        className="dubai_container"
        style={{
          textAlign: responsive ? "" : "center",
        }}
      >
        <h4 className="dubai_heading">Dubai Holidays</h4>
        <div
          className="dubai_wrapper"
          style={{
            textAlign: responsive ? "" : "center",
          }}
        >
          {bookCard.map((data) => {
            return (
              <div>
                <div className="dubai_card_items">
                  <div className="dubai_Card_img">
                    <img
                      style={{ width: "100%", height: 180 }}
                      src={data.img}
                      className="card_img1"
                      alt="img"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop: 10,
                    }}
                  >
                    <h5
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {data.title1}
                    </h5>
                    <span
                      style={{ fontSize: 13, marginTop: 20, fontWeight: "550" }}
                    >
                      {data.title2}
                    </span>
                    <div style={{ fontSize: 13, fontWeight: "550" }}>
                      {data.title3}
                    </div>
                    <span className="dubai_date">{data.date}</span>
                    <div className="from_box">
                      <div className="from_line"></div>
                      <span>From</span>
                      <div className="from_line"></div>
                    </div>
                    <span className="book_Card_price">{data.price}</span>
                    <span className="book_Card_order">{data.order}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BookNow;
