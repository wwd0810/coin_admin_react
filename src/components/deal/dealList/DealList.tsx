/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

function DaelList() {
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
                <select name="searchfield" id=""></select>
                <input type="text" style={{ width: "300px", marginLeft: "5px" }} />
              </td>
            </tr>
            <tr>
              <th>기간조건</th>
              <td colSpan={3}>
                <select name="searchfield" id=""></select>
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
              <th>등록딜링(DLC)갯수</th>
              <td colSpan={3}>
                <input
                  type="text"
                  className="text hasDatepicker"
                  style={{ marginLeft: "5px" }}
                  // readOnly
                />
                ~
                <input
                  type="text"
                  className="text hasDatepicker"
                  // readOnly
                />
              </td>
            </tr>
            <tr>
              <th>등록금액</th>

              <td colSpan={3}>
                <select name="searchfield" id=""></select>
                <input
                  type="text"
                  className="text hasDatepicker"
                  style={{ marginLeft: "5px" }}
                  // readOnly
                />
                ~
                <input
                  type="text"
                  className="text hasDatepicker"
                  // readOnly
                />
              </td>
            </tr>
            <tr>
              <th>거래진행상태</th>

              <td colSpan={3}>
                <select name="searchfield" id=""></select>
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
            <select></select>
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
          </colgroup>
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">번호</th>

              <th scope="col">국가</th>
              <th scope="col">주문번호</th>
              <th scope="col">판매자 아이디</th>
              <th scope="col">구매자 아이디</th>
              <th scope="col">딜링수량</th>
              <th scope="col">거래금액</th>
              <th scope="col">
                <div className="scope_col">
                  물품등록일
                  <span className="tbl_sort">
                    <a className="asc_order">1</a>
                    <a className="asc_order">2</a>
                  </span>
                </div>
              </th>
              <th scope="col">
                <div className="scope_col">
                  물품수정일
                  <span className="tbl_sort">
                    <a className="asc_order">1</a>
                    <a className="asc_order">2</a>
                  </span>
                </div>
              </th>
              <th scope="col">진행상태</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>2010</td>
              <td>KOR</td>
              <td>200408-09399504</td>
              <td>sda1397</td>
              <td>foryou1sj</td>
              <td>100</td>
              <td>1,000,000</td>
              <td>2020.04.11 08:23</td>
              <td>2020.04.11 08:23</td>
              <td>거래종료</td>
            </tr>
          </tbody>
        </div>
      </div>
      <div className="tbl_mb_area">
        <div className="paging">
          <strong>1</strong>
          <strong>2</strong>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default DaelList;
