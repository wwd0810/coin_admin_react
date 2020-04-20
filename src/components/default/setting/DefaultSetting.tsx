/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

function DefaultSetting() {
  return (
    <Wrap>
      <div className="table01">
        <form>
          <table>
            <caption className="blind">사업자정보 & 기본정보</caption>
            <colgroup>
              <col style={{ width: "200px" }}></col>
              <col></col>
              <col style={{ width: "200px" }}></col>
              <col></col>
            </colgroup>
            <tbody>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>서비스명(국문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>서비스명(영문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>회사명(국문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>회사명(영문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>대표자명(국문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>대표자명(영문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>사업자등록번호</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>통신판매 신고번호</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>사업장 주소(국문)</label>
                </th>
                <td className="left" colSpan={3}>
                  <input
                    type="text"
                    className="int_case_1"
                    style={{ width: "74%" }}
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>사업장 주소(영문)</label>
                </th>
                <td className="left" colSpan={3}>
                  <input
                    type="text"
                    className="int_case_1"
                    style={{ width: "74%" }}
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>대표전화</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>팩스번호</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>개인정보 책임자명</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>관리자 이메일</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
            </tbody>
          </table>
        </form>
      </div>
      <div className="btn_area center">
        <a className="btn big bg-type orange01">설정저장</a>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default DefaultSetting;
