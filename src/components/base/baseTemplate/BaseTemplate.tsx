/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Link } from "react-router-dom";

import LnbMenu from "../lnbMenu";
import TmpIcon from "assets/icons/tmp.png";

interface Props {
  lnb_title: string;
  topIdx: number;
  lnbIdx: number;
  lnbSubIdx: number;
  contentTitle: string;
  children?: React.ReactNode;
}

const lnbMenu = [
  {
    idx: 0,
    body: [
      {
        title: "기본관리",
        subMenu: [
          {
            subTitle: "기본정보설정",
            uri: "/default/setting",
          },
          // {
          //   subTitle: "약관/개인정보설정",
          //   uri: "/default/terms",
          // },
        ],
      },
    ],
  },
  {
    idx: 1,
    body: [
      {
        title: "회원관리",
        subMenu: [
          {
            subTitle: "회원리스트",
            uri: "/user/list",
          },
        ],
      },
      // {
      //   title: "PUSH관리",
      //   subMenu: [
      //     {
      //       subTitle: "PUSH자동발송관리",
      //       uri: "/user/push",
      //     },
      //   ],
      // },
    ],
  },
  {
    idx: 2,
    body: [
      {
        title: "물품/거래",
        subMenu: [
          {
            subTitle: "물품/거래현황",
            uri: "/deal/product",
          },
          {
            subTitle: "물품리스트",
            uri: "/deal/plist",
          },
          {
            subTitle: "거래리스트",
            uri: "/deal/dlist",
          },
        ],
      },
    ],
  },
  {
    idx: 3,
    body: [
      {
        title: "공지사항",
        subMenu: [
          {
            subTitle: "공지사항",
            uri: "/board/notice",
          },
        ],
      },
      {
        title: "자주하는질문",
        subMenu: [
          {
            subTitle: "자주하는질문관리",
            uri: "/board/QnA",
          },
          // {
          //   subTitle: "자주하는질문 카테고리관리",
          //   uri: "/board/QnACategory",
          // },
        ],
      },
      {
        title: "1:1문의",
        subMenu: [
          {
            subTitle: "1:1문의",
            uri: "/board/Inquiry",
          },
        ],
      },
    ],
  },
];

const topMenu = [
  { title: "기본설정", uri: "/default/setting" },
  { title: "회원관리", uri: "/user/list" },
  { title: "물품/거래관리", uri: "/deal/product" },
  { title: "게시판관리", uri: "/board/notice" },
  // { title: "서비스관리", uri: "" },
  // { title: "정산관리", uri: "" },
  // { title: "통계", uri: "" },
];

function BaseTemplate({ lnb_title, topIdx, lnbIdx, lnbSubIdx, contentTitle, children }: Props) {
  const [state, setState] = useState({
    selected: lnbIdx,
  });

  const lnbMenuChange = (idx: number) => {
    setState({ ...state, selected: idx });
  };

  return (
    <Wrap id="wrap">
      <div id="header">
        <h1 className="logo">
          <Link to="">로고</Link>
          <div></div>
        </h1>
        <ul id="gnb">
          {topMenu.map((data, idx) => (
            <li key={idx}>
              <Link to={data.uri} className={classnames({ active: idx === topIdx })}>
                <img src={TmpIcon} />
                <span>{data.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="service_right">
          <div className="box_user">
            <strong>
              관리자(admin) <em>접속</em>
            </strong>
            <a className="login">로그아웃</a>
          </div>
          {/* <div className="wrap_search">
            <form>
              <fieldset>
                <legend className="blind">통합검색</legend>
                <select>
                  <option>통합검색</option>
                </select>
                <input />
                <a>검색</a>
              </fieldset>
            </form>
          </div> */}
        </div>
      </div>
      <div id="container">
        <div id="lnb">
          <h2 className="lnb_title">
            <span>{lnb_title}</span>
          </h2>
          <ul className="lnb_menu">
            {lnbMenu[topIdx].body.map((data, idx) => (
              <LnbMenu
                idx={idx}
                title={data.title}
                selected={state.selected}
                subSelected={state.selected === lnbIdx ? lnbSubIdx : 999}
                subMenu={data.subMenu}
                onChange={lnbMenuChange}
                key={idx}
              />
            ))}
          </ul>
        </div>
        <div id="contnets">
          <div className="top_local">
            <h3 className="local_title">
              {contentTitle}
              <span className="local_stage">
                {topMenu[topIdx].title}&nbsp;&nbsp;>&nbsp;&nbsp;
                {lnbMenu[topIdx].body[lnbIdx].title}&nbsp;&nbsp;>&nbsp;&nbsp;
                {lnbMenu[topIdx].body[lnbIdx].subMenu[lnbSubIdx].subTitle}
              </span>
            </h3>
          </div>
          <div className="box01">{children}</div>
        </div>
      </div>
      <div id="footer">
        <span className="copyright">2020 © All rights reserved by TrigramsKorea</span>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  & > #header > #logo {
    width: 189px;
    height: 88px;
  }
  & > #header > #gnb {
    height: 88px;

    & > li {
      height: 100%;

      & > a {
        height: 100%;

        & > img {
          width: 89px;
          height: 38px;
        }
      }
    }
  }
`;

export default BaseTemplate;
