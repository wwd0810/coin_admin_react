import React from "react";
import BaseTemplate from "components/base/baseTemplate";
import BoardInquiryContainer from "containers/board/BoardInquiryContainer";

function InquiryPage() {
  return (
    <BaseTemplate
      topIdx={3}
      lnbIdx={2}
      lnbSubIdx={0}
      lnb_title="게시판관리"
      contentTitle="고객문의"
    >
      <BoardInquiryContainer />
    </BaseTemplate>
  );
}

export default InquiryPage;
