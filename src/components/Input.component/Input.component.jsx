import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    value,
    type,
    placeholder,
    changeHandler,
    clickHandler,
    keyDownHandler,
    completed
  } = props;
  return (
    <div className="inputContainer">
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        checked={completed}
        onClick={clickHandler}
        onKeyDown={keyDownHandler}
        onChange={changeHandler}
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func,
  clickHandler: PropTypes.func,
  keyDownHandler: PropTypes.func,
  completed: PropTypes.bool
};

export default connect()(Input);
