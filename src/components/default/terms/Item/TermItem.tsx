/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

function TermItem() {
  return (
    <Wrap>
      <td>
        <input type="checkbox" id="check" name="check" />
      </td>
      <td>21</td>
      <td>KOR</td>
      <td>캐시링크 이용약관</td>
      <td>게시약관</td>
      <td>admin</td>
      <td>2020-02-02</td>
      <td>
        <a className="btn_set small brgray">수정</a>
        <a className="btn_set small btn-del" style={{ marginTop: "0", marginLeft: "5px" }}>
          삭제
        </a>
      </td>
    </Wrap>
  );
}

const Wrap = styled.tr``;

export default TermItem;
