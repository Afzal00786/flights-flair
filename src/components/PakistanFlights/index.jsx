import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import MenuIcon from "@mui/icons-material/Menu";
import "./pakistanFlights.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function PakistanFlights() {
  const navigation = useNavigate();

  const responsive = window.innerWidth > 700;
  const responsive1 = window.innerWidth > 560;
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  const karachi =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";
  const Lahore =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const Islamabad =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const Peshawar =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const Sialkot =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  return (
    <>
      <div
        className="Slider"
        style={{
          //   backgroundColor: "whiteSmoke",
          textAlign: responsive ? "" : "center",
          //   width: "100%",
        }}
      >
        <div id="background">
          <Swiper
            style={{ paddingLeft: responsive ? 80 : "80" }}
            onSwiper={setSwiperRef}
            slidesPerView={responsive ? 3 : 1}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                onClick={() =>
                  navigation("/BookNowFlightDetails", {
                    state: {
                      id: 1,
                      description: karachi,
                      mainTitle: "Cheap Flights To Karachi, Pakistan From UK",
                      fromImg:
                        "https://flightsflair.com/wp-content/uploads/2022/10/kltyaksucnk_400x500-768x576.jpg",
                    },
                  })
                }
              >
                <img
                  style={{
                    width: responsive ? "80%" : "100%",
                    height: responsive ? "60vh" : "40vh",
                    backgroundPosition: "center",
                    zIndex: 1,
                    display: responsive ? "flex" : "",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000422",
                    backgroundSize: "cover",
                  }}
                  src="https://flightsflair.com/wp-content/uploads/2022/10/kltyaksucnk_400x500-scaled.jpg"
                />
                <div
                  class="elementor-background-overlay"
                  style={{
                    width: responsive ? "80%" : "100%",
                    height: responsive ? "60vh" : "40vh",
                  }}
                ></div>
                <div
                  style={{
                    fontSize: responsive ? 18 : 13,
                    color: "white",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    padding: responsive ? 30 : 20,
                  }}
                >
                  <h3>karachi</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() =>
                  navigation("/BookNowFlightDetails", {
                    state: {
                      id: 2,
                      description: Islamabad,
                      mainTitle: "Cheap Flights To Islamabad, Pakistan From UK",
                      fromImg:
                        "https://sastiparwaaz.com/wp-content/uploads/2022/10/qasim-nagori-1x3qakkpzZU-unsplash-1.jpg",
                    },
                  })
                }
              >
                <img
                  style={{
                    width: responsive ? "80%" : "100%",
                    height: responsive ? "60vh" : "40vh",
                    backgroundPosition: "center",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000422",
                    backgroundSize: "cover",
                  }}
                  src="https://flightsflair.com/wp-content/uploads/2022/10/mohammad-irfan-baloch-QEcvxkXWp0c-unsplash.jpg"
                />
                <div
                  class="elementor-background-overlay"
                  style={{
                    width: responsive ? "80%" : "100%",
                    height: responsive ? "60vh" : "40vh",
                  }}
                ></div>
                <div
                  style={{
                    fontSize: responsive ? 18 : 13,
                    color: "white",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    padding: responsive ? 30 : 20,
                  }}
                >
                  <h3>Islamabad</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() =>
                  navigation("/BookNowFlightDetails", {
                    state: {
                      id: 3,
                      description: Lahore,
                      mainTitle: "Cheap Flights To Lahore, Pakistan From UK",
                      fromImg:
                        "https://sastiparwaaz.com/wp-content/uploads/2022/10/pbrqvukjqf8_400x500-e1666871984683.jpg",
                    },
                  })
                }
              >
                <img
                  style={{
                    width: responsive ? "80%" : "100%",
                    height: responsive ? "60vh" : "40vh",
                    backgroundPosition: "center",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000422",
                    backgroundSize: "cover",
                  }}
                  src="https://flightsflair.com/wp-content/uploads/2022/10/abuzar-xheikh-va4P5Y8SDgY-unsplash.jpg"
                />
                <div
                  class="elementor-background-overlay"
                  style={{
                    width: responsive ? "80%" : "100%",
                    height: responsive ? "60vh" : "40vh",
                  }}
                ></div>
                <div
                  style={{
                    fontSize: responsive ? 18 : 13,
                    color: "white",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    padding: responsive ? 30 : 20,
                  }}
                >
                  <h3>Lahore</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() =>
                  navigation("/BookNowFlightDetails", {
                    state: {
                      id: 4,
                      description: Sialkot,
                      mainTitle: "Cheap Flights To Sialkot, Pakistan From UK",
                      fromImg:
                        "https://flightsflair.com/wp-content/uploads/2022/10/nnzkznywhau_400x500.jpg",
                    },
                  })
                }
              >
                <img
                  style={{
                    width: responsive ? "80%" : "100%",
                    height: responsive ? "60vh" : "40vh",
                    backgroundPosition: "center",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000422",
                    backgroundSize: "cover",
                  }}
                  src="https://flightsflair.com/wp-content/uploads/2022/10/nnzkznywhau_400x500.jpg"
                />
                <div
                  class="elementor-background-overlay"
                  style={{
                    width: responsive ? "80%" : "100%",
                    height: responsive ? "60vh" : "40vh",
                  }}
                ></div>
                <div
                  style={{
                    fontSize: responsive ? 18 : 13,
                    color: "white",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    padding: responsive ? 30 : 20,
                  }}
                >
                  <h3>Sialkot</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={() =>
                  navigation("/BookNowFlightDetails", {
                    state: {
                      id: 5,
                      description: Peshawar,
                      mainTitle: "Cheap Flights To Peshawar, Pakistan From UK",
                      fromImg:
                        "https://sastiparwaaz.com/wp-content/uploads/2022/10/licensed-image-_1_.jpg",
                    },
                  })
                }
              >
                <img
                  style={{
                    width: responsive ? "80%" : "100%",
                    height: responsive ? "60vh" : "40vh",
                    backgroundPosition: "center",
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000422",
                    backgroundSize: "cover",
                  }}
                  src="https://flightsflair.com/wp-content/uploads/2022/10/licensed-image-_1_.jpg"
                />
                <div
                  class="elementor-background-overlay"
                  style={{
                    width: responsive ? "80%" : "100%",
                    height: responsive ? "60vh" : "40vh",
                  }}
                ></div>
                <div
                  style={{
                    fontSize: responsive ? 18 : 13,
                    color: "white",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    padding: responsive ? 30 : 20,
                  }}
                >
                  <h3>Peshawar</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default PakistanFlights;
