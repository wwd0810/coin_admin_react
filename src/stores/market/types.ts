import { UserMiny } from "stores/users/types";

export type MCTypye = {
  purchases_waiting_approval: number;
  purchases_waiting_deposit: number;
  purchases_deposit_completed: number;
  market_count_month: number;
  market_count_today: number;
  market_count_all: number;
  done_count_today: number;
  done_count_all: number;
  done_count_month: number;
};

export type MarketType = {
  id: number;
  quantity: string;
  price: string;
  fees: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type DealType = {
  id: number;
  status: string;
  reason?: string;
  canceled_at?: Date;
  approved_at?: Date;
  created_at: Date;
  updated_at: Date;
  market: MarketType;
  buyer: UserMiny;
  seller: UserMiny;
};

export type ProductType = {
  id: number;
  quantity: string;
  price: string;
  fees: string;
  status: string;
  isLike: boolean;
  canceled_at?: Date;
  approved_at?: Date;
  created_at: Date;
  updated_at?: Date;
  market: MarketType;
  seller: UserMiny;
  purchase: DealType;
};
