import React from "react";
import { Grid } from "@mui/material";
import * as Yup from "yup";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";
import { useRef } from "react";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
const loginSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  email: Yup.string().email().required("An email is required"),
  message: Yup.string().required("This field is required"),
  phone: Yup.string().required("This field is required"),
});
function InstantFlight() {
  const [hide, setHide] = useState(false);

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
    if (e && phoneValue != "" && phoneValue != "44") {
      emailjs
        .sendForm(
          "service_xls7aht",
          "template_snswcdq",
          form.current,
          "7m6bYCmtfGWWA8CtZ"
        )
        .then(
          (result) => {},
          (error) => {}
        );
    }
  };

  return (
    <>
      {anchorE3 ? (
        <div
          style={{
            backgroundColor: "white",
            width: 400,
            height: 280,
            position: "fixed",
            left: 0,
            marginRight: 20,
            bottom: 0,
            cursor: "pointer",
            paddingTop: 10,
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              width={"400px"}
              height={"150px"}
              style={{ marginTop: -25 }}
              src={require("../../asstes/images/logo.png")}
            />
            <div style={{ fontSize: 15, color: "gray", marginTop: 20 }}>
              For a free & immediate callback, enter your number below and we
              will call you within 30 Seconds.
            </div>
            <div onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
          <Grid
            style={{
              backgroundColor: "whitesmoke",
              width: "100%",
            }}
            item
            md={5}
          >
            <form style={{ display: "flex" }} ref={form} onSubmit={sendEmail}>
              <div
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 50,
                  backgroundColor: "white",
                  marginTop: -10,
                  paddingTop: 3,
                  paddingBottom: 3,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
                <PhoneInput
                  containerStyle={{ marginBottom: 20 }}
                  placeholder="Número de Teléfono "
                  value={phoneValue}
                  onChange={setPhoneValue}
                  inputStyle={{
                    width: "96%",
                    padding: 25,
                    marginLeft: 20,
                  }}
                  buttonStyle={{}}
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
        <div
          onClick={handleOpenModal}
          style={{
            backgroundColor: "#5DA5C2",
            borderRadius: 10,
            position: "fixed",
            left: 0,
            bottom: 0,
            width: 230,
            height: 80,
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
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
