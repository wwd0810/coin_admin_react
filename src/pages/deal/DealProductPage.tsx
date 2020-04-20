import React from "react";
import BaseTemplate from "components/base/baseTemplate";
import DealStatusContainer from "containers/deal/DealStatusContainer";

function DealProductPage() {
  return (
    <BaseTemplate
      topIdx={2}
      lnbIdx={0}
      lnbSubIdx={0}
      lnb_title="물품/거래관리"
      contentTitle="물품/거래현황"
    >
      <DealStatusContainer />
    </BaseTemplate>
  );
}

export default DealProductPage;
