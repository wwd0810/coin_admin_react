import React from "react";
import BaseTemplate from "components/base/baseTemplate";
import BoardFaQCContainer from "containers/board/BoardFaQCContainer";

function QnaCategoryPage() {
  return (
    <BaseTemplate
      topIdx={3}
      lnbIdx={1}
      lnbSubIdx={1}
      lnb_title="게시판관리"
      contentTitle="자주하는질문 카테고리관리"
    >
      <BoardFaQCContainer />
    </BaseTemplate>
  );
}

export default QnaCategoryPage;
