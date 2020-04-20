import React from "react";
import BaseTemplate from "components/base/baseTemplate";
import UserPushContainer from "containers/user/UserPushContainer";

function UserPushPage() {
  return (
    <BaseTemplate
      topIdx={1}
      lnbIdx={1}
      lnbSubIdx={0}
      lnb_title="회원관리"
      contentTitle="PUSH자동발송관리"
    >
      <UserPushContainer />
    </BaseTemplate>
  );
}

export default UserPushPage;
