import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./pakistanFlights.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

function PakistanFlights() {
  const navigation = useNavigate();

  const responsive = window.innerWidth > 700;

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
                  src={require("../../asstes/images/image1-mobile.webp")}
                  alt="karachi"
                />
                <div
                  onClick={() =>
                    navigation("/BookNowFlightDetails", {
                      state: {
                        id: 1,
                        description: karachi,
                        mainTitle: "Cheap Flights To Karachi, Pakistan From UK",
                        fromImg: require("../../asstes/images/image1.webp"),
                        width: "91.5%",
                        height: "35%",
                      },
                    })
                  }
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
                  <h3>karachi</h3>
                </div>
              </div>
            </SwiperSlide>
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
                  src={require("../../asstes/images/image2-mobile.webp")}
                  alt="Islamabad"
                />
                <div
                  onClick={() =>
                    navigation("/BookNowFlightDetails", {
                      state: {
                        id: 2,
                        description: Islamabad,
                        mainTitle:
                          "Cheap Flights To Islamabad, Pakistan From UK",
                        fromImg: require("../../asstes/images/image6.webp"),
                        width: "91.5%",
                        height: "35%",
                      },
                    })
                  }
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
                  <h3>Islamabad</h3>
                </div>
              </div>
            </SwiperSlide>
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
                  src={require("../../asstes/images/image3-mobile.webp")}
                  alt="Lahore"
                />
                <div
                  onClick={() =>
                    navigation("/BookNowFlightDetails", {
                      state: {
                        id: 3,
                        description: Lahore,
                        mainTitle: "Cheap Flights To Lahore, Pakistan From UK",
                        fromImg: require("../../asstes/images/image7.webp"),
                        width: "91.5%",
                        height: "38.5%",
                      },
                    })
                  }
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
                  <h3>Lahore</h3>
                </div>
              </div>
            </SwiperSlide>
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
                  src={require("../../asstes/images/image4-mobile.webp")}
                  alt="Sialkot"
                />
                <div
                  onClick={() =>
                    navigation("/BookNowFlightDetails", {
                      state: {
                        id: 4,
                        description: Sialkot,
                        mainTitle: "Cheap Flights To Sialkot, Pakistan From UK",
                        fromImg: require("../../asstes/images/image4.webp"),
                        width: "91.5%",
                        height: "35%",
                      },
                    })
                  }
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
                  <h3>Sialkot</h3>
                </div>
              </div>
            </SwiperSlide>
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
                  src={require("../../asstes/images/image5-mobile.webp")}
                  alt="Peshawar"
                />
                <div
                  onClick={() =>
                    navigation("/BookNowFlightDetails", {
                      state: {
                        id: 5,
                        description: Peshawar,
                        mainTitle:
                          "Cheap Flights To Peshawar, Pakistan From UK",
                        fromImg: require("../../asstes/images/image5.webp"),
                        width: "91.5%",
                        height: "35%",
                      },
                    })
                  }
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
