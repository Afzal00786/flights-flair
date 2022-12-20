import React, { useState } from "react";
import "./banner.css";

const Banner = () => {
  const [active, setactive] = useState(1);
  return (
    <div className="banner_wrapper">
      <div className="inqury_form_wraper">
        <div className="action_box">
          <div
            className={active === 1 ? "active_action_item" : "action_item"}
            onClick={() => setactive(1)}
          >
            Round Trip
          </div>
          <div
            className={active === 2 ? "active_action_item" : "action_item"}
            onClick={() => setactive(2)}
          >
            One Way
          </div>
        </div>
        <div className="action_box_conten">
          {active === 1 ? (
            <div className="form_box_round_trip">
              <div className="inq_form_items">Round trip</div>
              <div className="inq_form_items">Round trip</div>
              <div className="inq_form_items">Round trip</div>
              <div className="inq_form_items">Round trip</div>
              <div className="inq_form_search_btn">Search</div>
            </div>
          ) : (
			<div className="form_box_round_trip">
			<div className="inq_form_items">One Way</div>
			<div className="inq_form_items">One Way</div>
			<div className="inq_form_items">One Way</div>
			<div className="inq_form_items">One Way</div>
			<div className="inq_form_search_btn">Search</div>
		  </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
