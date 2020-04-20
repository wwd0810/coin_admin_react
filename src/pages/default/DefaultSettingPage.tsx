import React from "react";

import BaseTemplate from "components/base/baseTemplate";
import DefaultSettingContainer from "containers/default/DefaultSettingContainer";

function DefaultSettingPage() {
  return (
    <BaseTemplate
      lnb_title="기본설정"
      topIdx={0}
      lnbIdx={0}
      lnbSubIdx={0}
      contentTitle="기본정보설정"
    >
      <DefaultSettingContainer />
    </BaseTemplate>
  );
}

export default DefaultSettingPage;
