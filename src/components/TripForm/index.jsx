import { Input } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import DateRangeComp from "./DateRangeComp";
import Grid from "@mui/material/Grid";
import data1 from "./dummyData.jsx";
import data2 from "./dummyData2.jsx";

console.log(data1, "datadata");
import "./form.css";
import Search from "./Search";
import { useLocation } from "react-router-dom";
const Contact = ({ fromImg, styling }) => {
  const location = useLocation();
  console.log(fromImg, "fromImg");
  console.log("hello");
  console.log(location.state, "dataroute");
  let data = location.state;
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
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
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
  const [fromField, setFromField] = useState("");
  const [whereField, setWhereField] = useState("");
  const [dateField, setDateField] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [validationTo, setValidationTo] = useState(false);
  const [validationFrom, setValidationFrom] = useState(false);
  const [validationDate, setValidationDate] = useState(false);
  const [validationPhone, setValidationPhone] = useState(false);

  const handleFind = () => {
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
    if (value != "" && valueTo != "" && dateField != "" && phoneNo != "") {
      console.log(value, "value");
      console.log(valueTo, "valueTo");
      console.log(dateField, "dateField");
      console.log(count, "count");
      console.log(count1, "count1");
      console.log(count2, "count2");
      console.log(phoneNo, "phoneNo");
      console.log(email, "email");
    }
  };
  const refOne = useRef(null);

  const handlePhone = (e) => {
    setPhoneNo(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDropDownTo = (e) => {
    setWhereField(e.target.value);

    if (e) {
      setAutoCompleteTo(true);
      setAutoCompleteFrom(false);
    }
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
  console.log(autoCompleteFrom, "autoComplete");

  const [value, setValue] = useState("");
  const [valueTo, setValueTo] = useState("");

  const onChangeWhere = (e) => {
    if (e) {
      setAutoCompleteFrom(true);
    }
    setValue(e.target.value);
  };
  console.log(data, "dummyData");
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  /////////////////

  const onChangeTo = (e) => {
    if (e) {
      setAutoCompleteTo(true);
    }
    setValueTo(e.target.value);
  };
  console.log(data, "dummyData");
  const onSearchTo = (searchTerm) => {
    setValueTo(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  //////////////

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
                  selectTripDate === "Round Trip" ? "rgba(0,0,0,0.5)" : "",
                color: "white",
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
                  selectTripDate === "One Way" ? "rgba(0,0,0,0.5)" : "",
                color: "white",
              }}
              onClick={() => handleTripSelect("One Way")}
            >
              One way
            </div>
          </div>
        )}

        <div className={styling ? "form_bookNow_wrapper" : ""}>
          <Grid
            container
            md={12}
            sm={12}
            xs={12}
            style={{
              display: styling ? "" : "flex",
              backgroundColor: styling ? "" : "rgba(0,0,0,0.5)",
              alignItems: "center",
              width: "100%",
              paddingBottom: 15,
              paddingTop: 15,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Grid
              md={styling ? 12 : 1.7}
              sm={3.7}
              xs={11.6}
              className={styling ? "bookNowContainer" : "container"}
            >
              <legend>FROM WHERE</legend>
              {/* <Search /> */}
              <Input
                style={{
                  color: styling ? "black" : "white",
                  fontSize: 12,
                }}
                name="name"
                type="text"
                disableUnderline
                value={value}
                id={styling ? "bookNow" : "text"}
                autoComplete="off"
                onChange={(e) => onChangeWhere(e)}
                placeholder="Departure"
              />
              {validationTo && (
                <div className="error">This field is required.</div>
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
                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((item) => (
                      <div
                        onClick={() => onSearch(item.full_name)}
                        className="dropdown-row"
                        key={item.full_name}
                      >
                        {item.full_name}
                      </div>
                    ))}
                </div>
              ) : null}
            </Grid>

            <Grid
              md={styling ? 12 : 1.7}
              sm={3.7}
              xs={11.6}
              className={styling ? "bookNowContainer" : "container"}
            >
              <legend>WHERE TO</legend>
              <Input
                style={{ color: "white", fontSize: 12 }}
                name="text1"
                type="text"
                value={valueTo}
                disableUnderline
                id={styling ? "bookNow" : "text"}
                autoComplete="off"
                onChange={(e) => onChangeTo(e)}
                placeholder="Arrival"
              />

              {validationFrom && (
                <div className="error">This field is required.</div>
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
                      return (
                        searchTerm &&
                        fullName.startsWith(searchTerm) &&
                        fullName !== searchTerm
                      );
                    })
                    .slice(0, 10)
                    .map((item) => (
                      <div
                        onClick={() => onSearchTo(item.full_name)}
                        className="dropdown-row"
                        key={item.full_name}
                      >
                        {item.full_name}
                      </div>
                    ))}
                </div>
              ) : null}
            </Grid>
            <Grid md={styling ? 12 : 1.7} sm={3.7} xs={5.8}>
              <DateRangeComp
                styling={styling}
                validationDate={validationDate}
                selectTripDate={selectTripDate}
                setDateField={setDateField}
                dateField={dateField}
              />
            </Grid>
            <Grid
              md={styling ? 12 : 1.7}
              sm={3.7}
              xs={5.8}
              className={styling ? "bookNowContainer" : "container"}
            >
              <legend>PASSENGERS</legend>
              <div onClick={handleOpen}>
                <input
                  disabled={true}
                  id={styling ? "bookNow" : "text"}
                  autoComplete="off"
                  style={{
                    color: "white",
                    backgroundColor: styling ? "white" : "rgba(0,0,0,0)",
                    fontSize: 12,
                    borderWidth: 0,
                    marginTop: 5,
                    width: "100%",
                  }}
                  placeholder={`(${count}) Adult, (${count1}) Child, (${count2}) Infant`}
                  color="white"
                />
              </div>
              {open ? (
                <>
                  <div
                    ref={refOne}
                    className="mainPassengers"
                    style={{
                      position: styling ? "relative" : "absolute",
                    }}
                  >
                    <div className="textPassenger">Passengers</div>
                    <div className="divider"></div>
                    <div className="adultContainer">
                      <div className="passengerCategory">Adult</div>
                      <div className="Adultbutton">
                        <button
                          className="counterStyle"
                          onClick={Adultdecrease}
                        >
                          -
                        </button>
                        <h1 className="countText">{count}</h1>
                        <button
                          onClick={() => setCount(count + 1)}
                          className="AdultIncrease"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="ChildContainer">
                      <div className="passengerCategory">Child</div>
                      <div className="Childbutton">
                        <button
                          onClick={Childdecrease}
                          className="counterStyle"
                        >
                          -
                        </button>
                        <h1 className="count1Text">{count1}</h1>
                        <button
                          onClick={() => setCount1(count1 + 1)}
                          className="ChildIncrease"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="InfantContainer">
                      <div className="passengerCategory">Infant</div>
                      <div className="Infantbutton">
                        <button onClick={decrease2} className="counterStyle">
                          -
                        </button>
                        <h1 className="count2Text">{count2}</h1>
                        <button
                          onClick={() => setCount2(count2 + 1)}
                          className="InfantIncrease"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div
                      onClick={() => setOpen(!open)}
                      className="doneContainer"
                    >
                      <button className="doneButtonStyle">Done</button>
                    </div>
                  </div>
                </>
              ) : null}
            </Grid>

            <Grid
              md={styling ? 12 : 1.7}
              sm={3.7}
              xs={5.8}
              className={styling ? "bookNowContainer" : "container"}
            >
              <legend>*PHONE</legend>
              <Input
                style={{ color: "white", fontSize: 12 }}
                type="number"
                disableUnderline
                fullWidth
                name="phone"
                autoComplete="off"
                onChange={(e) => handlePhone(e)}
                id={styling ? "bookNow" : "text"}
                placeholder="+44-XXXX-XXXX"
              />
              {validationPhone && (
                <div className="error">This field is required.</div>
              )}
            </Grid>

            <Grid
              md={styling ? 12 : 1.7}
              sm={3.7}
              xs={5.8}
              className={styling ? "bookNowContainer" : "container"}
            >
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
            </Grid>
            <Grid md={styling ? 12 : 1.5} sm={3} xs={12}>
              <button onClick={handleFind} className="find_now_button">
                Find Now
              </button>
            </Grid>
          </Grid>
        </div>
        {styling && (
          <img
            width={"91.5%"}
            style={{ marginLeft: 20, marginTop: 50 }}
            src={fromImg}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
