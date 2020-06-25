export type User = {
  id: number;
  username: string;
  name: string;
  phone: string;
  birth: Date;
  sex: string;
  created_at: Date;
  updated_at?: Date;
  cp: Account;
  dl: Account;
};

export type UserMiny = {
  id: number;
  username: string;
  name: string;
  phone: string;
  created_at: Date;
  updated_at?: Date;
};

export enum AccountType {
  COIN_POINT = "COIN_POINT",
  DILLING = "DILLING",
  DILLING_COIN = "DILLING_COIN",
}

export type Account = {
  id: string;
  type: AccountType;
  quantity: number;
  created_at: Date;
  updated_at?: Date;
};
