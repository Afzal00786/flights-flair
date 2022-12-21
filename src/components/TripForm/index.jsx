import { Input } from "@material-ui/core";
import React, { useState } from "react";
import DateRangeComp from "./DateRangeComp";

const Contact = ({ styling }) => {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };
  const decrease1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    } else {
      setCount1(0);
    }
  };
  const decrease2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    } else {
      setCount2(0);
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    if (e) {
      setOpen(!open);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [selectTripDate, setSelectTripDate] = useState("Round Trip");

  const handleTripSelect = (type) => {
    setSelectTripDate(type);
  };

  const [autoCompleteFrom, setAutoCompleteFrom] = useState(false);
  const [autoCompleteTo, setAutoCompleteTo] = useState(false);
  const [fromField, setFromField] = useState("");
  const [whereField, setWhereField] = useState("");
  const [dateField, setDateField] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");

  console.log(fromField, "fromField");
  console.log(whereField, "whereField");
  console.log(dateField, "dateField");
  console.log(count, "count");
  console.log(count1, "count1");
  console.log(count2, "count2");
  console.log(phoneNo, "phoneNo");
  console.log(email, "email");

  const handlePhone = (e) => {
    setPhoneNo(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDropDown = (e) => {
    setFromField(e.target.value);
    if (e) {
      setAutoCompleteFrom(true);
      setAutoCompleteTo(false);
    }
  };
  const handleDropDownTo = (e) => {
    setWhereField(e.target.value);

    if (e) {
      setAutoCompleteTo(true);
      setAutoCompleteFrom(false);
    }
  };
  console.log(autoCompleteFrom, "autoComplete");
  return (
    <div className="mainContainer">
      <div
        style={{ backgroundColor: styling ? "#4E96BA" : "" }}
        className="fieldsContainer"
      >
        {styling ? (
          <div
            style={{
              display: "flex",
              marginLeft: styling ? 20 : "",
              marginTop: styling ? 20 : "",
            }}
          >
            <div
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 15,
                paddingBottom: 15,

                backgroundColor: selectTripDate === "Round Trip" ? "white" : "",
                color: "black",
              }}
              onClick={() => handleTripSelect("Round Trip")}
            >
              round trip
            </div>
            <div
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 15,
                paddingBottom: 15,

                backgroundColor: selectTripDate === "One Way" ? "white" : "",
                color: "black",
              }}
              onClick={() => handleTripSelect("One Way")}
            >
              one way
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              marginLeft: styling ? 20 : "",
              marginTop: styling ? 20 : "",
            }}
          >
            <div
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 15,
                paddingBottom: 15,

                backgroundColor:
                  selectTripDate === "Round Trip" ? "#55696D" : "",
                color: "white",
              }}
              onClick={() => handleTripSelect("Round Trip")}
            >
              round trip
            </div>
            <div
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 15,
                paddingBottom: 15,

                backgroundColor: selectTripDate === "One Way" ? "#55696D" : "",
                color: "white",
              }}
              onClick={() => handleTripSelect("One Way")}
            >
              one way
            </div>
          </div>
        )}

        <div
          style={{
            marginLeft: styling ? 20 : "",
            marginRight: styling ? 20 : "",

            backgroundColor: styling ? "white" : "",
            padding: styling ? 5 : "",
          }}
        >
          <form>
            <div
              style={{
                display: styling ? "" : "flex",
                backgroundColor: styling ? "" : "#55696d",
                alignItems: "center",
              }}
            >
              <div className={styling ? "bookNowContainer" : "container"}>
                <legend>FROM WHERE</legend>
                <Input
                  style={{ color: styling ? "black" : "white", fontSize: 12 }}
                  name="name"
                  type="text"
                  disableUnderline
                  id={styling ? "bookNow" : "text"}
                  autoComplete="off"
                  onChange={(e) => handleDropDown(e)}
                  placeholder="Departure"
                />
                {autoCompleteFrom ? (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        marginTop: 30,
                        backgroundColor: "red",
                        width: 300,
                        height: 300,
                        boxShadow: "1px 2px 9px #468DC7",
                        zIndex: 1,
                      }}
                    ></div>
                  </>
                ) : null}
              </div>

              <div className={styling ? "bookNowContainer" : "container"}>
                <legend>WHERE TO</legend>
                <Input
                  style={{ color: "white", fontSize: 12 }}
                  name="text1"
                  type="text"
                  disableUnderline
                  id={styling ? "bookNow" : "text"}
                  autoComplete="off"
                  onChange={(e) => handleDropDownTo(e)}
                  placeholder="Arrival"
                />
                {autoCompleteTo ? (
                  <>
                    <div
                      style={{
                        // position: "fixed",
                        position: "absolute",
                        marginTop: 30,
                        backgroundColor: "blue",
                        width: 300,
                        height: 300,
                        boxShadow: "1px 2px 9px #468DC7",
                        zIndex: 1,
                      }}
                    ></div>
                  </>
                ) : null}
              </div>
              <DateRangeComp
                styling={styling}
                selectTripDate={selectTripDate}
                setDateField={setDateField}
                dateField={dateField}
              />
              <div className={styling ? "bookNowContainer" : "container"}>
                <legend>PASSENGERS</legend>
                <input
                  id={styling ? "bookNow" : "text"}
                  style={{
                    color: "white",
                    backgroundColor: styling ? "white" : "#55696d",
                    fontSize: 12,
                    borderWidth: 0,
                    marginTop: 5,
                    width: "100%",
                  }}
                  onClick={(e) => handleOpen(e)}
                  placeholder={`(${count}) Adult, (${count1}) Child, (${count2}) Infant`}
                  color="white"
                />
                {open ? (
                  <>
                    <div
                      style={{
                        position: styling ? "relative" : "absolute",
                        marginTop: 30,
                        backgroundColor: "white",
                        width: 300,
                        boxShadow: "1px 2px 9px #468DC7",
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          color: "#468DC7",
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                          fontSize: 20,
                        }}
                      >
                        Passengers
                      </div>
                      <div
                        style={{
                          backgroundColor: "gray",
                          width: "100%",
                          height: 1,
                          marginTop: 10,
                        }}
                      ></div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ padding: 15, color: "#468DC7" }}>
                          Adult
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            padding: 10,
                          }}
                        >
                          <button
                            onClick={decrease}
                            style={{
                              marginRight: 10,
                              backgroundColor: "#468DC7",
                              borderRadius: 30,
                              width: 30,
                              height: 30,
                              color: "white",
                              borderWidth: 0,
                            }}
                          >
                            -
                          </button>
                          <h1
                            style={{
                              fontSize: 20,
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                              color: "gray",
                            }}
                          >
                            {count}
                          </h1>
                          <button
                            onClick={() => setCount(count + 1)}
                            style={{
                              marginLeft: 10,
                              backgroundColor: "#468DC7",
                              borderRadius: 30,
                              width: 30,
                              height: 30,
                              color: "white",
                              borderWidth: 0,
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "gray",
                          width: "100%",
                          height: 1,
                          marginTop: 10,
                        }}
                      ></div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ padding: 15, color: "#468DC7" }}>
                          {" "}
                          Child{" "}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            padding: 10,
                          }}
                        >
                          <button
                            onClick={decrease1}
                            style={{
                              marginRight: 10,
                              backgroundColor: "#468DC7",
                              borderRadius: 30,
                              width: 30,
                              height: 30,
                              color: "white",
                              borderWidth: 0,
                            }}
                          >
                            -
                          </button>
                          <h1
                            style={{
                              fontSize: 20,
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                              color: "gray",
                            }}
                          >
                            {count1}
                          </h1>
                          <button
                            onClick={() => setCount1(count1 + 1)}
                            style={{
                              marginLeft: 10,
                              backgroundColor: "#468DC7",
                              borderRadius: 30,
                              width: 30,
                              height: 30,
                              color: "white",
                              borderWidth: 0,
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "gray",
                          width: "100%",
                          height: 1,
                          marginTop: 10,
                        }}
                      ></div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ padding: 15, color: "#468DC7" }}>
                          {" "}
                          Infant
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            padding: 10,
                          }}
                        >
                          <button
                            onClick={decrease2}
                            style={{
                              marginRight: 10,
                              backgroundColor: "#468DC7",
                              borderRadius: 30,
                              width: 30,
                              height: 30,
                              color: "white",
                              borderWidth: 0,
                            }}
                          >
                            -
                          </button>
                          <h1
                            style={{
                              fontSize: 20,
                              alignItems: "center",
                              justifyContent: "center",
                              display: "flex",
                              color: "gray",
                            }}
                          >
                            {count2}
                          </h1>
                          <button
                            onClick={() => setCount2(count2 + 1)}
                            style={{
                              marginLeft: 10,
                              backgroundColor: "#468DC7",
                              borderRadius: 30,
                              width: 30,
                              height: 30,
                              color: "white",
                              borderWidth: 0,
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div
                        onClick={() => setOpen(!open)}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <button
                          style={{
                            cursor: "pointer",
                            backgroundColor: "#468DC7",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 5,
                            padding: 12,
                            color: "white",
                            marginTop: 10,
                            marginBottom: 20,
                            textTransform: "none",
                            borderWidth: 0,
                            fontSize: 15,
                            width: "90%",
                          }}
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              <div className={styling ? "bookNowContainer" : "container"}>
                <legend>*PHONE</legend>
                <Input
                  style={{ color: "white", fontSize: 12 }}
                  type="phone"
                  disableUnderline
                  fullWidth
                  name="phone"
                  autoComplete="off"
                  onChange={(e) => handlePhone(e)}
                  id={styling ? "bookNow" : "text"}
                  placeholder="+44-XXXX-XXXX"
                />
              </div>

              <div className={styling ? "bookNowContainer" : "container"}>
                <legend>Email</legend>
                <Input
                  style={{ color: "white", fontSize: 12 }}
                  type="email"
                  disableUnderline
                  name="email"
                  autoComplete="off"
                  onChange={(e) => handleEmail(e)}
                  id={styling ? "bookNow" : "text"}
                  placeholder="john@xyz.com (Optional)"
                />
              </div>

              <button
                type="submit"
                style={{
                  cursor: "pointer",
                  backgroundColor: styling ? "#4E96BA" : "yellow",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 12,
                  // color: "white",
                  textTransform: "none",
                  borderWidth: 0,
                  fontSize: 16,
                  width: styling ? "30%" : "60%",
                  height: 50,
                  marginLeft: 10,
                  marginRight: 10,
                  fontWeight: 600,
                }}
              >
                Find Now
              </button>
            </div>
          </form>
        </div>
        {styling && (
          <img
            width={"91.5%"}
            style={{ marginLeft: 20, marginTop: 50 }}
            src="https://flightsflair.com/wp-content/uploads/2022/10/kltyaksucnk_400x500-768x576.jpg"
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
