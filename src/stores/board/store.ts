import { observable, flow, computed } from "mobx";

import BaseStore from "stores/BaseStore";
import RootStore from "stores";
import { NoticeType, FaqType, InquiryType } from "./types";
import BoardService from "services/board/BoardService";

class BoardStore extends BaseStore {
  root: RootStore;

  constructor(root: RootStore) {
    super();
    this.root = root;
  }

  @observable
  private _noticeList: NoticeType[] = [];

  @observable
  private _notice?: NoticeType;

  @observable
  private _faqList: FaqType[] = [];

  @observable
  private _faq?: FaqType;

  @observable
  private _inquiryList: InquiryType[] = [];

  @observable
  private _inquiry?: InquiryType;

  @observable
  private _page?: Paging;

  @computed
  get NoticeList() {
    return this._noticeList;
  }

  @computed
  get Notice() {
    return this._notice;
  }

  @computed
  get FaqList() {
    return this._faqList;
  }

  @computed
  get Faq() {
    return this._faq;
  }

  @computed
  get InquiryList() {
    return this._inquiryList;
  }

  @computed
  get Inquiry() {
    return this._inquiry;
  }

  @computed
  get Page() {
    return this._page;
  }

  // 공지사항 관련

  GetNoticeList = flow(function* (this: BoardStore, page?: number, query?: string) {
    this._init("GET_NOTICE_LIST");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ list: NoticeType[]; paging: Paging }>;
      } = yield BoardService.GetNoticeListAPI(page, query);

      const { list, paging } = res.data;

      this._noticeList = list;
      this._page = paging;

      this._success["GET_NOTICE_LIST"] = true;
    } catch (e) {
      this._failure["GET_NOTICE_LIST"] = [true, e];
    } finally {
      this._pending["GET_NOTICE_LIST"] = false;
    }
  });

  GetNotice = flow(function* (this: BoardStore, idx: number) {
    this._init("GET_NOTICE");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ data: NoticeType }>;
      } = yield BoardService.GetNoticeAPI(idx);

      const { data } = res.data;

      this._notice = data;

      this._success["GET_NOTICE"] = true;
    } catch (e) {
      this._failure["GET_NOTICE"] = [true, e];
    } finally {
      this._pending["GET_NOTICE"] = false;
    }
  });

  DeleteNotice = flow(function* (this: BoardStore, idx: number) {
    this._init("DELETE_NOTICE");
    try {
      yield BoardService.DeleteNoticeAPI(idx);

      this._success["DELETE_NOTICE"] = true;
    } catch (e) {
      this._failure["DELETE_NOTICE"] = [true, e];
    } finally {
      this._pending["DELETE_NOTICE"] = false;
    }
  });

  PostNotice = flow(function* (this: BoardStore, title: string, contents: string) {
    this._init("POST_NOTICE");
    try {
      yield BoardService.PostNoticeAPI(title, contents);

      this._success["POST_NOTICE"] = true;
    } catch (e) {
      this._failure["POST_NOTICE"] = [true, e];
    } finally {
      this._pending["POST_NOTICE"] = false;
    }
  });

  PatchNotice = flow(function* (this: BoardStore, idx: number, title: string, contents: string) {
    this._init("UPDATE_NOTICE");
    try {
      yield BoardService.UpdateNoticeAPI(idx, title, contents);

      this._success["UPDATE_NOTICE"] = true;
    } catch (e) {
      this._failure["UPDATE_NOTICE"] = [true, e];
    } finally {
      this._pending["UPDATE_NOTICE"] = false;
    }
  });

  // FAQ 관련

  GetFaqList = flow(function* (this: BoardStore, query?: string) {
    this._init("GET_FAQ_LIST");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ list: FaqType[] }>;
      } = yield BoardService.GetFAQListAPI(query);

      const { list } = res.data;

      this._faqList = list;

      this._success["GET_FAQ_LIST"] = true;
    } catch (e) {
      this._failure["GET_FAQ_LIST"] = [true, e];
    } finally {
      this._pending["GET_FAQ_LIST"] = false;
    }
  });

  GetFaq = flow(function* (this: BoardStore, idx: number) {
    this._init("GET_FAQ");
    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ list: FaqType }>;
      } = yield BoardService.GetFAQAPI(idx);

      const { list } = res.data;

      this._faq = list;

      this._success["GET_FAQ"] = true;
    } catch (e) {
      this._failure["GET_FAQ"] = [true, e];
    } finally {
      this._pending["GET_FAQ"] = false;
    }
  });

  PostFaq = flow(function* (this: BoardStore, question: string, answer: string) {
    this._init("POST_FAQ");

    try {
      yield BoardService.PostFAQAPI(question, answer);

      this._success["POST_FAQ"] = true;
    } catch (e) {
      this._failure["POST_FAQ"] = [true, e];
    } finally {
      this._pending["POST_FAQ"] = false;
    }
  });

  PatchFaq = flow(function* (this: BoardStore, idx: number, question: string, answer: string) {
    this._init("PATCH_FAQ");

    try {
      yield BoardService.PatchFAQAPI(idx, question, answer);

      this._success["PATCH_FAQ"] = true;
    } catch (e) {
      this._failure["PATCH_FAQ"] = [true, e];
    } finally {
      this._pending["PATCH_FAQ"] = false;
    }
  });

  DeleteFaq = flow(function* (this: BoardStore, idx: number) {
    this._init("DELETE_FAQ");

    try {
      yield BoardService.DeleteFAQAPI(idx);

      this._success["DELETE_FAQ"] = true;
    } catch (e) {
      this._failure["DELETE_FAQ"] = [true, e];
    } finally {
      this._pending["DELETE_FAQ"] = false;
    }
  });

  // 1대1 문의 관련

  GetInquiryList = flow(function* (
    this: BoardStore,

    page?: number,
    query?: string,
    status?: string,
  ) {
    this._init("GET_INQUIRY_LIST");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ list: InquiryType[]; paging: Paging }>;
      } = yield BoardService.GetInquiryListAPI(page, query, status);

      const { list, paging } = res.data;

      this._inquiryList = list;
      this._page = paging;

      this._success["GET_INQUIRY_LIST"] = true;
    } catch (e) {
      this._failure["GET_INQUIRY_LIST"] = [true, e];
    } finally {
      this._pending["GET_INQUIRY_LIST"] = false;
    }
  });

  GetInquiry = flow(function* (this: BoardStore, idx: number) {
    this._init("GET_INQUIRY");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ data: InquiryType }>;
      } = yield BoardService.GetInquiryAPI(idx);

      const { data } = res.data;

      this._inquiry = data;

      this._success["GET_INQUIRY"] = true;
    } catch (e) {
      this._failure["GET_INQUIRY"] = [true, e];
    } finally {
      this._pending["GET_INQUIRY"] = false;
    }
  });

  PatchInquiry = flow(function* (this: BoardStore, idx: number, answer: string) {
    this._init("PATCH_INQUIRY");

    try {
      yield BoardService.UpdateInquiryAPI(idx, answer);

      this._success["PATCH_INQUIRY"] = true;
    } catch (e) {
      this._failure["PATCH_INQUIRY"] = [true, e];
    } finally {
      this._pending["PATCH_INQUIRY"] = false;
    }
  });

  DeleteInquiry = flow(function* (this: BoardStore, idx: number) {
    this._init("DELETE_INQUIRY");

    try {
      yield BoardService.DeleteInquiryAPI(idx);

      this._success["DELETE_INQUIRY"] = true;
    } catch (e) {
      this._failure["DELETE_INQUIRY"] = [true, e];
    } finally {
      this._pending["DELETE_INQUIRY"] = false;
    }
  });
}

export default BoardStore;
