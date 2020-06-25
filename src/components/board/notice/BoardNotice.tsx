/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import { NoticeType } from "stores/board/types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

interface Props {
  list: NoticeType[];
  paging?: Paging;
  search: (page?: number, query?: string) => void;
  del: (idx: number) => void;
  post: (title: string, contents: string) => void;
  update: (idx: number, title: string, contents: string) => void;
}

function BoardNotice({ list, del, post, update, search, paging }: Props) {
  const classes = useStyles();

  const [modify, setModify] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>();

  const [searchTitle, setSearchTitle] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  useEffect(() => {
    if (selected !== undefined) {
      setTitle(list[selected].title!);
      setContents(list[selected].contents!);
    }
  }, [list, selected]);

  useEffect(() => {
    search(page, searchTitle);
  }, [page, search]);

  const onSearch = () => {
    search(page, searchTitle);
  };

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

        update(idx, title, contents);

        setTitle("");
        setContents("");
        setSelected(undefined);
        setModify(false);
      }
    },

    [title, list, contents, selected, update],
  );

  const onPost = useCallback(
    (e: any) => {
      e.preventDefault();

      post(title, contents);

      setTitle("");
      setContents("");
      setModify(false);
    },
    [title, post, contents],
  );

  const handleModify = useCallback((e: any) => {
    e.preventDefault();

    const { id } = e.target;

    setSelected(Number(id));
    setModify(true);
  }, []);

  const onChangeSearch = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setSearchTitle(value);
  }, []);

  const onChangeTitle = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setTitle(value);
  }, []);

  const onChangeContents = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setContents(value);
  }, []);

  const handleReset = () => {
    setTitle("");
    setContents("");
    setSelected(undefined);
    setModify(false);
  };

  const handleAppy = () => {
    setModify(true);
  };

  const handlePage = (event: any, page: number) => {
    setPage(page - 1);
  };

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
                    <textarea value={title} onChange={onChangeTitle} />
                  </td>

                  <td>
                    <textarea value={contents} onChange={onChangeContents} />
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
                <tr>
                  <th>검색어</th>
                  <td colSpan={3}>
                    {/* <input type="checkbox" style={{ marginLeft: "10px" }} /> */}
                    {/* <label>상단 노출(중요)</label> */}
                    <input
                      type="text"
                      style={{ width: "300px" }}
                      value={searchTitle}
                      onChange={onChangeSearch}
                    />
                    <span className="btn-type1 ml" style={{ marginLeft: "10px" }}>
                      <a onClick={onSearch}>검색하기</a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="box01">
            <table className="table01">
              <colgroup>
                {/* <col style={{ width: "4%" }} /> */}
                <col style={{ width: "5%" }} />

                <col style={{ width: "*" }} />

                <col style={{ width: "15%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <thead>
                <tr>
                  {/* <th scope="col">
                    <input type="checkbox" />
                  </th> */}
                  <th scope="col">번호</th>

                  <th scope="col">제목</th>

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

                    <td>{data.title}</td>

                    <td>{data.created_at.toString()}</td>
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
              {/* <div className="paging">{pageItems()}</div> */}
              {/* <div className="paging"> */}
              <div className={classes.root}>
                <Pagination
                  count={paging ? Math.ceil(paging.count / paging.limit) : 0}
                  variant="outlined"
                  shape="rounded"
                  page={page + 1}
                  onChange={handlePage}
                />
              </div>
              {/* </div> */}
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

export default BoardNotice;
