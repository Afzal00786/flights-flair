import { useEffect, useRef, useState } from "react";
import { DateRange, Calendar } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "./form.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRangeComp = ({ selectTripDate, styling }) => {
  console.log(styling, "styling");
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);
  // one way state
  const [calendar, setCalendar] = useState("");
  // on date change, store date in state

  const handleSelect = (date) => {
    // console.log(date)
    // console.log(format(date, 'MM/dd/yyyy'))
    setCalendar(format(date, "MM/dd/yyyy"));
  };
  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // set current date on component load
    setCalendar(format(new Date(), "MM/dd/yyyy"));
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      {selectTripDate === "Round Trip" ? (
        <>
          <div
            className={styling ? "bookNowContainer" : "container"}
            style={{ height: 50 }}
          >
            <div style={{ color: styling ? "black" : "white" }}>
              DEPARTURE-RETURN DATE
            </div>
            <input
              style={{
                backgroundColor: styling ? "white" : "rgba(85,105,109,0.1)",
                color: styling ? "black" : "white",
                borderWidth: 0,
                marginTop: 5,
                fontSize: 12,
                minWidth: 180,
              }}
              value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
                range[0].endDate,
                "MM/dd/yyyy"
              )}`}
              readOnly
              className="inputBox"
              onClick={() => setOpen((open) => !open)}
            />
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
                style={{ width: styling ? 260 : "" }}
                minDate={new Date()}
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction="horizontal"
                className="calendarElement"
              />
            )}
          </div>
        </>
      ) : (
        <div ref={refOne}>
          <>
            <div
              className={styling ? "bookNowContainer" : "container"}
              style={{ height: 50 }}
            >
              <div style={{ color: styling ? "black" : "white" }}>
                DEPARTURE DATE
              </div>
              <input
                style={{
                  backgroundColor: styling ? "white" : "rgba(0,0,0,0)",
                  color: styling ? "black" : "white",
                  borderWidth: 0,
                  marginTop: 5,
                  fontSize: 12,
                  minWidth: 180,
                }}
                value={calendar}
                readOnly
                className="inputBox"
                onClick={() => setOpen((open) => !open)}
              />
            </div>
            <div style={{ position: "absolute", zIndex: 1 }}>
              {open && (
                <Calendar
                  minDate={new Date()}
                  date={new Date()}
                  editableDateInputs={true}
                  onChange={handleSelect}
                  className="calendarElement"
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
