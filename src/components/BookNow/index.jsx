// import React from "react";
// import BookNowFlightDetails from "./BookNowFlightDetails";

// function index() {
//   return (
//     <div>

//       <BookNowFlightDetails />
//     </div>
//   );
// }

// export default index;
import React from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    img: require("../../asstes/images/amazon.jpeg"),
    title1: "London Heathrow (LHR)",
    title2: "Islamabad (ISB)",
    date: "Thu 23 Mar - Thu 30 Mar",
    title3: "From",
    price: "£526",
    order: "Book Now",
  },
  {
    id: 2,
    img: require("../../asstes/images/amazon.jpeg"),
    title1: "London Heathrow (LHR)",
    title2: "Islamabad (ISB)",
    date: "Wed 10 May - Wed 31 May",
    title3: "From",
    price: "£550",
    order: "Book Now",
  },
  {
    id: 3,
    img: require("../../asstes/images/amazon.jpeg"),
    title1: "Manchester (MAN)",
    title2: "Islamabad (ISB)",
    date: "Tue 31 jan - Thu 16 Feb",
    title3: "From",
    price: "£566",
    order: "Book Now",
  },
  {
    id: 4,
    img: require("../../asstes/images/amazon.jpeg"),
    title1: "London Gatwick (LGW))",
    title2: "Islamabad (ISB)",
    date: "Thu 16 Mar - Mon 03 Apr",
    title3: "From",
    price: "£575",
    order: "Book Now",
  },
];

function BookNow() {
  const responsive = window.innerWidth > 984;
  const navigate = useNavigate();
  return (
    <>
      <div
        className="grid-four-column"
        style={{
          textAlign: responsive ? "" : "center",
          backgroundColor: "whiteSmoke",
          width: "100%",
          display: responsive ? "flex" : "",
        }}
      >
        {data.map((item, index) => (
          <div
            onClick={() => navigate("/bookNowFlightDetails")}
            key={index}
            style={{
              height: responsive ? 220 : 250,
              width: responsive ? "23%" : "80%",
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
            <div style={{ display: "flex", justifyContent: "space-around" }}>
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
        ))}
      </div>
    </>
  );
}

export default BookNow;
