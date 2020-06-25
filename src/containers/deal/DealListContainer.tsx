import React from "react";
import DealList from "components/deal/dealList";
import MarketStore from "stores/market";
import { inject, observer } from "mobx-react";

interface Props {
  marketStore?: MarketStore;
}

@inject("marketStore")
@observer
class DealListContainer extends React.Component<Props> {
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
    await this.MarketStore.GetDealList(
      page,
      query,
      duration,
      quanLow,
      quanHigh,
      priceLow,
      priceHigh,
    );
  };

  render() {
    return (
      <DealList
        search={this.search}
        list={this.MarketStore.DealList}
        paging={this.MarketStore.Page}
      />
    );
  }
}

export default DealListContainer;
