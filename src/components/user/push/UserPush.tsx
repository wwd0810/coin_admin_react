/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function UserPush() {
  return (
    <Wrap>
      <div className="box01 ext">
        <form>
          <div className="box01">
            <table className="tbl-form">
              <colgroup>
                <col width="10%" />
                <col width="*" />
              </colgroup>
              <tbody>
                <tr>
                  <th>자동발송 사용여부</th>
                  <td>
                    <input type="radio" />
                    <label>사용함</label>
                    <input type="radio" />
                    <label>사용안함</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="box01" style={{ marginTop: "20px" }}>
            PUSH 자동발송 리스트
            <br />
            <br />
            <table className="table01">
              <colgroup>
                <col width="6%" />
                <col width="6%" />
                <col width="6%" />
                <col width="*" />
                <col width="8%" />
                <col width="8%" />
                <col width="15%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">국가</th>
                  <th scope="col">구분</th>
                  <th scope="col">자동발송 항목</th>
                  <th scope="col">편집</th>
                  <th scope="col">삭제</th>
                  <th scope="col">
                    <div className="scope_col">
                      등록/수정일
                      <span className="tbl_sort">
                        <a>1</a>
                        <a>1</a>
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>13</td>
                  <td>KR</td>
                  <td>구매</td>
                  <td>선물받기</td>
                  <td>
                    <a className="btn_set small str_org btn-con">수정</a>
                  </td>
                  <td>
                    <a className="btn_set small str_org btn-con">삭제</a>
                  </td>
                  <td>2018-11-14 09:52:44</td>
                </tr>
              </tbody>
            </table>
            <span className="btn-type1 c3 ml" style={{ float: "right", marginTop: "15px" }}>
              <Link to="">자동PUSH항목추가</Link>
            </span>
          </div>
        </form>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default UserPush;
