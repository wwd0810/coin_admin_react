import React from "react";
import BaseTemplate from "components/base/baseTemplate";
import DealListContainer from "containers/deal/DealListContainer";

function DealDListPage() {
  return (
    <BaseTemplate
      topIdx={2}
      lnbIdx={0}
      lnbSubIdx={2}
      lnb_title="물품/거래관리"
      contentTitle="거래리스트"
    >
      <DealListContainer />
    </BaseTemplate>
  );
}

export default DealDListPage;
