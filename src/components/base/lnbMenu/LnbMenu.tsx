/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Link } from "react-router-dom";

interface Props {
  idx: number;
  selected: number;
  subSelected: number;
  title: string;
  subMenu: { subTitle: string; uri: string }[];
  onChange: (idx: number) => void;
}

function LnbMenu({ idx, selected, subSelected, title, subMenu, onChange }: Props) {
  const onMenuChange = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      e.preventDefault();
      onChange(idx);
    },
    [idx, onChange],
  );

  return (
    <Wrap
      className={classnames("lnb_menu_item subMenu", {
        "conTxt-lnb_menu_item subMenu on": selected === idx,
      })}
      onClick={onMenuChange}
    >
      <a className="lnb_menu_title activeDept">
        <span>{title}</span>
      </a>
      {selected === idx ? (
        <ul className="lnb_menu_content">
          {subMenu.map((data, idx) => (
            <li
              className={classnames({
                active: idx === subSelected,
              })}
              key={idx}
            >
              <Link to={data.uri} id={String(idx)}>
                {data.subTitle}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </Wrap>
  );
}

const Wrap = styled.li``;

export default LnbMenu;
