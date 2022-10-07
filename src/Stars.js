import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";
import "./main.css";

export default function Stars({count = 0}) {
  if (count < 1 || count > 5 || isNaN(+count)) {return};
  const starElements = [...Array(count)].map((item, index) => (
    <Star key={index} />
  ));
  return (
    <ul className="card-body-stars u-clearfix">
      {starElements}
    </ul>
  );
};

Stars.propTypes = {
  count: PropTypes.number.isRequired
};