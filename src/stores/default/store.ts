import BaseStore from "stores/BaseStore";
import RootStore from "stores";
import { observable, computed, flow } from "mobx";
import { ServiceInfoType } from "./types";
import DefaultService from "services/default/DefaultService";

class DefaultStore extends BaseStore {
  root: RootStore;

  constructor(root: RootStore) {
    super();
    this.root = root;
  }

  @observable
  private _serviceInfo?: ServiceInfoType;

  @computed
  get ServiceInfo() {
    return this._serviceInfo;
  }

  GetServiceInfo = flow(function* (this: DefaultStore) {
    this._init("GET_SERVICE_INFO");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ service_info: ServiceInfoType }>;
      } = yield DefaultService.GetServiceInfo();

      const { service_info } = res.data;

      this._serviceInfo = service_info;

      this._success["GET_SERVICE_INFO"] = true;
    } catch (e) {
      this._failure["GET_SERVICE_INFO"] = [true, e];
    } finally {
      this._pending["GET_SERVICE_INFO"] = false;
    }
  });

  UpdateServiceInfo = flow(function* (
    this: DefaultStore,
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
    this._init("UPDATE_SERVICE_INFO");

    try {
      yield DefaultService.UpdateServiceInfo(
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

      this._success["UPDATE_SERVICE_INFO"] = true;
    } catch (e) {
      this._failure["UPDATE_SERVICE_INFO"] = [true, e];
    } finally {
      this._pending["UPDATE_SERVICE_INFO"] = false;
    }
  });
}

export default DefaultStore;
