import { Input } from "@material-ui/core";
import React, { useState } from "react";
import DateRangeComp from "./DateRangeComp";
import Grid from "@mui/material/Grid";

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
              <Input
                style={{
                  color: styling ? "black" : "white",
                  fontSize: 12,
                }}
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
            </Grid>
            <Grid md={styling ? 12 : 1.7} sm={3.7} xs={5.8}>
              <DateRangeComp
                styling={styling}
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
                type="phone"
                disableUnderline
                fullWidth
                name="phone"
                autoComplete="off"
                onChange={(e) => handlePhone(e)}
                id={styling ? "bookNow" : "text"}
                placeholder="+44-XXXX-XXXX"
              />
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
              <button className="find_now_button">Find Now</button>
            </Grid>
          </Grid>
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
