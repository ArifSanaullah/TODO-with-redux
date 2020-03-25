import React from "react";
import Input from "../Input.component/Input.component";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Login extends React.Component {
  render() {
    const { dispatch, username, password } = this.props;
    console.log(this.props);
    const {
      USERNAME_CHANGE_HANDLER,
      HANDLE_LOGIN,
      PASSWORD_CHANGE_HANDLER
    } = actions;
    return (
      <form>
        <Input
          type="text"
          placeholder="Username"
          todoValue={username}
          changeHandler={(e) => dispatch(USERNAME_CHANGE_HANDLER(e))}
        />
        <Input
          type="password"
          placeholder="Password"
          todoValue={password}
          changeHandler={(e) => dispatch(PASSWORD_CHANGE_HANDLER(e))}
        />
        <Input
          type="submit"
          todoValue="Login"
          clickHandler={(e) => {
            return dispatch(HANDLE_LOGIN(e, username, password));
          }}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { username, password, dispatch, history } = state;
  return { username, password, dispatch, history };
};

export default connect(mapStateToProps)(Login);
