import React from "react";
import PropTypes from "prop-types";

const Message = ({ type, message }) => {
  return (
    <p
      className={`px-2 pb-2 ${
        type === "success" ? "text-green-500" : "text-red-500"
      }`}
    >
      {message}
    </p>
  );
};
Message.proTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
};
Message.defaultProps = {
  type: "success",
  message: "",
};

export default Message;
