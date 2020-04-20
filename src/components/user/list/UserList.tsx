/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

function UserList() {
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
                <select name="searchfield" id="">
                  {options[0].data.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
                <input type="text" style={{ width: "300px", marginLeft: "5px" }} />
              </td>
            </tr>
            <tr>
              <th>기간조건</th>
              <td colSpan={3}>
                <select name="searchfield" id="">
                  {options[1].data.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
                <input
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
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
          </tbody>
        </table>
        <div className="btn-center" style={{ margin: "10px 0 0 0" }}>
          <span className="btn-type1 ml">
            <a>검색하기</a>
          </span>
          <span className="btn-type1 c3 ml" style={{ marginLeft: "10px" }}>
            <a>초기화</a>
          </span>
        </div>
      </div>
      <div className="box01" style={{ marginTop: "20px" }}>
        <div className="result_title">
          <p>
            전체 <em>5000</em>건
          </p>
          <div className="right">
            <select>
              {options[4].data.map((data, idx) => (
                <option key={idx}>{data}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="table01">
          <colgroup>
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "5%" }} />
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
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">번호</th>

              <th scope="col">국가</th>
              <th scope="col">이름</th>
              <th scope="col">아이디</th>
              <th scope="col">회원등급</th>
              <th scope="col">판매건수</th>
              <th scope="col">구매건수</th>
              <th scope="col">딜링</th>
              <th scope="col">딜링포인트</th>
              <th scope="col">판매권한</th>
              <th scope="col">제재</th>
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
            <tr>
              <td></td>
              <td>2010</td>
              <td></td>
              <td>ㅁㄴㅇㅁㄴㅇ</td>
              <td>ㅁㄴㅇㅁㄴㅇ</td>
              <td>D</td>
              <td>0</td>
              <td>0</td>
              <td>0.0</td>
              <td>0</td>
              <td>Y</td>
              <td>-</td>
              <td>2020-04-15</td>
              <td>2020-04-15</td>
            </tr>
          </tbody>
        </div>
      </div>
      <div className="tbl_mb_area">
        <div className="paging_left">
          <a className="btn_set small str_org">선택제재처리</a>
          <a className="btn_set small str_org">선택제재해지처리</a>
        </div>
        <div className="paging">
          <strong>1</strong>
          <strong>2</strong>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.form``;

export default UserList;
