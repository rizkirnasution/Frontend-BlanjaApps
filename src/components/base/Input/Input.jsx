import React from "react";
import PropTypes from "prop-types";
const Input = ({ id,className, ...props }) => {
  return (
    <div>
      <input
        id="floatingInput"
        className="form-control form-control-lg ms-2 mt-2 name-input"
        {...props}
      />
    </div>
  );
};


Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: "name",
  type: "text"
};
export default Input;
