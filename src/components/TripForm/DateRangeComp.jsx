import { useEffect, useRef, useState } from "react";
import { DateRange, Calendar } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "./form.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

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
            <input
              style={{
                color: styling ? "black" : "white",
                backgroundColor: styling ? "white" : "rgba(85,105,109,0.1)",
                fontSize: 12,
                borderWidth: 0,
                marginTop: 5,
                width: "100%",
              }}
              value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
                range[0].endDate,
                "MM/dd/yyyy"
              )}`}
              readOnly
              onClick={() => setOpen((open) => !open)}
              name="date"
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
              <input
                style={{
                  backgroundColor: styling ? "white" : "rgba(0,0,0,0)",
                  color: styling ? "black" : "white",
                  borderWidth: 0,
                  marginTop: 5,
                  fontSize: 12,
                  width: "100%",
                }}
                value={calendar}
                readOnly
                className="inputBox"
                onClick={() => setOpen((open) => !open)}
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
