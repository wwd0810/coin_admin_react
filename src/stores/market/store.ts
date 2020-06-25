import { observable, flow, computed } from "mobx";

import BaseStore from "stores/BaseStore";
import RootStore from "stores";
import { DealType, MCTypye, ProductType } from "./types";
import MarketService from "services/market/MarketService";

class MarketStore extends BaseStore {
  root: RootStore;

  constructor(root: RootStore) {
    super();
    this.root = root;
  }

  @observable
  private _marketCount?: MCTypye;

  @observable
  private _dealList: DealType[] = [];

  @observable
  private _productList: ProductType[] = [];

  @observable
  private _page?: Paging;

  @computed
  get MarketCount() {
    return this._marketCount;
  }

  @computed
  get DealList() {
    return this._dealList;
  }

  @computed
  get ProductList() {
    return this._productList;
  }

  @computed
  get Page() {
    return this._page;
  }

  GetMarketCount = flow(function* (this: MarketStore) {
    this._init("GET_MARKET_COUNT");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ count: MCTypye[] }>;
      } = yield MarketService.GetMarketCountAPI();

      const { count } = res.data;

      this._marketCount = count[0];

      this._success["GET_MARKET_COUNT"] = true;
    } catch (e) {
      this._failure["GET_MARKET_COUNT"] = [true, e];
    } finally {
      this._pending["GET_MARKET_COUNT"] = false;
    }
  });

  GetDealList = flow(function* (
    this: MarketStore,
    page?: number,
    query?: string,
    duration?: string,
    quanLow?: number,
    quanHigh?: number,
    priceLow?: number,
    priceHigh?: number,
  ) {
    this._init("GET_DEAL_LIST");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ list: DealType[]; paging: Paging }>;
      } = yield MarketService.GetDealListAPI(
        page,
        query,
        duration,
        quanLow,
        quanHigh,
        priceLow,
        priceHigh,
      );

      const { list, paging } = res.data;

      this._dealList = list;
      this._page = paging;

      this._success["GET_DEAL_LIST"] = true;
    } catch (e) {
      this._failure["GET_DEAL_LIST"] = [true, e];
    } finally {
      this._pending["GET_DEAL_LIST"] = false;
    }
  });

  GetProductList = flow(function* (
    this: MarketStore,
    page?: number,
    query?: string,
    duration?: string,
    quanLow?: number,
    quanHigh?: number,
    priceLow?: number,
    priceHigh?: number,
  ) {
    this._init("GET_PRODUCT_LIST");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ list: ProductType[]; paging: Paging }>;
      } = yield MarketService.GetProductListAPI(
        page,
        query,
        duration,
        quanLow,
        quanHigh,
        priceLow,
        priceHigh,
      );

      const { list, paging } = res.data;

      console.log(list);

      this._productList = list;
      this._page = paging;

      this._success["GET_PRODUCT_LIST"] = true;
    } catch (e) {
      this._failure["GET_PRODUCT_LIST"] = [true, e];
    } finally {
      this._pending["GET_PRODUCT_LIST"] = false;
    }
  });
}

export default MarketStore;
