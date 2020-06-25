/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import { InquiryType } from "stores/board/types";

interface Props {
  paging?: Paging;
  list: InquiryType[];
  del: (idx: number) => void;
  update: (idx: number, answer: string) => void;
  search: (page?: number, query?: string, status?: string) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function BoardInquiry({ list, del, update, search, paging }: Props) {
  const classes = useStyles();

  const [modify, setModify] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>();

  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  // const [isAnswer, setIsAnswer] = useState<number>(0);

  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    search(page, query);
  }, [page, search]);

  const onSearch = () => {
    let tmp: string = "";

    // alert(isAnswer);

    // if (isAnswer === 1) tmp = "ANSWER";
    // if (isAnswer === 2) tmp = "NOT_ANSWER";

    search(page, query, tmp);
  };
  useEffect(() => {
    if (selected !== undefined) {
      setAnswer(list[selected].answer!);
    }
  }, [list, selected]);

  const onDelete = useCallback(
    (e: any) => {
      e.preventDefault();

      const { id } = e.target;

      const res = confirm("삭제하시겠습니끼?");

      if (res) {
        del(Number(id));
        setPage(0);
      }
    },
    [del],
  );

  const onUpdate = useCallback(
    (e: any) => {
      e.preventDefault();

      if (selected !== undefined) {
        const idx = list[selected].id;

        update(idx, answer);

        setAnswer("");
        setSelected(undefined);
        setModify(false);
      }
    },
    [answer, list, selected, update],
  );

  const onChangeQuery = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setQuery(value);
  }, []);

  // const onChangeIsAnswer = useCallback((e: any) => {
  //   e.preventDefault();

  //   const { value } = e.target;

  //   setIsAnswer(value);
  // }, []);

  const handleModify = useCallback((e: any) => {
    e.preventDefault();

    const { id } = e.target;

    setSelected(Number(id));
    setModify(true);
  }, []);

  const onChangeAnswer = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setAnswer(value);
  }, []);

  const handleReset = () => {
    setAnswer("");
    setSelected(undefined);
    setModify(false);
  };

  const handlePage = (event: any, page: number) => {
    setPage(page - 1);
  };

  // const before = () => {};

  // const next = () => {
  //   const nextPage = Math.ceil(page / 10) * 10;

  //   setPage(nextPage);
  // };

  // const pageItems = () => {
  //   let tmpArr = [];

  //   if (paging) {
  //     const pages: number = Math.ceil(paging?.count / paging?.limit);

  //     for (let i = 0; i < pages; i++) {
  //       tmpArr.push(
  //         <strong id={i.toString()} key={i} onClick={handlePage}>
  //           {i + 1}
  //         </strong>,
  //       );
  //     }
  //   }

  //   return tmpArr;
  // };

  return (
    <Wrap>
      {modify ? (
        <>
          <div className="box1">
            <table className="table01">
              <colgroup>
                <col width="20%" />
                <col width="40%" />
                <col width="40%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">제목</th>
                  <th scope="col">내용</th>
                  <th scope="col">답변</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selected !== undefined ? list[selected].title : <textarea />}</td>
                  <td>{selected !== undefined ? list[selected].contents : <textarea />}</td>
                  <td>
                    <textarea value={answer} onChange={onChangeAnswer} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tbl_mb_area">
            <div className="paging_left">
              <button className="btn_set small str_org" onClick={onUpdate}>
                답변하기
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
                <tr>
                  <th>검색어</th>
                  <td colSpan={3}>
                    {/* <select></select> */}
                    <input
                      type="text"
                      style={{ width: "300px", marginLeft: "5px" }}
                      value={query}
                      onChange={onChangeQuery}
                    />
                    <span className="btn-type1 ml" style={{ marginLeft: "10px" }}>
                      <a onClick={onSearch}>검색하기</a>
                    </span>
                  </td>
                </tr>
                {/* <tr>
                  <th>답변여부</th>
                  <td colSpan={3}>
                    <input type="radio" id="all" value={0} onChange={onChangeAnswer} />
                    <label htmlFor="all">전체</label>
                    <input type="radio" id="finish" value={1} onChange={onChangeAnswer} />
                    <label htmlFor="finish">답변완료</label>
                    <input type="radio" id="wait" value={2} onChange={onChangeAnswer} />
                    <label htmlFor="wait">답변대기</label>
                  </td>
                </tr> */}
              </tbody>
            </table>
            {/* <div className="btn-center">
              <span className="btn-type1">
                <a onClick={onSearch}>검색</a>
              </span>
              <span className="btn-type1 c3">
                <a>초기화</a>
              </span>
              <span className="btn-type1 c1" style={{ background: "#1f2b5d" }}>
            <a>검색 결과 엑셀다운로드</a>
          </span>
            </div> */}
          </div>
          <div className="box01">
            <table className="table01">
              <colgroup>
                <col width="4%" />
                <col width="25%" />
                <col width="10%" />
                <col width="10%" />
                <col width="10%" />
                <col width="5%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">제목</th>
                  <th scope="col">작성자</th>
                  <th scope="col">
                    <div className="scope_col">
                      작성일
                      <span className="tbl_sort">
                        <a className="asc_order">1</a>
                        <a className="asc_order">2</a>
                      </span>
                    </div>
                  </th>
                  <th scope="col">답변여부</th>
                  <th scope="col">관리하기</th>
                </tr>
              </thead>
              <tbody>
                {list.map((data, idx) => (
                  <tr key={idx}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.user.name}</td>
                    <td>{data.created_at}</td>
                    <td>{data.status}</td>
                    <td>
                      <button
                        className="btn_set small str_org"
                        onClick={handleModify}
                        id={idx.toString()}
                      >
                        답변하기
                      </button>
                      <button className="btn_set small" onClick={onDelete} id={data.id.toString()}>
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
                {/* <a className="btn_set small str_org" onClick={handleApply}>
                  등록
                </a> */}
              </div>
              <div className={classes.root}>
                <Pagination
                  count={paging ? Math.ceil(paging.count / paging.limit) : 0}
                  variant="outlined"
                  shape="rounded"
                  page={page + 1}
                  onChange={handlePage}
                />
              </div>
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

export default BoardInquiry;
