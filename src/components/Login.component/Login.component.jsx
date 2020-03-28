import React from "react";
import Input from "../Input.component/Input.component";
import { connect } from "react-redux";
import { USERNAME_CHANGE_HANDLER, PASSWORD_CHANGE_HANDLER, HANDLE_LOGIN } from "../../actions/auth.actions" ;

class Login extends React.Component {
  render() {
    const { dispatch, username, password, history } = this.props;
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
            return dispatch(HANDLE_LOGIN(e, username, password, history));
          }}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return state.authReducers
};

export default connect(mapStateToProps)(Login);
