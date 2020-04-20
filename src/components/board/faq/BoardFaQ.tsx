/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

function BoardFaQ() {
  const options = [
    { idx: 0, option: ["선택", "구분", "판매"] },
    { idx: 1, option: ["1Depth선텍"] },
    { idx: 2, option: ["질문", "작성자", "내용", "질문+내용"] },
    { idx: 3, option: ["------", "Y", "N"] },
  ];
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
              <th>구분</th>
              <td colSpan={3}>
                <select id="depth0" name="cate0">
                  {options[0].option.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th>문의유형</th>
              <td colSpan={3}>
                <select>
                  {options[1].option.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th>작성일</th>
              <td colSpan={3}>
                <input
                  type="date"
                  name="search_sdate"
                  id="search_sdate"
                  className="text hasDatepicker"
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
              <th>검색어</th>
              <td colSpan={3}>
                <select>
                  {options[2].option.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
                <input type="text" id="sear_text" name="sear_text" style={{ width: "400px" }} />
              </td>
            </tr>
            <tr>
              <th>베스트여부</th>
              <td>
                <select>
                  {options[3].option.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
              <th>노출여부</th>
              <td>
                <select>
                  {options[3].option.map((data, idx) => (
                    <option key={idx}>{data}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-center" style={{ marginTop: "10px" }}>
          <span className="btn-type1 ml">
            <a>검색하기</a>
          </span>
          <span className="btn-type1 c3 ml">
            <a>초기화</a>
          </span>
        </div>
      </div>
      <div className="box01">
        <table className="table01">
          <colgroup>
            <col style={{ width: "3%" }} />
            <col style={{ width: "3%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "*" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "6%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "15%" }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">번호</th>
              <th scope="col">구분</th>
              <th scope="col">문의유형</th>
              <th scope="col">질문</th>
              <th scope="col">베스트</th>
              <th scope="col">노출여부</th>
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
              <td>일반</td>
              <td>일반</td>
              <td>일반</td>
              <td>ONDLC</td>
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

export default BoardFaQ;
