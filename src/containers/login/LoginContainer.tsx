import React from "react";
import Login from "components/login";
import { withRouter, RouteComponentProps } from "react-router";
import { withCookies, ReactCookieProps } from "react-cookie";

interface Props extends RouteComponentProps, ReactCookieProps {}

class LoginContainer extends React.Component<Props> {
  render() {
    return <Login />;
  }
}

export default withCookies(withRouter(LoginContainer));
