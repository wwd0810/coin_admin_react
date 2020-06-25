import client from "lib/client";

class DefaultService {
  public GetServiceInfo() {
    return client.get(`/api/admin/service-info`);
  }

  public UpdateServiceInfo(
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
  ) {
    return client.patch(`/api/admin/service-info`, {
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
    });
  }
}

export default new DefaultService();
