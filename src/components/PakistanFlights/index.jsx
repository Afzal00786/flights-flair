import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import MenuIcon from "@mui/icons-material/Menu";
import "./pakistanFlights.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function PakistanFlights() {
  const responsive = window.innerWidth > 949;
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
          {/* {data.map((item, index) => (
                <div
                  key={index}
                  style={{
                    height: 220,
                    width: "100%",
                    backgroundColor: "white",
                    boxShadow: "1px 2px 9px gray",
                    cursor: "pointer",
                    margin: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img width={60} height={25} src={item.img} />
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <h1 style={{ margin: 8, fontSize: 13, fontWeight: "600" }}>
                      {item.title1}
                    </h1>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: 10,
                    }}
                  >
                    <h2 style={{ fontSize: 13, fontWeight: "570" }}>
                      {" "}
                      {item.title2}
                    </h2>
                  </div>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      margin: 20,
                      fontSize: 13,
                      fontWeight: "500",
                    }}
                  >
                    {item.date}
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div
                      style={{
                        backgroundColor: "black",
                        width: "35%",
                        height: 1,
                        marginTop: 6,
                      }}
                    ></div>
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: "500",
                      }}
                    >
                      {item.title3}
                    </div>
                    <div
                      style={{
                        backgroundColor: "black",
                        width: "35%",
                        height: 1,
                        marginTop: 6,
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 14,
                    }}
                  >
                    <span
                      style={{
                        color: "#007597",
                        fontSize: 27,
                        fontWeight: "bold",
                      }}
                    >
                      {item.price}
                    </span>
                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 14,
                        fontWeight: "600",
                        color: "#007597",
                      }}
                    >
                      PP
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      fontSize: 14,
                      fontWeight: "500",
                      color: "#007597",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.order}
                  </div>
                </div>
              ))} */}
        </div>
      </div>
    </>
  );
}

export default PakistanFlights;
