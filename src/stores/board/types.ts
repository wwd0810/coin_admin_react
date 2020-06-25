import { UserMiny } from "stores/users/types";

export type NoticeType = {
  id: number;
  title: string;
  contents: string;
  created_at: Date;
  updated_at: Date;
};

export type InquiryType = {
  id: number;
  title: string;
  contents: string;
  answer?: string;
  status: string;
  created_at: Date;
  updated_at?: Date;
  user: UserMiny;
};

export type FaqType = {
  id: number;
  question: string;
  answer: string;
  created_at: Date;
  updated_at: Date;
};
