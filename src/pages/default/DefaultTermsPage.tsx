import React from "react";
import DefaultTermsContainer from "containers/default/DefaultTermsContainer";
import BaseTemplate from "components/base/baseTemplate";

function DefaultTermsPage() {
  return (
    <BaseTemplate
      topIdx={0}
      lnbIdx={0}
      lnbSubIdx={1}
      lnb_title="기본설정"
      contentTitle="약관/개인정보설정"
    >
      <DefaultTermsContainer />
    </BaseTemplate>
  );
}

export default DefaultTermsPage;
