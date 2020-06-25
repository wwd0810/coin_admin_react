/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { FaqType } from "stores/board/types";

interface Props {
  list: FaqType[];
  del: (idx: number) => void;
  post: (question: string, answer: string) => void;
  update: (idx: number, question: string, answer: string) => void;
  search: (query?: string) => void;
}

function BoardFaQ({ list, del, update, post, search }: Props) {
  const [modify, setModify] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>();

  const [query, setQuery] = useState<string>("");

  const [answer, setAnswer] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  const options = [
    { idx: 0, option: ["선택", "구분", "판매"] },
    { idx: 1, option: ["1Depth선텍"] },
    { idx: 2, option: ["질문", "작성자", "내용", "질문+내용"] },
    { idx: 3, option: ["------", "Y", "N"] },
  ];

  const onSearch = () => {
    search(query);
  };

  useEffect(() => {
    if (selected !== undefined) {
      setAnswer(list[selected].answer!);
      setQuestion(list[selected].question!);
    }
  }, [list, selected]);

  const onDelete = useCallback(
    (e: any) => {
      e.preventDefault();

      const { id } = e.target;

      const res = confirm("삭제하시겠습니끼?");

      if (res) del(Number(id));
    },
    [del],
  );

  const onUpdate = useCallback(
    (e: any) => {
      e.preventDefault();

      if (selected !== undefined) {
        const idx = list[selected].id;

        update(idx, question, answer);

        setAnswer("");
        setQuestion("");
        setSelected(undefined);
        setModify(false);
      }
    },
    [answer, list, question, selected, update],
  );

  const onPost = useCallback(
    (e: any) => {
      e.preventDefault();

      post(question, answer);

      setAnswer("");
      setQuestion("");
      setModify(false);
    },
    [answer, post, question],
  );

  const handleModify = useCallback((e: any) => {
    e.preventDefault();

    const { id } = e.target;

    setSelected(Number(id));
    setModify(true);
  }, []);

  const onChangeQuery = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setQuery(value);
  }, []);

  const onChangeAnswer = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setAnswer(value);
  }, []);

  const onChangeQuestion = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setQuestion(value);
  }, []);

  const handleReset = () => {
    setAnswer("");
    setQuestion("");
    setSelected(undefined);
    setModify(false);
  };

  const handleAppy = () => {
    setModify(true);
  };

  return (
    <Wrap>
      {modify ? (
        <>
          <div className="box1">
            <table className="table01">
              <colgroup>
                <col width="50%" />
                <col width="50%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">제목</th>
                  <th scope="col">내용</th>>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <textarea value={question} onChange={onChangeQuestion} />
                  </td>

                  <td>
                    <textarea value={answer} onChange={onChangeAnswer} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tbl_mb_area">
            <div className="paging_left">
              <button
                className="btn_set small str_org"
                onClick={selected !== undefined ? onUpdate : onPost}
              >
                {selected !== undefined ? "수정하기" : "등록하기"}
              </button>
              <button className="btn_set small" onClick={handleReset}>
                취소하기
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="box01">
            <table className="tbl-form">
              <colgroup>
                <col width="10%" />
                <col width="20%" />
                <col width="10%" />
                <col width="*" />
              </colgroup>
              <tbody>
                {/* <tr>
              <th>구분</th>
              <td colSpan={3}>
                <select id="depth0" name="cate0">
                  {options[0].option.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
            </tr> */}
                {/* <tr>
              <th>문의유형</th>
              <td colSpan={3}>
                <select>
                  {options[1].option.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
            </tr> */}
                {/* <tr>
              <th>작성일</th>
              <td colSpan={3}>
                <input
                  type="date"
                  name="search_sdate"
                  id="search_sdate"
                  className="text hasDatepicker"
                  // readOnly
                />
                ~
                <input
                  type="date"
                  name="search_sdate"
                  id="search_sdate"
                  className="text hasDatepicker"
                  // readOnly
                />
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a>오늘</a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a>1주일</a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a>1개월</a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a>3개월</a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a>6개월</a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a>1년</a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a>전체</a>
                </span>
              </td>
            </tr> */}
                <tr>
                  <th>검색어</th>
                  <td colSpan={3}>
                    {/* <select>
                      {options[2].option.map((data, idx) => (
                        <option key={idx}>{data}</option>
                      ))}
                    </select> */}
                    <input
                      type="text"
                      id="sear_text"
                      name="sear_text"
                      style={{ width: "400px" }}
                      value={query}
                      onChange={onChangeQuery}
                    />
                    <span className="btn-type1 ml" style={{ marginLeft: "10px" }}>
                      <a onClick={onSearch}>검색하기</a>
                    </span>
                  </td>
                </tr>
                {/* <tr>
              <th>베스트여부</th>
              <td>
                <select>
                  {options[3].option.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
              <th>노출여부</th>
              <td>
                <select>
                  {options[3].option.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
            </tr> */}
              </tbody>
            </table>
            {/* <div className="btn-center" style={{ marginTop: "10px" }}>
              <span className="btn-type1 ml">
                <a>검색하기</a>
              </span>
              <span className="btn-type1 c3 ml">
                <a>초기화</a>
              </span>
            </div> */}
          </div>
          <div className="box01">
            <table className="table01">
              <colgroup>
                {/* <col style={{ width: "3%" }} /> */}
                <col style={{ width: "5%" }} />
                {/* <col style={{ width: "16%" }} /> */}
                <col style={{ width: "*" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "15%" }} />
              </colgroup>
              <thead>
                <tr>
                  {/* <th scope="col">
                <input type="checkbox" />
              </th> */}
                  <th scope="col">번호</th>

                  <th scope="col">질문</th>
                  {/* <th scope="col">답변</th> */}
                  <th scope="col">
                    <div className="scope_col">
                      작성일
                      <span className="tbl_sort">
                        <a className="asc_order">1</a>
                        <a className="asc_order">2</a>
                      </span>
                    </div>
                  </th>
                  <th scope="col">관리하기</th>
                </tr>
              </thead>
              <tbody>
                {list.map((data, idx) => (
                  <tr key={idx}>
                    {/* <td></td> */}
                    <td>{data.id}</td>
                    <td>{data.question}</td>
                    {/* <td>{data.answer}</td> */}
                    <td>{data.created_at}</td>
                    <td>
                      <button
                        className="btn_set small str_org"
                        id={idx.toString()}
                        onClick={handleModify}
                      >
                        수정하기
                      </button>
                      <button className="btn_set small" id={data.id.toString()} onClick={onDelete}>
                        삭제하기
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="tbl_mb_area">
              <div className="paging_left">
                {/* <a className="btn_set small str_org">선택삭제</a> */}
                <a className="btn_set small str_org" onClick={handleAppy}>
                  등록
                </a>
              </div>
              {/* <div className="paging">
            <strong>1</strong>
            <strong>2</strong>
          </div> */}
            </div>
          </div>
        </>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  td {
    & > textarea {
      width: 100%;
      height: 200px;
    }
  }
`;

export default BoardFaQ;
