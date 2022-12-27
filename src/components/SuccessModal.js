import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckIcon from "@mui/icons-material/Check";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "background.paper",
  p: 3,
  borderRadius: 2,
};

const SuccessModal = ({ successOpen, handleClose, successText }) => {
  return (
    <div>
      <Modal open={successOpen} onClose={handleClose}>
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "#4E96BA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: -70,
                marginBottom: 30,
              }}
            >
              <CheckIcon style={{ color: "white", fontSize: 50 }} />
            </div>
            <div style={{ marginBottom: 20, fontSize: 30, fontWeight: 600 }}>
              Thank you!
            </div>
            <div style={{ color: "#616161", fontSize: 14 }}>
              Your {successText} details have been received, our Travel Expert
              will contact you shortly.
            </div>
            <div style={{ marginBottom: 50, color: "#616161", fontSize: 14 }}>
              Thanks!
            </div>
            <div
              onClick={handleClose}
              style={{
                cursor: "pointer",
                width: 260,
                height: 40,
                backgroundColor: "#4E96BA",
                display: "flex",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                marginBottom: 10,
              }}
            >
              OK
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default SuccessModal;
