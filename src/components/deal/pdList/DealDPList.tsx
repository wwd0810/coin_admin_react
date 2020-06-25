/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import { ProductType } from "stores/market/types";

interface Props {
  list: ProductType[];
  paging?: Paging;
  search: (
    page?: number,
    query?: string,
    duration?: string,
    quanLow?: number,
    quanHigh?: number,
    priceLow?: number,
    priceHigh?: number,
  ) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function DealDPList({ search, list, paging }: Props) {
  const classes = useStyles();

  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [quanLow, setQuanLow] = useState<number>();
  const [quanHigh, setQuanHigh] = useState<number>();
  const [priceLow, setPriceLow] = useState<number>();
  const [priceHigh, setPriceHigh] = useState<number>();

  useEffect(() => {
    search(page, query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const onChangeQuery = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setQuery(value);
  }, []);

  const onChangeQL = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setQuanLow(value);
  }, []);

  const onChangeQH = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setQuanHigh(value);
  }, []);

  const onChangePL = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setPriceLow(value);
  }, []);

  const onChangePH = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setPriceHigh(value);
  }, []);

  const onChangeDuration = useCallback(
    (e: any) => {
      e.preventDefault();

      const { id } = e.target;

      if (duration !== id) setDuration(id);
      else setDuration("");
    },
    [duration],
  );

  const handlePage = (event: any, page: number) => {
    setPage(page - 1);
  };

  const onSearch = () => {
    search(0, query, duration, quanLow, quanHigh, priceLow, priceHigh);
  };

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
                {/* <select name="searchfield" id=""></select> */}
                <input
                  type="text"
                  style={{ width: "300px", marginLeft: "5px" }}
                  value={query}
                  onChange={onChangeQuery}
                />
              </td>
            </tr>
            <tr>
              <th>기간조건</th>
              <td colSpan={3}>
                {/* <select name="searchfield" id=""></select>
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
                /> */}
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="TODAY"
                    onClick={onChangeDuration}
                    style={{ background: duration === "TODAY" ? "#f47a21" : "" }}
                  >
                    오늘
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="1WEEK"
                    onClick={onChangeDuration}
                    style={{ background: duration === "1WEEK" ? "#f47a21" : "" }}
                  >
                    1주일
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="1MONTH"
                    onClick={onChangeDuration}
                    style={{ background: duration === "1MONTH" ? "#f47a21" : "" }}
                  >
                    1개월
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="3MONTH"
                    onClick={onChangeDuration}
                    style={{ background: duration === "3MONTH" ? "#f47a21" : "" }}
                  >
                    3개월
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="6MONTH"
                    onClick={onChangeDuration}
                    style={{ background: duration === "6MONTH" ? "#f47a21" : "" }}
                  >
                    6개월
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id="1YEAR"
                    onClick={onChangeDuration}
                    style={{ background: duration === "1YEAR" ? "#f47a21" : "" }}
                  >
                    1년
                  </a>
                </span>
                <span className="btn-type2 c3" style={{ marginLeft: "5px" }}>
                  <a
                    id=""
                    onClick={onChangeDuration}
                    style={{ background: duration === "ALL" ? "#f47a21" : "" }}
                  >
                    전체
                  </a>
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
                  value={quanLow}
                  onChange={onChangeQL}
                  // readOnly
                />
                ~
                <input
                  type="text"
                  className="text hasDatepicker"
                  value={quanHigh}
                  onChange={onChangeQH}
                  // readOnly
                />
              </td>
            </tr>
            <tr>
              <th>등록금액</th>

              <td colSpan={3}>
                {/* <select name="searchfield" id=""></select> */}
                <input
                  type="text"
                  className="text hasDatepicker"
                  style={{ marginLeft: "5px" }}
                  value={priceLow}
                  onChange={onChangePL}
                  // readOnly
                />
                ~
                <input
                  type="text"
                  className="text hasDatepicker"
                  value={priceHigh}
                  onChange={onChangePH}
                  // readOnly
                />
              </td>
            </tr>
            {/* <tr>
              <th>국가</th>

              <td colSpan={3}>
                <select name="searchfield" id=""></select>
              </td>
            </tr> */}
          </tbody>
        </table>
        <div className="btn-center" style={{ margin: "10px 0 0 0" }}>
          <span className="btn-type1 ml">
            <a onClick={onSearch}>검색하기</a>
          </span>
          <span className="btn-type1 c3 ml" style={{ marginLeft: "10px" }}>
            <a>초기화</a>
          </span>
        </div>
      </div>
      <div className="box01" style={{ marginTop: "20px" }}>
        <div className="result_title">
          <p>
            전체 <em>{paging && paging.count}</em>건
          </p>
          <div className="right">{/* <select></select>i */}</div>
        </div>
        <table className="table01">
          <colgroup>
            {/* <col style={{ width: "5%" }} /> */}
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
              <th scope="col">번호</th>

              {/* <th scope="col">국가</th> */}
              <th scope="col">아이디</th>
              <th scope="col">이름</th>
              <th scope="col">물품코드</th>
              <th scope="col">등록딜링</th>
              <th scope="col">등록금액</th>
              <th scope="col">1딜링 당 금액</th>
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
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((data, idx) => (
                <tr key={idx}>
                  <td>{data.id}</td>
                  {/* <td>KOR</td> */}
                  <td>{data.seller?.username}</td>
                  <td>{data.seller?.name}</td>
                  <td>P12031203</td>
                  <td>{data.quantity}</td>
                  <td>{data.fees}</td>
                  <td>{data.price}</td>
                  <td>{data.created_at}</td>
                  <td>{data.updated_at}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="tbl_mb_area">
        {/* <div className="paging">
          <strong>1</strong>
          <strong>2</strong>
        </div> */}

        <div className={classes.root}>
          <Pagination
            count={paging ? Math.ceil(paging.count / paging.limit) : 0}
            variant="outlined"
            shape="rounded"
            page={page + 1}
            onChange={handlePage}
          />
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default DealDPList;
