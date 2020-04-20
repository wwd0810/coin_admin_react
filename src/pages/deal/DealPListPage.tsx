import React from "react";
import BaseTemplate from "components/base/baseTemplate";
import DealDPListContainer from "containers/deal/DealDPListContainer";

function DealPListPage() {
  return (
    <BaseTemplate
      topIdx={2}
      lnbIdx={0}
      lnbSubIdx={1}
      lnb_title="물품/거래관리"
      contentTitle="물품리스트"
    >
      <DealDPListContainer />
    </BaseTemplate>
  );
}

export default DealPListPage;
