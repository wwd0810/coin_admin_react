import React from "react";
import UserList from "components/user/list";
import UserStore from "stores/users";
import { inject, observer } from "mobx-react";

interface Props {
  userStore?: UserStore;
}

@inject("userStore")
@observer
class UserListContainer extends React.Component<Props> {
  private UserStore = this.props.userStore! as UserStore;

  // async componentDidMount() {
  //   await this.UserStore.GetUserList();
  // }

  getUserList = async (page?: number, query?: string, duration?: string) => {
    await this.UserStore.GetUserList(page, query, duration);
  };

  render() {
    return (
      <UserList
        userList={this.UserStore.UserList}
        paging={this.UserStore.Page}
        search={this.getUserList}
      />
    );
  }
}

export default UserListContainer;
