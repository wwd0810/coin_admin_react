/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { MCTypye } from "stores/market/types";
import { Link } from "react-router-dom";

interface Props {
  count?: MCTypye;
}

function DealStatus({ count }: Props) {
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
                <td>{count?.market_count_today} 건</td>
                <td>{count?.market_count_month} 건</td>
                <td>{count?.market_count_all} 건</td>
                <td>
                  <Link to="/deal/plist" className="btn_set small str_org btn-con">
                    조회하기
                  </Link>
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
                <td>{count?.done_count_today} 건</td>
                <td>{count?.done_count_month} 건</td>
                <td>{count?.done_count_all} 건</td>
                <td>
                  <Link to="/deal/dlist" className="btn_set small str_org btn-con">
                    조회하기
                  </Link>
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
                {/* <th>암호키 발급완료(구매자 미확인)</th> */}
              </tr>
              <tr>
                <th>{count?.purchases_waiting_approval}건</th>
                <td>{count?.purchases_waiting_deposit} 건</td>
                <td>{count?.purchases_waiting_deposit} 건</td>
                <td>{count?.purchases_deposit_completed} 건</td>
                {/* <td>0건</td> */}
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
