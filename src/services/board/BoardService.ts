import client from "lib/client";
import qs from "query-string";

class BoardService {
  // 공지사항 관련
  public GetNoticeListAPI(page?: number, query?: string) {
    return client.get(`/api/notices`, {
      params: {
        page,
        query,
      },
    });
  }

  public GetNoticeAPI(idx: number) {
    return client.get(`/api/notices/${idx}`);
  }

  public DeleteNoticeAPI(idx: number) {
    return client.delete(`/api//admin/notices/${idx}`);
  }

  public PostNoticeAPI(title: string, contents: string) {
    return client.post(`/api/admin/notices`, {
      title,
      contents,
    });
  }

  public UpdateNoticeAPI(idx: number, title: string, contents: string) {
    return client.patch(`/api/admin/notices/${idx}`, {
      title,
      contents,
    });
  }

  // FAQ 관련

  public GetFAQListAPI(query?: string) {
    return client.get(`/api/faq`, { params: { query } });
  }

  public GetFAQAPI(idx: number) {
    return client.get(`/api/admin/faq/${idx}`);
  }

  public PostFAQAPI(question: string, answer: string) {
    return client.post(`/api/admin/faq`, { question, answer });
  }

  public PatchFAQAPI(idx: number, question: string, answer: string) {
    return client.patch(`/api/admin/faq/${idx}`, { question, answer });
  }

  public DeleteFAQAPI(idx: number) {
    return client.delete(`/api/admin/faq/${idx}`);
  }

  // 1대1 문의

  public GetInquiryListAPI(page?: number, query?: string, status?: string) {
    return client.get(`/api/admin/inquiry`, {
      params: {
        query,
        page,
        status,
      },
    });
  }

  public GetInquiryAPI(idx: number) {
    return client.get(`/api/admin/inquiry/${idx}`);
  }

  public DeleteInquiryAPI(idx: number) {
    return client.delete(`/api/admin/inquiry/${idx}`);
  }

  public UpdateInquiryAPI(idx: number, answer: string) {
    return client.patch(`/api/admin/inquiry/${idx}`, qs.stringify({ answer }));
  }
}

export default new BoardService();
