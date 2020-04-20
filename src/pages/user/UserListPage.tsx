import React from "react";
import BaseTemplate from "components/base/baseTemplate";
import UserListContainer from "containers/user/UserListContainer";

function UserListPage() {
  return (
    <BaseTemplate
      topIdx={1}
      lnbIdx={0}
      lnbSubIdx={0}
      lnb_title="회원관리"
      contentTitle="회원리스트"
    >
      <UserListContainer />
    </BaseTemplate>
  );
}

export default UserListPage;
