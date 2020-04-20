import React from "react";
import { Switch, withRouter, RouteProps } from "react-router";
import { BrowserRouter as Router, Route, RouteComponentProps, Redirect } from "react-router-dom";
import { withCookies, ReactCookieProps } from "react-cookie";

import DefaultSettingPage from "pages/default/DefaultSettingPage";
import DefaultTermsPage from "pages/default/DefaultTermsPage";
import UserListPage from "pages/user/UserListPage";
import UserPushPage from "pages/user/UserPushPage";
import DealDListPage from "pages/deal/DealDListPage";
import DealPListPage from "pages/deal/DealPListPage";
import DealProductPage from "pages/deal/DealProductPage";
import InquiryPage from "pages/board/InquiryPage";
import NoticePage from "pages/board/NoticePage";
import QnAPage from "pages/board/QnAPage";
import QnaCategoryPage from "pages/board/QnaCategoryPage";
import LoginPage from "pages/login/LoginPage";
//  여기 이상함 확인좀 !!!

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<{}>;
  role: string[] | string;
}

interface Props extends RouteComponentProps, ReactCookieProps {}

class App extends React.Component<Props> {
  PrivateRoute = ({ component: Component, ...other }: PrivateRouteProps) => {
    return (
      <Route
        {...other}
        render={(props: any) => {
          // if (
          //   this.state.isLoading ||
          //   this.UserStore.pending["LOGIN"] ||
          //   this.UserStore.pending["SESSION_REFRESH"]
          // )
          //   return null;
          // // || !this.UserStore.user
          // if (!this.UserStore.isLoggedIn) {
          //   console.log(this.UserStore.isLoggedIn!);
          //   console.log(this.UserStore.user!);
          //   console.log(client.defaults.headers.common["Authorization"]);
          // return <Redirect to="/login" />;
          // }

          return <Component {...props} />;
        }}
      />
    );
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <this.PrivateRoute exact path="/" role="Login" component={DefaultSettingPage} />
          <this.PrivateRoute
            exact
            path="/default/setting"
            role="Login"
            component={DefaultSettingPage}
          />
          <this.PrivateRoute
            exact
            path="/default/terms"
            role="Login"
            component={DefaultTermsPage}
          />
          <this.PrivateRoute exact path="/user/list" role="Login" component={UserListPage} />
          <this.PrivateRoute exact path="/user/push" role="Login" component={UserPushPage} />
          <this.PrivateRoute exact path="/deal/dlist" role="Login" component={DealDListPage} />
          <this.PrivateRoute exact path="/deal/pList" role="Login" component={DealPListPage} />
          <this.PrivateRoute exact path="/deal/product" role="Login" component={DealProductPage} />
          <this.PrivateRoute exact path="/board/inquiry" role="Login" component={InquiryPage} />
          <this.PrivateRoute exact path="/board/notice" role="Login" component={NoticePage} />
          <this.PrivateRoute exact path="/board/QnA" role="Login" component={QnAPage} />
          <this.PrivateRoute
            exact
            path="/board/QnACategory"
            role="Login"
            component={QnaCategoryPage}
          />
        </Switch>
      </Router>
    );
  }
}

export default withCookies(withRouter(App));
