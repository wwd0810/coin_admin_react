/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

function DealStatus() {
  return (
    <Wrap>
      <div className="box01 ext">
        <h3>물품등록현황</h3>
        <div className="table01">
          <table className="table01">
            <tbody>
              <tr>
                <th style={{ width: "200px" }}>구분</th>
                <th>오늘</th>
                <th>이번달</th>
                <th>전체</th>
                <th>조회하기</th>
              </tr>
              <tr>
                <th>종 주문건수</th>
                <td>0 건</td>
                <td>5 건</td>
                <td>12000 건</td>
                <td>
                  <a className="btn_set small str_org btn-con">조회하기</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ marginTop: "20px" }}>물품거래현황(거래완료)</h3>
        <div className="table01">
          <table className="table01">
            <tbody>
              <tr>
                <th style={{ width: "200px" }}>구분</th>
                <th>오늘</th>
                <th>이번달</th>
                <th>전체</th>
                <th>조회하기</th>
              </tr>
              <tr>
                <th>종 주문건수</th>
                <td>0 건</td>
                <td>5 건</td>
                <td>12000 건</td>
                <td>
                  <a className="btn_set small str_org btn-con">조회하기</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style={{ marginTop: "20px" }}>실시간 거래현황</h3>
        <div className="table01">
          <table className="table01">
            <tbody>
              <tr>
                <th style={{ width: "200px" }}>거래신청(구매자)</th>
                <th> 거래승인(판매자)</th>
                <th>입금대기중</th>
                <th>입금완료확인(판매자)</th>
                <th>암호키 발급완료(구매자 미확인)</th>
              </tr>
              <tr>
                <th>0건</th>
                <td>0 건</td>
                <td>5 건</td>
                <td>12000 건</td>
                <td>0건</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default DealStatus;
