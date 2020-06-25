import client from "lib/client";

class MarketService {
  public GetMarketCountAPI() {
    return client.get(`/api/admin/market/count`);
  }

  public GetDealListAPI(
    page?: number,
    query?: string,
    duration?: string,
    quanLow?: number,
    quanHigh?: number,
    priceLow?: number,
    priceHigh?: number,
  ) {
    return client.get(`/api/admin/market/purchases`, {
      params: {
        page,
        query,
        duration,
        quanLow,
        quanHigh,
        priceLow,
        priceHigh,
      },
    });
  }

  public GetProductListAPI(
    page?: number,
    query?: string,
    duration?: string,
    quanLow?: number,
    quanHigh?: number,
    priceLow?: number,
    priceHigh?: number,
  ) {
    return client.get(`/api/admin/market/product`, {
      params: {
        page,
        query,
        duration,
        quanLow,
        quanHigh,
        priceLow,
        priceHigh,
      },
    });
  }
}

export default new MarketService();
