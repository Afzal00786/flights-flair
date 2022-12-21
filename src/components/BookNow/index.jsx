import React from "react";
import { useNavigate } from "react-router-dom";
import "./bookNow.css";
import amazon from "../../asstes/images/amazon.jpeg";

function BookNow() {
  const responsive = window.innerWidth > 984;
  const navigate = useNavigate();
  const bookCard = [
    {
      id: 1,
      img: amazon,
      title1: "London Heathrow (LHR)",
      title2: "Islamabad (ISB)",
      date: "Thu 23 Mar - Thu 30 Mar",
      title3: "From",
      price: "£526",
      order: "Book Now",
    },
    {
      id: 2,
      img: amazon,
      title1: "London Heathrow (LHR)",
      title2: "Islamabad (ISB)",
      date: "Wed 10 May - Wed 31 May",
      title3: "From",
      price: "£550",
      order: "Book Now",
    },
    {
      id: 3,
      img: amazon,
      title1: "Manchester (MAN)",
      title2: "Islamabad (ISB)",
      date: "Tue 31 jan - Thu 16 Feb",
      title3: "From",
      price: "£566",
      order: "Book Now",
    },
    {
      id: 4,
      img: amazon,
      title1: "London Gatwick (LGW))",
      title2: "Islamabad (ISB)",
      date: "Thu 16 Mar - Mon 03 Apr",
      title3: "From",
      price: "£575",
      order: "Book Now",
    },
  ];
  return (
    <>
      <div className="book_now_container">
        <div className="book_now_heading"> Today's Lowest Fare</div>
        <div className="book_now_wrapper">
          {bookCard.map((data) => {
            return (
              <>
                <div className="book_card_items">
                  <div className="book_Card_img">
                    <img src={data.img} className="card_img1" />
                  </div>
                  <div>{data.title1}</div>
                  <div>{data.title2}</div>
                  <div className="card_date">{data.date}</div>
                  <div className="from_box">
                    <div className="from_line"></div>
                    <div>From</div>
                    <div className="from_line"></div>
                  </div>
                  <div className="book_Card_price">{data.price}</div>
                  <div className="book_Card_order">{data.order}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BookNow;
