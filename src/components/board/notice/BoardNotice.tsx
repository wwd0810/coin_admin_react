/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

function BoardNotice() {
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
                <input type="checkbox" style={{ marginLeft: "10px" }} />
                <label>상단 노출(중요)</label>
                <input type="text" style={{ width: "300px" }} />
                <span className="btn-type1 ml" style={{ marginLeft: "10px" }}>
                  <a>검색하기</a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="box01">
        <table className="table01">
          <colgroup>
            <col style={{ width: "4%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "7%" }} />
            <col style={{ width: "*" }} />
            <col style={{ width: "7%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">번호</th>
              <th scope="col">구분</th>
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

export default BoardNotice;
