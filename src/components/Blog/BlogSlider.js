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
        <h1 className="book_now_heading">Blogs</h1>
        <div id="blogBackground">
          <Swiper
            style={{
              paddingLeft: responsive ? 40 : 30,
              color: "black",
            }}
            slidesPerView={responsive ? 3 : 1}
            spaceBetween={5}
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
                    className="blog_card_items"
                    style={{
                      width: responsive ? "80%" : "80%",
                      cursor: "pointer",
                      marginBottom: 30,
                      paddingBottom: 10,
                    }}
                  >
                    <div className="blog_Card_img">
                      <img
                        style={{
                          width: responsive ? "100%" : "100%",
                          height: responsive ? "35vh" : "24vh",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          backgroundPosition: "center",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "white",
                          backgroundSize: "cover",
                        }}
                        src={data.img}
                        alt="karachi"
                      />
                      <div style={{ padding: 5 }}>
                        <div
                          className="blog_des"
                          style={{
                            fontSize: responsive ? 20 : 13,
                            color: "black",
                          }}
                        >
                          <h5>{data.title}</h5>
                        </div>
                        <div
                          className="blog_des"
                          style={{
                            fontSize: responsive ? 15 : 13,
                            color: "black",
                            marginTop: 7,
                          }}
                        >
                          <div> {data.blogDes.slice(0, 300)}...</div>
                        </div>
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
