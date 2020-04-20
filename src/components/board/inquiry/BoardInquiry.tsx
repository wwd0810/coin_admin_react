/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

function BoardInquiry() {
  return (
    <Wrap>
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
                <select></select>
                <input type="text" style={{ width: "300px", marginLeft: "5px" }} />
              </td>
            </tr>
            <tr>
              <th>답변여부</th>
              <td colSpan={3}>
                <input type="radio" id="all" />
                <label htmlFor="all">전체</label>
                <input type="radio" id="finish" />
                <label htmlFor="finish">답변완료</label>
                <input type="radio" id="wait" />
                <label htmlFor="wait">답변대기</label>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-center">
          <span className="btn-type1">
            <a>검색</a>
          </span>
          <span className="btn-type1 c3">
            <a>초기화</a>
          </span>
          <span className="btn-type1 c1" style={{ background: "#1f2b5d" }}>
            <a>검색 결과 엑셀다운로드</a>
          </span>
        </div>
      </div>
      <div className="box01">
        <table className="table01">
          <colgroup>
            <col width="4%" />
            <col width="25%" />
            <col />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">문의유형</th>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>2010</td>
              <td>일반</td>
              <td>ONDLC 기존 회원정보 삭제 안내</td>
              <td>admin</td>
              <td>2018-10-19 12:59:27.0</td>
            </tr>
          </tbody>
        </table>
        <div className="tbl_mb_area">
          <div className="paging_left">
            <a className="btn_set small str_org">선택삭제</a>
            <a className="btn_set small str_org">등록</a>
          </div>
          <div className="paging">
            <strong>1</strong>
            <strong>2</strong>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default BoardInquiry;
