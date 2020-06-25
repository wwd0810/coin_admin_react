import React from "react";
import DefaultSetting from "components/default/setting";
import DefaultStore from "stores/default";
import { inject, observer } from "mobx-react";

interface Props {
  defaultStore?: DefaultStore;
}

@inject("defaultStore")
@observer
class DefaultSettingContainer extends React.Component<Props> {
  private DefaultStore = this.props.defaultStore! as DefaultStore;

  async componentDidMount() {
    await this.DefaultStore.GetServiceInfo();
  }

  update = async (
    service_name_ko: string,
    service_name_en: string,
    company_name_ko: string,
    company_name_en: string,
    owner_name_ko: string,
    owner_name_en: string,
    registration_num: string,
    mail_num: string,
    address_ko: string,
    address_en: string,
    phone: string,
    fax: string,
    privacy_officer: string,
    admin_email: string,
  ) => {
    await this.DefaultStore.UpdateServiceInfo(
      service_name_ko,
      service_name_en,
      company_name_ko,
      company_name_en,
      owner_name_ko,
      owner_name_en,
      registration_num,
      mail_num,
      address_ko,
      address_en,
      phone,
      fax,
      privacy_officer,
      admin_email,
    );

    // if (this.DefaultStore.success["UPDATE_SERVICE_INFO"]) {
    //   await this.DefaultStore.GetServiceInfo();
    // }
  };

  render() {
    return <DefaultSetting data={this.DefaultStore.ServiceInfo} update={this.update} />;
  }
}

export default DefaultSettingContainer;
