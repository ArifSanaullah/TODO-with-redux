import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    todoValue,
    type,
    placeholder,
    changeHandler,
    clickHandler,
    keyDownHandler,
    checked
  } = props;
  return (
    <input
      value={todoValue}
      type={type}
      placeholder={placeholder}
      onClick={clickHandler}
      onKeyDown={keyDownHandler}
      onChange={changeHandler}
      defaultChecked={checked}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func,
  clickHandler: PropTypes.func,
  keyDownHandler: PropTypes.func,
  checked: PropTypes.bool
};

export default connect()(Input);
