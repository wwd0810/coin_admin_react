import React from "react";
import BaseTemplate from "components/base/baseTemplate";
import BoardFaQContainer from "containers/board/BoardFaQContainer";

function QnAPage() {
  return (
    <BaseTemplate
      topIdx={3}
      lnbIdx={1}
      lnbSubIdx={0}
      lnb_title="게시판관리"
      contentTitle="자주하는질문"
    >
      <BoardFaQContainer />
    </BaseTemplate>
  );
}

export default QnAPage;
