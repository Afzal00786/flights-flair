import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./pakistanFlights.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { bookCard } from "../BookingDummyData";
const dataCheapFlights = [
  {
    title4: "Karachi",
    flightUrl: "cheapflightstokarachi",
    mobileImg: require("../../asstes/images/image1-mobile.jpg"),
  },
  {
    title4: "Lahore",
    flightUrl: "cheapflightstolahore",
    mobileImg: require("../../asstes/images/image3-mobile.jpg"),
  },
  {
    title4: "Islamabad",
    flightUrl: "cheapflightstoislamabad",
    mobileImg: require("../../asstes/images/image2-mobile.jpg"),
  },
  {
    title4: "Peshawar",
    flightUrl: "cheapflightstopeshawar",
    mobileImg: require("../../asstes/images/image5-mobile.jpg"),
  },
  {
    title4: "Sialkot",
    flightUrl: "cheapflightstosialkot",
    mobileImg: require("../../asstes/images/image4-mobile.jpg"),
  },
];
function PakistanFlights() {
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
        <h1 className="book_now_heading"> Popular Destination of Pakistan</h1>
        <div id="background">
          <Swiper
            style={{
              paddingLeft: responsive ? 80 : 60,
            }}
            slidesPerView={responsive ? 3 : 1}
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
                <SwiperSlide>
                  <div
                    style={{
                      paddingTop: 25,
                    }}
                  >
                    <img
                      style={{
                        width: responsive ? "80%" : "80%",
                        height: responsive ? "40vh" : "40vh",
                        backgroundPosition: "center",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000422",
                        backgroundSize: "cover",
                      }}
                      src={data.mobileImg}
                      alt="karachi"
                    />
                    <div
                      onClick={() => navigation(`/${data.flightUrl}`)}
                      className="elementor-background-overlay"
                      style={{
                        width: responsive ? "80%" : "80%",
                        height: responsive ? "40vh" : "40vh",
                      }}
                    ></div>
                    <div
                      style={{
                        fontSize: responsive ? 18 : 13,
                        color: "white",
                        left: 0,
                        top: 0,
                        position: "absolute",
                        paddingTop: 60,
                        paddingLeft: 20,
                      }}
                    >
                      <h3>{data.title4}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default PakistanFlights;
