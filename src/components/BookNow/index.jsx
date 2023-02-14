import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import "../CheapFlights/bookNow.css";
import { bookCard } from "../BookingDummyData";
const dataCheapFlights = [
  {
    title1: "Flights To Karachi",
    mainTitle: "Cheap Flights To Karachi, Pakistan From UK",
    flightUrl: "cheapflightstokarachi",
    date: "Thu 23 Mar - Thu 30 Mar",
    price: "£388*",
  },
  {
    title1: "Flights To Lahore",
    mainTitle: "Cheap Flights To Lahore, Pakistan From UK",
    flightUrl: "cheapflightstolahore",
    date: "Wed 10 May - Wed 31 May",
    price: "£399*",
  },
  {
    title1: "Flights To Islamabad",
    mainTitle: "Cheap Flights To Islamabad, Pakistan From UK",
    flightUrl: "cheapflightstoislamabad",
    date: "Tue 31 jan - Thu 16 Feb",
    price: " £399*",
  },
  {
    title1: "Flights To Peshawar",
    flightUrl: "cheapflightstopeshawar",
    mainTitle: "Cheap Flights To Peshawar, Pakistan From UK",
    date: "Thu 16 Mar - Mon 03 Apr",
    price: "£375*",
  },
  {
    title1: "Flights To Sialkot",
    flightUrl: "cheapflightstosialkot",
    mainTitle: "Cheap Flights To Sialkot, Pakistan From UK",
    date: "Thu 16 Mar - Mon 03 Apr",
    price: "£410*",
  },
];
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
            {dataCheapFlights.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => navigation(`/${data.flightUrl}`)}
                    className="book_card_items"
                  >
                    <div className="book_Card_img"></div>
                    <h5>{data.title1}</h5>
                    <span className="card_date">{data.date}</span>
                    <div className="from_box">
                      <div className="from_line" />
                      <span>From</span>
                      <div className="from_line" />
                    </div>
                    <span className="book_Card_price">{data.price}</span>
                    <span className="book_Card_order">Book Now</span>
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
