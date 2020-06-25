/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { User } from "stores/users/types";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

interface Props {
  userList: User[];
  paging?: Paging;
  search: (page?: number, query?: string, duration?: string) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function UserList({ userList, paging, search }: Props) {
  const classes = useStyles();

  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  useEffect(() => {
    search(page, query, duration);
  }, [page]);

  const onChangeQuery = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setQuery(value);
  }, []);

  const onChangeDuration = useCallback(
    (e: any) => {
      e.preventDefault();

      const { id } = e.target;

      if (duration !== id) setDuration(id);
      else setDuration("");
    },
    [duration],
  );

  const handlePage = (event: any, page: number) => {
    setPage(page - 1);
  };

  const onSearch = () => {
    search(0, query, duration);
  };

  const options = [
    { title: "search", data: ["전체", "아이디", "이름", "이메일"] },
    { title: "date", data: ["가입일", "최종접속일"] },
    { title: "class", data: ["전체", "S", "A", "B", "C", "D"] },
    { title: "region", data: ["전체", "KR"] },
    { title: "qt", data: ["10개", "20개", "50개", "100개"] },
  ];
  return (
    <Wrap>
      <div className="box01">
        <table className="tbl-form">
          <colgroup>
            <col width="10%" />
            <col width="*" />
            <col width="10%" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>검색어</th>
              <td colSpan={3}>
                {/* <select name="searchfield" id="">
                  {options[0].data.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select> */}
                <input
                  type="text"
                  style={{ width: "300px", marginLeft: "5px" }}
                  value={query}
                  onChange={onChangeQuery}
                />
              </td>
            </tr>
            <tr>
              <th>기간조건</th>
              <td colSpan={3}>
                {/* <select name="searchfield" id="">
                  {options[1].data.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select> */}
                {/* <input
                  type="date"
                  name="search_sdate"
                  id="search_sdate"
                  className="text hasDatepicker"
                  style={{ marginLeft: "5px" }}
                  // readOnly
                />
                ~
                <input
                  type="date"
                  name="search_sdate"
                  id="search_sdate"
                  className="text hasDatepicker"
                  // readOnly
                /> */}
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="TODAY"
                    onClick={onChangeDuration}
                    style={{ background: duration === "TODAY" ? "#f47a21" : "" }}
                  >
                    오늘
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="1WEEK"
                    onClick={onChangeDuration}
                    style={{ background: duration === "1WEEK" ? "#f47a21" : "" }}
                  >
                    1주일
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="1MONTH"
                    onClick={onChangeDuration}
                    style={{ background: duration === "1MONTH" ? "#f47a21" : "" }}
                  >
                    1개월
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="3MONTH"
                    onClick={onChangeDuration}
                    style={{ background: duration === "3MONTH" ? "#f47a21" : "" }}
                  >
                    3개월
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="6MONTH"
                    onClick={onChangeDuration}
                    style={{ background: duration === "6MONTH" ? "#f47a21" : "" }}
                  >
                    6개월
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="1YEAR"
                    onClick={onChangeDuration}
                    style={{ background: duration === "1YEAR" ? "#f47a21" : "" }}
                  >
                    1년
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id=""
                    onClick={onChangeDuration}
                    style={{ background: duration === "ALL" ? "#f47a21" : "" }}
                  >
                    전체
                  </a>
                </span>
              </td>
            </tr>
            {/* <tr>
              <th>회원등급</th>
              <td>
                <select name="searchfield" id="">
                  {options[2].data.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
              <th>국가</th>
              <td>
                <select name="searchfield" id="">
                  {options[3].data.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
            </tr> */}
            {/* <tr>
              <th>이메일 수신여부</th>
              <td>
                <input type="radio" />
                <label>전체</label>
                <input type="radio" />
                <label>수신</label>
                <input type="radio" />
                <label>수신거부</label>
              </td>
              <th>PUSH 수신여부</th>
              <td>
                <input type="radio" />
                <label>전체</label>
                <input type="radio" />
                <label>수신</label>
                <input type="radio" />
                <label>수신거부</label>
              </td>
            </tr> */}
          </tbody>
        </table>
        <div className="btn-center" style={{ margin: "10px 0 0 0" }}>
          <span className="btn-type1 ml">
            <a onClick={onSearch}>검색하기</a>
          </span>
          <span className="btn-type1 c3 ml" style={{ marginLeft: "10px" }}>
            <a>초기화</a>
          </span>
        </div>
      </div>
      <div className="box01" style={{ marginTop: "20px" }}>
        <div className="result_title">
          <p>
            전체 <em>{paging && paging.count}</em>건
          </p>
          <div className="right">
            {/* <select>
              {options[4].data.map((data, idx) => (
                <option key={idx}>{data}</option>
              ))}
            </select> */}
          </div>
        </div>
        <table className="table01">
          <colgroup>
            {/* <col style={{ width: "2%" }} /> */}
            <col style={{ width: "3%" }} />
            <col style={{ width: "3%" }} />
            <col style={{ width: "5%" }} />
            {/* <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} /> */}
            <col style={{ width: "5%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            {/* <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} /> */}
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            {/* <col style={{ width: "4%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "*" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} /> */}
          </colgroup>
          <thead>
            <tr>
              {/* <th scope="col">
                <input type="checkbox" />
              </th> */}
              <th scope="col">번호</th>

              <th scope="col">국가</th>
              <th scope="col">이름</th>
              <th scope="col">아이디</th>
              {/* <th scope="col">회원등급</th>
              <th scope="col">판매건수</th>
              <th scope="col">구매건수</th> */}
              <th scope="col">딜링</th>
              <th scope="col">CP포인트</th>
              {/* <th scope="col">판매권한</th>
              <th scope="col">제재</th> */}
              <th scope="col">
                <div className="scope_col">
                  최종접속일
                  <span className="tbl_sort">
                    <a className="asc_order">1</a>
                    <a className="asc_order">2</a>
                  </span>
                </div>
              </th>
              <th scope="col">
                <div className="scope_col">
                  가입일
                  <span className="tbl_sort">
                    <a className="asc_order">1</a>
                    <a className="asc_order">2</a>
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {userList.map((data, idx) => (
              <tr key={idx}>
                {/* <td></td> */}
                <td>{data.id}</td>
                <td>KOR</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                {/* <td>D</td>
                <td>0</td>
                <td>0</td> */}
                <td>{data.dl.quantity}</td>
                <td>{data.cp.quantity}</td>
                {/* <td>Y</td>
                <td>-</td> */}
                <td>{data.updated_at ? data.updated_at : data.created_at}</td>
                <td>{data.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tbl_mb_area">
        {/* <div className="paging_left">
          <a className="btn_set small str_org">선택제재처리</a>
          <a className="btn_set small str_org">선택제재해지처리</a>
        </div> */}
        {/* <div className="paging">
          <strong>1</strong>
          <strong>2</strong>
        </div> */}
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
    </Wrap>
  );
}

const Wrap = styled.form``;

export default UserList;
