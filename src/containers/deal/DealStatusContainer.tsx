import React from "react";
import DealStatus from "components/deal/status";
import MarketStore from "stores/market";
import { inject, observer } from "mobx-react";

interface Props {
  marketStore?: MarketStore;
}

@inject("marketStore")
@observer
class DealStatusContainer extends React.Component<Props> {
  private MarketStore = this.props.marketStore! as MarketStore;

  async componentDidMount() {
    await this.MarketStore.GetMarketCount();
  }

  render() {
    return <DealStatus count={this.MarketStore.MarketCount} />;
  }
}

export default DealStatusContainer;
