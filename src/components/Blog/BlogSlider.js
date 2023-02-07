import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./BlogSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { blogCardData } from "./blogCardData";

function BlogSlider() {
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
        <h1 className="book_now_heading">Blog</h1>
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
            {blogCardData.map((data, index) => {
              return (
                <SwiperSlide>
                  <div
                    onClick={() => navigation("/BlogDetails", { state: data })}
                    style={{
                      backgroundColor: "white",
                      width: responsive ? "80%" : "80%",
                    }}
                  >
                    <img
                      style={{
                        width: responsive ? "100%" : "80%",
                        height: responsive ? "40vh" : "40vh",
                        backgroundPosition: "center",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000422",
                        backgroundSize: "cover",
                      }}
                      src={data.img}
                      alt="karachi"
                    />
                    <div style={{ padding: 5 }}>
                      <div
                        style={{
                          fontSize: responsive ? 18 : 13,
                          color: "black",
                        }}
                      >
                        <h5>{data.title}</h5>
                      </div>
                      <div
                        style={{
                          fontSize: responsive ? 15 : 13,
                          color: "black",
                          marginTop: 3,
                        }}
                      >
                        <div>{data.blogDes.slice(0, 200)}...</div>
                      </div>
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

export default BlogSlider;
