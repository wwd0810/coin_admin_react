import React from "react";
import DealDPList from "components/deal/pdList";
import MarketStore from "stores/market";
import { inject, observer } from "mobx-react";

interface Props {
  marketStore?: MarketStore;
}

@inject("marketStore")
@observer
class DealDPListContainer extends React.Component<Props> {
  private MarketStore = this.props.marketStore! as MarketStore;

  search = async (
    page?: number,
    query?: string,
    duration?: string,
    quanLow?: number,
    quanHigh?: number,
    priceLow?: number,
    priceHigh?: number,
  ) => {
    await this.MarketStore.GetProductList(
      page,
      query,
      duration,
      quanLow,
      quanHigh,
      priceLow,
      priceHigh,
    );

    console.log(this.MarketStore.ProductList);
  };

  render() {
    return (
      <DealDPList
        search={this.search}
        list={this.MarketStore.ProductList}
        paging={this.MarketStore.Page}
      />
    );
  }
}

export default DealDPListContainer;
