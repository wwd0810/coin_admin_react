import UserStore from "./users/";
import MarketStore from "./market";
import BoardStore from "./board";
import DefaultStore from "./default";

class RootStore {
  userStore: UserStore;
  marketStore: MarketStore;
  boardStore: BoardStore;
  defaultStore: DefaultStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.marketStore = new MarketStore(this);
    this.boardStore = new BoardStore(this);
    this.defaultStore = new DefaultStore(this);
  }
}

export default RootStore;
