import { useEffect, useRef, useState } from "react";
import { DateRange, Calendar } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "./form.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Input, InputAdornment } from "@material-ui/core";

const DateRangeComp = ({
  selectTripDate,
  styling,
  setDateField,
  validationDate,
}) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [calendar, setCalendar] = useState("");

  const handleSelect = (date) => {
    setDateField(date);
    setCalendar(format(date, "MM/dd/yyyy"));
  };
  const refOne = useRef(null);

  useEffect(() => {
    setCalendar(format(new Date(), "MM/dd/yyyy"));
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      {selectTripDate === "Round Trip" ? (
        <>
          <div>
            <div
              className="main_text"
              style={{ color: styling ? "black" : "white" }}
            >
              DEPARTURE-RETURN DATE
            </div>
            <Input
              className={styling ? "bookNowContainer" : "container"}
              style={{
                color: "black",
                backgroundColor: "white",
                fontSize: 12,
                marginTop: 5,
                width: "100%",
              }}
              value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
                range[0].endDate,
                "MM/dd/yyyy"
              )}`}
              disableUnderline
              readOnly
              onClick={() => setOpen((open) => !open)}
              name="date"
              startAdornment={
                <InputAdornment position="start">
                  <CalendarMonthIcon
                    style={{ width: 20, height: 20, color: "#822E05" }}
                  />
                </InputAdornment>
              }
            />
            {validationDate && (
              <div
                style={{ marginTop: 13 }}
                className={styling ? "styling_error" : "error"}
              >
                This field is required.
              </div>
            )}
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 1,
            }}
            ref={refOne}
          >
            {open && (
              <DateRange
                className={"date_field"}
                minDate={new Date()}
                onChange={(item) => {
                  setRange([item.selection]);
                  setDateField(range);
                }}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction="horizontal"
                name="date"
              />
            )}
          </div>
        </>
      ) : (
        <div ref={refOne}>
          <>
            <div>
              <div
                className="main_text"
                style={{ color: styling ? "black" : "white" }}
              >
                DEPARTURE DATE
              </div>
              <Input
                className={styling ? "bookNowContainer" : "container"}
                style={{
                  color: "black",
                  marginTop: 5,
                  fontSize: 12,
                  width: "100%",
                  backgroundColor: "white",
                }}
                value={calendar}
                readOnly
                disableUnderline
                // className="inputBox"
                onClick={() => setOpen((open) => !open)}
                startAdornment={
                  <InputAdornment position="start">
                    <CalendarMonthIcon
                      style={{ width: 20, height: 20, color: "#822E05" }}
                    />
                  </InputAdornment>
                }
              />
              {validationDate && (
                <div
                  style={{ marginTop: 13 }}
                  className={styling ? "styling_error" : "error"}
                >
                  This field is required.
                </div>
              )}
            </div>
            <div style={{ position: "absolute", zIndex: 1 }}>
              {open && (
                <Calendar
                  minDate={new Date()}
                  date={new Date()}
                  editableDateInputs={true}
                  onChange={handleSelect}
                  className={"date_field"}
                />
              )}
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default DateRangeComp;
