import React from "react";
import BaseTemplate from "components/base/baseTemplate";
import BoardNoticeContainer from "containers/board/BoardNoticeContainer";

function NoticePage() {
  return (
    <BaseTemplate
      topIdx={3}
      lnbIdx={0}
      lnbSubIdx={0}
      lnb_title="게시판관리"
      contentTitle="공지사항"
    >
      <BoardNoticeContainer />
    </BaseTemplate>
  );
}

export default NoticePage;
