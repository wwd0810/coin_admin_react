/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

import TermItem from "./Item";

function DefaultTerms() {
  const options = [
    {
      idx: 0,
      menu: [
        "전체",
        "우고스 이용약관",
        "우고스 위치정보 이용약관",
        "ONDLC 개인정보취급방침",
        "민감정보 - ONDLC 이용약관 관련",
        "민감정보 - ONDLC  제3자 수집 이용 제공 정책 관련",
        "ONDLC 제3자 수집 이용 제공 정책",
        "ONDLC 이용약관",
        "민감정보 - 우고스 이용약관",
        "우고스 전자금융거래 이용약관",
        "우고스 개인정보취급방침",
      ],
    },
    {
      idx: 1,
      menu: ["전체", "게시약관", "이전약관", "노출안함"],
    },
    {
      idx: 2,
      menu: ["전체", "KOR", "ENG"],
    },
    {
      idx: 3,
      menu: [" 10개", "20개", "50개", "100개"],
    },
  ];
  return (
    <Wrap>
      <div className="box01">
        <table className="tbl-form">
          <colgroup>
            <col width="10%" />
            <col width="15%" />
            <col width="10%" />
            <col width="*%" />
            <col width="10%" />
            <col width="10%" />
          </colgroup>
          <tbody>
            <tr>
              <th>약관종류</th>
              <td>
                <select className="select" style={{ width: "210px" }}>
                  {options[0].menu.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
              <th>약관상태</th>
              <td>
                <select className="select" style={{ width: "210px" }}>
                  {options[1].menu.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
              <th>언어</th>
              <td>
                <select className="select" style={{ width: "110px" }}>
                  {options[2].menu.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-center" style={{ margin: "10px 0 0 0" }}>
          <span className="btn-type1">
            <a>검색하기</a>
          </span>
        </div>
      </div>
      <div className="box01">
        <div className="result_title">
          <p>
            전체 <em>10</em>건
          </p>
          <div className="right">
            <select>
              {options[3].menu.map((data, idx) => (
                <option key={idx}>{data}</option>
              ))}
            </select>
          </div>
        </div>
        <table className="table01">
          <colgroup>
            <col width="5%" />
            <col width="8%" />
            <col width="8%" />
            <col width="*%" />
            <col width="*%" />
            <col width="10%" />
            <col width="10%" />
            <col width="10%" />
          </colgroup>
          <tbody>
            <tr>
              <th>
                <input type="checkbox" id="allChk" name="allChk" />
              </th>
              <th>번호</th>
              <th>언어</th>
              <th>약관명</th>
              <th>상태</th>
              <th>등록자</th>
              <th>등록일</th>
              <th>관리</th>
            </tr>
            <TermItem />
            <TermItem />
            <TermItem />
            <TermItem />
            <TermItem />
            <TermItem />
            <TermItem />
            <TermItem />
            <TermItem />
            <TermItem />
          </tbody>
        </table>
        <div className="tbl_mb_area cf">
          <div className="paging_left">
            <a className="btn_set small str_org">약관추가</a>
            <a className="btn_set small str_org">선택약관삭제</a>
          </div>
          <div className="paging">
            <strong>1</strong>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.form``;

export default DefaultTerms;
