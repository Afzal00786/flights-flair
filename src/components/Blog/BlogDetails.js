import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Navbar";
import "./blogDetails.css";
const BlogDetails = () => {
  const responsive = window.innerWidth > 900;
  const location = useLocation();
  const params = location.state;
  console.log(location, "location");
  return (
    <>
      <NavBar />

      <div
        className="blog_container"
        style={{
          textAlign: responsive ? "" : "center"
        }}
      >
        <h4 className="blog_heading">Blog Details</h4>
        <div
          className="blog_wrapper"
          style={{
            textAlign: responsive ? "" : "center"
          }}
        >
          <div
            style={{
              width: "110%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: responsive ? "flex" : "",

                height: responsive ? "99%" : "100%"
              }}
              className="blog_detail_items"
            >
              <div
                style={{
                  display: responsive ? "flex" : ""
                }}
                className="blog_Card_img"
              >
                <div>
                  <div
                    className="blog_des"
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    {params.title}
                  </div>
                  <div
                    style={{
                      fontSize: 17,
                      marginLeft: 30,
                      marginRight: 30,
                      paddingTop: 12,
                      paddingBottom: 20,
                      textAlign: "left",
                      paddingLeft: 10,
                      paddingRight: 10
                    }}
                    // className="blog_des"
                  >
                    {params.blogDes}
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black",
                        paddingTop: 15,
                        paddingBottom: 10
                      }}
                    >
                      {params.title1}
                    </div>
                    <div
                      style={{
                        fontSize: 17,
                        paddingTop: 12,
                        paddingBottom: 20,
                        textAlign: "left"
                      }}
                    >
                      {params.blogDes1}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                      }}
                    >
                      {params.title2}
                    </div>
                    <div
                      style={{
                        fontSize: 17,
                        paddingTop: 12,
                        paddingBottom: 20,
                        textAlign: "left"
                      }}
                    >
                      {params.blogDes2}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                      }}
                    >
                      {params.title3}
                    </div>
                    <div
                      style={{
                        fontSize: 17,
                        paddingTop: 12,
                        paddingBottom: 20,
                        textAlign: "left"
                      }}
                    >
                      {params.blogDes3}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black",
                        paddingTop: 15,
                        paddingBottom: 10
                      }}
                    >
                      {params.title4}
                    </div>
                    <div
                      style={{
                        fontSize: 17,
                        paddingTop: 12,
                        paddingBottom: 20,
                        textAlign: "left"
                      }}
                    >
                      {params.blogDes4}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                      }}
                    >
                      {params.title5}
                    </div>
                    <div
                      style={{
                        fontSize: 17,
                        paddingTop: 12,
                        paddingBottom: 20,
                        textAlign: "left"
                      }}
                    >
                      {params.blogDes5}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                      }}
                    >
                      {params.title6}
                    </div>
                    <div
                      style={{
                        fontSize: 17,
                        paddingTop: 10,
                        paddingBottom: 50,
                        textAlign: "left"
                      }}
                    >
                      {params.blogDes6}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                      }}
                    >
                      {params.title7}
                    </div>
                    <div
                      style={{
                        fontSize: 17,
                        paddingTop: 10,
                        paddingBottom: 50,
                        textAlign: "left"
                      }}
                    >
                      {params.blogDes7}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "black"
                      }}
                    >
                      {params.title8}
                    </div>
                    <div
                      style={{
                        fontSize: 17,
                        paddingTop: 10,
                        paddingBottom: 50,
                        textAlign: "left"
                      }}
                    >
                      {params.blogDes8}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    style={{
                      width: 500,
                      height: 350,
                      borderTopRightRadius: 10
                    }}
                    src={params.img}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
