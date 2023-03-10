import React from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";
import { useRef } from "react";
import "./instantFlights.css";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import SuccessModal from "../SuccessModal";
function InstantFlight() {
  const [anchorE3, setAnchorE3] = React.useState(false);

  const handleOpenModal = () => {
    setAnchorE3(true);
  };
  const handleClose = () => {
    setAnchorE3(false);
  };

  const [phoneValue, setPhoneValue] = useState("");
  console.log(phoneValue, "phoneValue");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (e && phoneValue !== "" && phoneValue !== "44") {
      setSuccessOpen(true);
      setTimeout(() => {
        setSuccessOpen(false);
      }, 8000);
      emailjs
        .sendForm(
          "service_1pizmdh",
          "template_9vawwsk",
          form.current,
          "_gShKaIWWnxzySOub"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };
  const [successOpen, setSuccessOpen] = React.useState(false);
  const handleCloseModal = () => {
    setSuccessOpen(false);
  };
  return (
    <>
      <SuccessModal
        successOpen={successOpen}
        handleClose={handleCloseModal}
        successText="contact"
      />
      {anchorE3 ? (
        <div className="instant_flight_modal_wrapper">
          <div style={{ display: "flex" }}>
            <img
              width={"400px"}
              height={"180px"}
              style={{ marginTop: -35 }}
              src={require("../../asstes/images/logo.webp")}
              alt="logo"
            />
            <div style={{ fontSize: 15, color: "gray", marginTop: 20 }}>
              For a free & immediate callback, enter your number below and we
              will call you within 30 Seconds.
            </div>
            <div style={{ marginRight: 10 }} onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
          <Grid
            style={{
              backgroundColor: "white",
              width: "100%",
            }}
            item
            md={12}
          >
            <form style={{ display: "flex" }} ref={form} onSubmit={sendEmail}>
              <div
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 20,
                  backgroundColor: "white",
                  marginTop: -30,
                  paddingTop: 3,
                  paddingBottom: 3,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  width: "100%",
                }}
              >
                <PhoneInput
                  inputProps={{
                    name: "phoneInstant",
                  }}
                  containerStyle={{ marginBottom: 20 }}
                  placeholder="Enter phone number"
                  value={phoneValue}
                  onChange={setPhoneValue}
                  inputStyle={{
                    width: "96%",
                    padding: 25,
                    marginLeft: 20,
                  }}
                  country={"gb"}
                />
                <button
                  type="submit"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#4E96BA",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                    padding: 12,
                    color: "white",
                    marginTop: 10,
                    marginBottom: 20,
                    textTransform: "none",
                    borderWidth: 0,
                    fontSize: 18,
                    width: "40%",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </Grid>
        </div>
      ) : (
        <></>
      )}
      {anchorE3 ? (
        <div></div>
      ) : (
        <div onClick={handleOpenModal} className="instant_flight_button">
          <div
            style={{
              backgroundColor: "white",
              padding: 1,
              borderRadius: 5,
              alignSelf: "center",
              marginRight: 5,
            }}
          >
            <PhoneEnabledIcon style={{ color: "#5DA5C2" }} />
          </div>

          <div style={{ color: "white" }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>
              Emergency flight only
            </div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>
              (Free instant Callbacks)
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InstantFlight;
