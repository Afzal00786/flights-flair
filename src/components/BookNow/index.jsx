import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import "./bookNow.css";
import { bookCard } from "../BookingDummyData";

function BookNow() {
  const navigation = useNavigate();
  const responsive = window.innerWidth > 700;

  return (
    <div className="book_now_container">
      <h1 className="book_now_heading"> Today's Lowest Fare</h1>
      <div className="book_now_wrapper">
        <div className="background">
          <Swiper
            style={{
              paddingLeft: responsive ? 80 : 60,
              paddingRight: responsive ? 30 : 20,
            }}
            slidesPerView={responsive ? 4 : 1}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {bookCard.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() =>
                      navigation("/booknowflightdetails", { state: data })
                    }
                    className="book_card_items"
                  >
                    <div className="book_Card_img"></div>
                    <h5>{data.title1}</h5>
                    <span className="card_date">{data.date}</span>
                    <div className="from_box">
                      <div className="from_line"></div>
                      <span>From</span>
                      <div className="from_line"></div>
                    </div>
                    <span className="book_Card_price">{data.price}</span>
                    <span className="book_Card_order">{data.order}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
