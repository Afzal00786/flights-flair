import { Input, InputAdornment } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import DateRangeComp from "./DateRangeComp";
import Grid from "@mui/material/Grid";
import data1 from "./dummyData.jsx";
import data2 from "./dummyData2.jsx";
import "./form.css";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import RoomIcon from "@mui/icons-material/Room";
import SuccessModal from "../SuccessModal";
import PhoneIcon from "@mui/icons-material/Phone";
const Contact = ({ fromImg, styling }) => {
  const responsive = window.innerWidth > 700;
  const location = useLocation();
  console.log(fromImg, "fromImg");
  console.log("hello");
  console.log(location.state, "dataroute");
  let data = location.state;
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [selectTripDate, setSelectTripDate] = useState("Round Trip");

  const handleTripSelect = (type) => {
    setSelectTripDate(type);
  };

  const Adultdecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };
  const Childdecrease = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    } else {
      setCount1(0);
    }
  };
  const Infantdecrease = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    } else {
      setCount2(0);
    }
  };
  const [autoCompleteFrom, setAutoCompleteFrom] = useState(false);
  const [autoCompleteTo, setAutoCompleteTo] = useState(false);
  const [value, setValue] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [dateField, setDateField] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [validationTo, setValidationTo] = useState(false);
  const [validationFrom, setValidationFrom] = useState(false);
  const [validationDate, setValidationDate] = useState(false);
  const [validationPhone, setValidationPhone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    if (value === "") {
      setValidationTo(true);
    } else {
      setValidationTo(false);
    }
    if (valueTo === "") {
      setValidationFrom(true);
    } else {
      setValidationFrom(false);
    }
    if (dateField === "") {
      setValidationDate(true);
    } else {
      setValidationDate(false);
    }
    if (phoneNo === "") {
      setValidationPhone(true);
    } else {
      setValidationPhone(false);
    }
    if (value !== "" && valueTo !== "" && dateField !== "" && phoneNo !== "") {
      setValue("");
      setValueTo("");
      setPhoneNo("");
      setEmail("");
      setCount(1);
      setCount1(0);
      setCount2(0);
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 8000);
      emailjs
        .sendForm(
          "service_xls7aht",
          "template_snswcdq",
          form.current,
          "7m6bYCmtfGWWA8CtZ"
        )
        .then(
          (result) => {
            console.log(result, "result");
          },
          (error) => {
            console.log(error, "error");
          }
        );
    }
  };
  const form = useRef();
  const refOne = useRef(null);
  const handlePhone = (e) => {
    setPhoneNo(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setAutoCompleteFrom(false);
      setAutoCompleteTo(false);
      setOpen(false);
    }
  };

  const onChangeWhere = (e) => {
    if (e) {
      setAutoCompleteFrom(true);
    }
    setValue(e.target.value);
  };
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };
  const onChangeTo = (e) => {
    if (e) {
      setAutoCompleteTo(true);
    }
    setValueTo(e.target.value);
  };
  console.log(data, "dummyData");
  const onSearchTo = (searchTerm) => {
    setValueTo(searchTerm);
    console.log("search ", searchTerm);
  };
  const [successOpen, setSuccessOpen] = React.useState(false);
  const handleClose = () => {
    setSuccessOpen(false);
  };

  return (
    <div className="mainContainer">
      <SuccessModal
        successOpen={successOpen}
        handleClose={handleClose}
        successText="trip"
      />

      <div
        style={{ backgroundColor: styling ? "#4E96BA" : "" }}
        className={styling ? "" : "fieldsContainer"}
      >
        {styling ? (
          <div
            style={{
              display: "flex",
              marginLeft: 20,
              marginTop: 20,
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
                cursor: "pointer",
              }}
              onClick={() => handleTripSelect("Round Trip")}
            >
              Round trip
            </div>
            <div
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 15,
                paddingBottom: 15,
                backgroundColor: selectTripDate === "One Way" ? "white" : "",
                color: "black",
                cursor: "pointer",
              }}
              onClick={() => handleTripSelect("One Way")}
            >
              One way
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 15,
                paddingBottom: 15,
                backgroundColor:
                  selectTripDate === "Round Trip"
                    ? "rgb(0, 122, 193,0.9) "
                    : "",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => handleTripSelect("Round Trip")}
            >
              Round trip
            </div>
            <div
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 15,
                paddingBottom: 15,
                backgroundColor:
                  selectTripDate === "One Way" ? "rgb(0, 122, 193,0.9)" : "",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => handleTripSelect("One Way")}
            >
              One way
            </div>
          </div>
        )}

        <div className={styling ? "form_bookNow_wrapper" : ""}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              fontWeight: 700,
              fontSize: 35,
              backgroundColor: styling ? "" : "rgb(0, 122, 193,0.9)",
              paddingTop: 20,
            }}
          >
            Book your flight
          </div>
          <form style={{ display: "flex" }} ref={form} onSubmit={sendEmail}>
            <Grid
              container
              md={12}
              sm={12}
              xs={12}
              style={{
                display: styling ? "" : "flex",
                backgroundColor: styling ? "" : "rgb(0, 122, 193,0.9)",
                alignItems: "center",
                width: "100%",
                // justifyContent: "center",
                paddingBottom: 15,
                paddingTop: 15,
                paddingLeft: 5,
                paddingRight: 5,
              }}
            >
              <Grid
                item
                style={{
                  marginBottom: 8,
                  marginTop: 8,
                  marginRight: 2.5,
                  marginLeft: 2.5,
                }}
                md={styling ? 12 : 2.1}
                sm={3.7}
                xs={11.9}
              >
                <legend className={styling ? "main" : "main_text"}>
                  FLYING FROM
                </legend>
                <span>
                  <Input
                    className={styling ? "bookNowContainer" : "container"}
                    style={{
                      color: styling ? "white" : "black",
                      fontSize: 12,
                    }}
                    name="name"
                    type="text"
                    disableUnderline
                    value={value.split(",")[0]}
                    id={styling ? "bookNow" : "text"}
                    autoComplete="off"
                    onChange={(e) => onChangeWhere(e)}
                    placeholder="City or Airport"
                    startAdornment={
                      <InputAdornment position="start">
                        <RoomIcon
                          style={{ width: 20, height: 20, color: "black" }}
                        />
                      </InputAdornment>
                    }
                  />
                </span>
                {validationTo && (
                  <div className={styling ? "styling_error" : "error"}>
                    This field is required.
                  </div>
                )}
                {autoCompleteFrom ? (
                  <div ref={refOne} className="auto_complete_form">
                    {data1
                      ?.filter((item) => {
                        const searchTerm = value.toLowerCase();
                        const fullName = item.full_name.toLowerCase();
                        if (fullName === searchTerm) {
                          setAutoCompleteFrom(false);
                        }
                        if (searchTerm === "") {
                          return fullName;
                        } else {
                          return (
                            searchTerm &&
                            fullName.includes(searchTerm) &&
                            fullName !== searchTerm
                          );
                        }
                      })
                      .map((item) => (
                        <div
                          onClick={() => onSearch(item.full_name)}
                          className="dropdown-row"
                          key={item.full_name}
                        >
                          <spam style={{ fontWeight: "600" }}>
                            {item.full_name.split(",")[0]},
                          </spam>
                          {item.full_name.split(",")[1]}
                        </div>
                      ))}
                  </div>
                ) : null}
              </Grid>

              <Grid
                item
                style={{
                  marginBottom: 8,
                  marginTop: 8,
                  marginRight: 2.5,
                  marginLeft: 2.5,
                }}
                md={styling ? 12 : 2.1}
                sm={3.7}
                xs={11.9}
              >
                <legend className={styling ? "main" : "main_text"}>
                  FLYING TO
                </legend>

                <Input
                  className={styling ? "bookNowContainer" : "container"}
                  style={{ color: styling ? "white" : "black", fontSize: 12 }}
                  name="text1"
                  type="text"
                  value={valueTo.split(",")[0]}
                  disableUnderline
                  id={styling ? "bookNow" : "text"}
                  autoComplete="off"
                  onChange={(e) => onChangeTo(e)}
                  placeholder="City or Airport"
                  startAdornment={
                    <InputAdornment position="start">
                      <RoomIcon
                        style={{ width: 20, height: 20, color: "black" }}
                      />
                    </InputAdornment>
                  }
                />
                {validationFrom && (
                  <div className={styling ? "styling_error" : "error"}>
                    This field is required.
                  </div>
                )}
                {autoCompleteTo ? (
                  <div ref={refOne} className="auto_complete_form">
                    {data2
                      .filter((item) => {
                        const searchTerm = valueTo.toLowerCase();
                        const fullName = item.full_name.toLowerCase();
                        if (fullName === searchTerm) {
                          setAutoCompleteTo(false);
                        }
                        if (searchTerm === "") {
                          return fullName;
                        } else {
                          return (
                            searchTerm &&
                            fullName.includes(searchTerm) &&
                            fullName !== searchTerm
                          );
                        }
                      })
                      .map((item) => (
                        <div
                          onClick={() => onSearchTo(item.full_name)}
                          className="dropdown-row"
                          key={item.full_name}
                        >
                          <spam style={{ fontWeight: "600" }}>
                            {item.full_name.split(",")[0]},
                          </spam>
                          {item.full_name.split(",")[1]}
                        </div>
                      ))}
                  </div>
                ) : null}
              </Grid>
              <Grid
                style={{
                  marginBottom: 8,
                  marginTop: 8,
                  marginRight: 2.5,
                  marginLeft: 2.5,
                }}
                item
                md={styling ? 12 : 2.1}
                sm={3.7}
                xs={11.9}
              >
                <div>
                  <DateRangeComp
                    styling={styling}
                    validationDate={validationDate}
                    selectTripDate={selectTripDate}
                    setDateField={setDateField}
                    dateField={dateField}
                  />
                </div>
              </Grid>
              <Grid
                style={{
                  marginBottom: 8,
                  marginTop: 8,
                  marginRight: 2.5,
                  marginLeft: 2.5,
                }}
                item
                md={styling ? 12 : 2.1}
                sm={3.7}
                xs={11.9}
                // style={{ marginLeft: 10 }}
              >
                <legend className={styling ? "main" : "main_text"}>
                  PASSENGERS
                </legend>
                <div onClick={handleOpen}>
                  <Input
                    className={styling ? "bookNowContainer" : "container"}
                    id={styling ? "bookNow" : "text"}
                    name="counter"
                    autoComplete="off"
                    style={{
                      color: "black",
                      backgroundColor: "white",
                      fontSize: 12,
                      width: "100%",
                    }}
                    disableUnderline
                    value={`(${count}) Adult, (${count1}) Child, (${count2}) Infant`}
                    placeholder={`(${count}) Adult, (${count1}) Child, (${count2}) Infant`}
                    color="black"
                  />
                </div>
                {validationPhone && (
                  <div
                    className={styling ? "styling_error" : "error"}
                    style={{ color: "#47433c" }}
                  >
                    .
                  </div>
                )}

                {open ? (
                  <>
                    <div
                      ref={refOne}
                      className={
                        styling ? "book_now_mainPassenger" : "mainPassengers"
                      }
                      style={{
                        position: "absolute",
                      }}
                    >
                      <div className="textPassenger">Passengers</div>
                      <div className="divider"></div>
                      <div className="categoryContainer">
                        <div className="passengerCategory">Adult</div>
                        <div className="Adultbutton">
                          <div className="counterStyle" onClick={Adultdecrease}>
                            -
                          </div>
                          <h1 className="countText">{count}</h1>
                          <div
                            onClick={() => setCount(count + 1)}
                            className="AdultIncrease"
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div className="divider"></div>
                      <div className="categoryContainer">
                        <div className="passengerCategory">Child</div>
                        <div className="Childbutton">
                          <div onClick={Childdecrease} className="counterStyle">
                            -
                          </div>
                          <h1 className="count1Text">{count1}</h1>
                          <div
                            onClick={() => setCount1(count1 + 1)}
                            className="AdultIncrease"
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div className="divider"></div>
                      <div className="categoryContainer">
                        <div className="passengerCategory">Infant</div>
                        <div className="Infantbutton">
                          <div
                            onClick={Infantdecrease}
                            className="counterStyle"
                          >
                            -
                          </div>
                          <h1 className="count2Text">{count2}</h1>
                          <div
                            onClick={() => setCount2(count2 + 1)}
                            className="AdultIncrease"
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div className="divider" />
                      <div
                        onClick={() => setOpen(!open)}
                        className="doneContainer"
                      >
                        <div className="doneButtonStyle">Done</div>
                      </div>
                    </div>
                  </>
                ) : null}
              </Grid>

              <Grid
                style={{
                  marginBottom: 8,
                  marginTop: 8,
                  marginRight: 2.5,
                  marginLeft: 2.5,
                }}
                item
                md={styling ? 12 : 2.1}
                sm={3.7}
                xs={styling ? 11.9 : 5.8}
              >
                <legend className={styling ? "main" : "main_text"}>
                  PHONE
                </legend>
                <Input
                  className={styling ? "bookNowContainer" : "container"}
                  style={{ color: "black", fontSize: 12 }}
                  type="number"
                  disableUnderline
                  fullWidth
                  name="phone"
                  autoComplete="off"
                  value={phoneNo}
                  onChange={(e) => handlePhone(e)}
                  id={styling ? "bookNow" : "text"}
                  placeholder="+44-XXXX-XXXX"
                  startAdornment={
                    <InputAdornment position="start">
                      <PhoneIcon
                        style={{ width: 20, height: 20, color: "black" }}
                      />
                    </InputAdornment>
                  }
                />
                {validationPhone && (
                  <div className={styling ? "styling_error" : "error"}>
                    This field is required.
                  </div>
                )}
              </Grid>

              <Grid
                style={{
                  marginBottom: 5,
                  marginTop: 25,
                }}
                item
                md={styling ? 12 : 1}
                sm={3}
                xs={11.9}
              >
                <button type="submit" className="find_now_button">
                  Submit
                </button>
                {validationPhone && (
                  <div className={styling ? "styling_error" : "error"}>.</div>
                )}
              </Grid>
            </Grid>
          </form>
        </div>

        {styling && (
          <img
            width={"92%"}
            height={"320px"}
            style={{
              marginLeft: responsive ? 20 : 15,
              marginTop: responsive ? 10 : 15,
              marginBottom: responsive ? 10 : 15,
            }}
            src={fromImg}
            alt="fromImg"
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
