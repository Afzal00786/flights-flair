import React from "react";
import "./DubaiHolidays.css";

function BookNow() {
  const responsive = window.innerWidth > 700;
  const karachi =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";
  const Lahore =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const Islamabad =
    "Flights Flair is one of the best travel agency in London, UK that has hands on experience in dealing with their respected customers. Flights Flair offers some of the best and Cheap Flights to Pakistan and Cheap Flights to Islamabad at the most economical rates. Now travelling is no more a hassle as Flights Flair has sorted it all for you. Whether you are planning to aboard Lahore or Karachi, Flights Flair will take care of all the essentials one require to travel. Now booking Cheap Flights to Lahore or Cheap Flights to Islamabad is not an issue, just log on and select the dates as per your choice and we shall guide you with the best possible rates in your budget. Our highly qualified travel agents are always on their toes to help the customers and to provide them with the best and Cheap Flights to Pakistan. Flights Flair tries its level best to provide affordable flight deals that are not heavy on anyone’s pocket. So now travelling to Pakistan is no more a stress, we are your one stop solution to provide Cheap Flights to Islamabad and Cheap Flights to Karachi as well. So book your tickets with Flights Flair and get the most relaxing and effervescent experience of travelling. Book your Cheap Flights to Pakistan and get enthralled with the majestic views of beautiful cities of Pakistan. Whether you want to book Cheap Flights to Lahore or Cheap Flights to Karachi, we will give you the rates that no one can match. So hurry up! Flights Flair Awaits to make your dreamy journey a memorable one. Book your Cheap Flights to Pakistan today and enjoy the dreamy, historical and royal locations of beautiful cities of Pakistan. So if you are looking for the best and Cheap Flights to Islamabad, Cheap Flights to Lahore, Cheap Flights to Karachi, Cheap Flights to Sialkot, Cheap Flights to Peshawar or Anywhere in Pakistan, contact Flights Flair!";

  const bookCard = [
    {
      id: 1,
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/411696557.jpg?k=179587685f7cdc2cb275ee99bc8a668d4e35a40b88e89a00d5da7a487bc67b92&o=&hp=1",
      title1: "Rove La Mer Beach... Dubai",
      title2: "London Heathrow (LHR)",
      date: "11 Feb 2023 - 18 Feb 2023 ",
      title4: "From",
      price: "£955*",
      title3: "From",

      order: "Book Now",
      description: karachi,
      mainTitle: "Cheap Flights To Karachi, Pakistan From UK",
      fromImg:
        "https://flightsflair.com/wp-content/uploads/2022/10/kltyaksucnk_400x500-768x576.jpg",
    },
    {
      id: 2,
      img: "https://cf.bstatic.com/xdata/images/hotel/max300/256757105.jpg?k=b54096b81f4be9dd84052ecee997e626e32bcf95e87e158523081bafb02849ad&o=&hp=1",
      title1: "Crowne Plaza Dubai Deira, an IHG Hotel...Dubai",
      title2: "London Heathrow (LHR)",
      date: "11 Feb 2023 - 18 Feb 2023 ",
      title3: "From",
      price: "£1,010*",
      order: "Book Now",
      description: Lahore,
      mainTitle: "Cheap Flights To Lahore, Pakistan From UK",
      fromImg:
        "https://sastiparwaaz.com/wp-content/uploads/2022/10/pbrqvukjqf8_400x500-e1666871984683.jpg",
    },
    {
      id: 3,
      img: "https://cf.bstatic.com/xdata/images/hotel/max500/407539893.jpg?k=29208cfb14cd70c40ecf442b90e3c7ec99f12922b7d8182c04a65d7d255a88b5&o=&hp=1",
      title1: "Radisson Beach Resort Palm Jumeirah...Dubai",
      title2: "London Heathrow (LHR)",
      date: "11 Feb 2023 - 18 Feb 2023 ",
      title3: "From",
      price: " £1,050*",
      order: "Book Now",
      description: Islamabad,
      mainTitle: "Cheap Flights To Islamabad, Pakistan From UK",
      fromImg:
        "https://sastiparwaaz.com/wp-content/uploads/2022/10/qasim-nagori-1x3qakkpzZU-unsplash-1.jpg",
    },
  ];
  return (
    <>
      <div
        className="dubai_container"
        style={{
          textAlign: responsive ? "" : "center",
        }}
      >
        <h2 className="dubai_heading">Dubai Holidays</h2>
        <div
          className="dubai_wrapper"
          style={{
            textAlign: responsive ? "" : "center",
          }}
        >
          {bookCard.map((data) => {
            return (
              <div>
                <div className="dubai_card_items">
                  <div className="dubai_Card_img">
                    <img
                      style={{ width: "100%", height: 180 }}
                      src={data.img}
                      className="card_img1"
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop: 10,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {data.title1}
                    </div>
                    <div
                      style={{ fontSize: 13, marginTop: 20, fontWeight: "550" }}
                    >
                      {data.title2}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: "550" }}>
                      {data.title3}
                    </div>
                    <div className="dubai_date">{data.date}</div>
                    <div className="from_box">
                      <div className="from_line"></div>
                      <div>From</div>
                      <div className="from_line"></div>
                    </div>
                    <div className="book_Card_price">{data.price}</div>
                    <div className="book_Card_order">{data.order}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BookNow;
