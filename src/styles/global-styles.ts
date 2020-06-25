import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import TmpIcon from "assets/icons/tmp.png";

const GlobalStyle = createGlobalStyle`
${reset}
* {
box-sizing: border-box;
}

body {
    display: block;
    margin: 8px;
    
}

body {
    margin: 0;
    padding: 0;
    font-size: 13px;
    line-height: 1.5;
    color: #333;
    font-family: '맑은 고딕','Malgun Gothic','AppleGothic',sans-serif;
    background: #fff;
    -webkit-text-size-adjust: none;
}

body {
    min-width: 320px;
    word-wrap: break-word;
    word-break: break-all;
    background-color: #f3f3f4;
    overflow-y: hidden;
}

h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}

body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, textarea, p, blockquote, th, td, input, select, textarea, button {
    margin: 0;
    padding: 0;
}

body, th, td, input, select, textarea, button {
    font-size: 13px;
    line-height: 1.5;
    font-family: '맑은 고딕','Malgun Gothic','AppleGothic',sans-serif;
    color: #333;
    /* background: #ffffff; */
}

element.style {
    background-color: #f3f3f4;
    overflow-y: hidden;
}

/* ================================================================================================================================== */

h1, h2, h3, h4, h5, h6, input, button, textarea, select {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0px;
}



dl, ul, ol, menu, li {
    list-style: none;
}

ul {
    zoom: 1;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

img {
    border: 0 none;
    vertical-align: middle;
    /* width: 100%; */
}

select {
    display: inline-block;
    min-width: 80px;
    height: 30px;
    padding: 3px;
    border: 1px solid #ddd;
    line-height: 1.5;
    outline: none;
}

option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
}

a {
    color: #333;
    text-decoration: none;
    cursor: pointer;
}

a:link {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
}

fieldset, img {
    border: 0 none;
}

input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    -webkit-appearance: checkbox;
    box-sizing: border-box;
    margin: 3px 0.5ex;
    padding: initial;
    border: initial;
}

input[type=radio], input[type=checkbox] {
    width: 15px;
    height: 15px;
    /* margin: 3px 3px 0 0; */
    padding: 0;
}

caption {
    padding: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    font-size: 0;
    line-height: 0;
}

colgroup {
    display: table-column-group;
}

col {
    display: table-column;
}

.btn-type1 a, .btn-type1 button, .btn-type1 input[type=button], .btn-type1 input[type=reset] {
    display: inline-block;
    padding: 0 20px;
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
    color: #fff;
    vertical-align: top;
}

.btn-type1 a:link, .btn-type1 a:hover, .btn-type1 a:visited, .btn-type1 a:active {
    color: #fff;
    text-decoration: none;
}

/* ================================================================================================================================== */

.tbl-form input[type=text] {
    padding: 5px;
    border: 1px solid #ddd;
    color: #333;
    -webkit-appearance: none;
}

.tbl-form input[type=date] {
    padding: 5px;
    border: 1px solid #ddd;
    color: #333;
    -webkit-appearance: none;
}

input[type=radio], input[type=checkbox] {
    width: 15px;
    height: 15px;
    margin: 3px 3px 0 0;
    padding: 0;
}

.tbl-form .check, .tbl-form .radio, .tbl-form input[type=radio], .tbl-form input[type=checkbox] {
    display: inline-block;
    /* vertical-align: middle; */
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}



tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}

tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

.table01 th, .table01 td {
    position: relative;
    text-align: center;
}

.table01 th {
    padding: 5px;
    /* height: 37px; */
    background: #f7f7f7;
    border: 1px solid #ccc;
    color: #000;
    background-clip: padding-box;
}

.table01 td {
    padding: 5px;
    border: 1px solid #e1e1e1;
    line-height: 20px;
    vertical-align: middle;
}

td.left {
    text-align: left;
    padding-left: 10px;
}

.table01 label {
    display: inline-block;
    padding: 0 15px 0 0;
    line-height: 30px;
    vertical-align: middle;
}

table .left {
    text-align: left !important;
}

.table01 input[type=text], .table01 input[type=password], input.int {
    padding: 5px;
    border: 1px solid #ddd;
    font-size: 13px;
    color: #000;
}

.int_case_1 {
    width: 233px;
}

thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}


/* ================================================================================================================================== */

#wrap {
    min-width: 1880px;
    width: 100%;
}

/* ================================================================================================================================== */

#header {
    position: relative;
    height: 88px;
    background-color: #263949;
}

#header .logo {
    float: left;
    width: 189px;
}

#header .logo a {
    display: block;
    height: 38px;
    padding-top: 50px;
    background: url(${TmpIcon}) 50% 13px no-repeat;
    font-size: 11px;
    letter-spacing: -.75px;
    text-align: center;
}

#header #gnb {
    float: left;
    padding-left: 1px;
}

#header #gnb li {
    float: left;
}

#header #gnb li a {
    display: block;
    width: 90px;
    height: 75px;
    padding-top: 13px;
    font-size: 11px;
    letter-spacing: -.75px;
    text-align: center;
}

#header #gnb li a.active, #header #gnb li a:hover {
    background-color: #f47a21;
}

#header #gnb li a span {
    color: #929ca4;
    color: rgba(255,255,255,0.5);
    filter: alpha(opacity=50);
}

#header #gnb li a.active span {
    color: #fff;
    filter: alpha(opacity=100);
}

#header .service_right {
    position: absolute;
    top: 35px;
    right: 0px;
    width: 400px;
}

#header .box_user {
    height: 18px;
    padding-left: 22px;
    background: url(${TmpIcon}) 0 0 no-repeat;
    font-size: 11px;
    color: #fff;
}

#header .box_user strong {
    display: inline-block;
    margin-right: 10px;
}

#header .box_user em {
    color: #999;
}

#header .box_user .login {
    display: inline-block;
    display: inline-block;
    width: 54px;
    height: 20px;
    border: 1px solid rgba(255,255,255,0.5);
    line-height: 20px;
    font-size: 11px;
    color: #fff;
    letter-spacing: -.75px;
    text-align: center;
    vertical-align: middle;
}

#header .wrap_search {
    overflow: hidden;
    position: relative;
    height: 32px;
    margin-top: 10px;
    padding-left: 18px;
    background-color: #fff;
}

#header .wrap_search select {
    float: left;
    width: 80px;
    height: 32px;
    border: 0;
    background: url(${TmpIcon}) 100% 50% no-repeat;
    -webkit-appearance: none;
    -moz-appearance: none;
}

#header .wrap_search input {
    float: left;
    width: 275px;
    height: 32px;
    border: 0;
}

#header .wrap_search a {
    position: absolute;
    top: 0;
    right: 0;
    /* width: 14px; */
    height: 32px;
    padding-right: 12px;
    background: url(${TmpIcon}) 0 8px no-repeat;
    text-indent: -9999px;
}

/* ================================================================================================================================== */

#container {
    overflow: hidden;
}

/* ================================================================================================================================== */

#lnb {
    position: absolute;
    top: 88px;
    left: 0;
    width: 190px;
    max-height: 870px;
    background-color: #75808a;
    box-sizing: border-box;
    height: 870px;
}

#lnb .lnb_title {
    height: 70px;
    padding-left: 18px;
    background-color: #4d5c69;
    font-size: 17px;
    font-weight: bold;
    color: #fff;
    letter-spacing: -1px;
}

#lnb .lnb_title {
    /* height: 50px; */
    padding: 20px 0 0 0;
    text-align: center;
}

#lnb .lnb_menu {
    background-color: #65717c;
}

#lnb .lnb_menu .lnb_menu_title {
    display: block;
    margin-bottom: 2px;
    padding: 10px 10px 10px 16px;
    background-color: #75808a;
    font-size: 14px;
    color: #fff;
    letter-spacing: -1px;
}

#lnb .lnb_menu .lnb_menu_title {
    margin-bottom: 0;
}

#lnb .lnb_menu .lnb_menu_item.on .lnb_menu_title {
    padding-left: 12px;
    border-left: 4px solid #f47a21;
}

#lnb .lnb_menu .lnb_menu_title span {
    display: block;
    font-weight: bold;
}

#lnb .lnb_menu .lnb_menu_item .lnb_menu_title span {
    background: url(${TmpIcon}) 100% 50% no-repeat;
}

#lnb .lnb_menu .lnb_menu_item.on .lnb_menu_title span {
    background-image: url(${TmpIcon});
}

#lnb .lnb_menu .lnb_menu_content {
    display: block;
    padding: 7px 0 7px 30px;
}

#lnb .lnb_menu .lnb_menu_content li {
    line-height: 24px;
}

#lnb .lnb_menu .lnb_menu_content a {
    display: inline-block;
    color: #ccc;
    letter-spacing: -1px;
}

#lnb .lnb_menu .lnb_menu_content li.active a {
    color: #fff;
}

/* ================================================================================================================================== */

#contnets {
    overflow-y: scroll;
    width: 100%;
    padding: 17px 20px 0 210px;
    padding-bottom: 30px;
    box-sizing: border-box;
}

/* ================================================================================================================================== */

#footer {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 32px;
    background-color: #65717c;
}

#footer .copyright {
    display: block;
    padding-top: 10px;
    padding-left: 17px;
    font-size: 11px;
    font-family: 'Verdana';
    color: #fff;
    opacity: 0.5;
}

/* ================================================================================================================================== */

.blind {
    text-indent: -99999px !important;
    overflow: hidden !important;
    font-size: 0 !important;
    width: 0 !important;
    height: 0 !important;
}

.btn {
    display: inline-block;
    overflow: hidden;
    background-color: #fff;
    color: #666;
    letter-spacing: -1px;
    text-align: center;
    vertical-align: top;
}

/* ================================================================================================================================== */

.top_local {
    margin-bottom: 15px;
    padding: 18px 28px;
    background-color: #fff;
}

.top_local .local_title {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    letter-spacing: -1px;
    vertical-align: middle;
}


.top_local .local_stage {
    display: inline-block;
    padding-left: 22px;
    font-size: 11px;
    font-weight: 500;
    color: #000;
    vertical-align: middle;
    opacity: 0.5;
    filter: alpha(opacity=50);
}

/* ================================================================================================================================== */

.box01 {
    padding: 15px;
    background-color: #fff;
}

.box01.ext {
    padding-bottom: 180px;
}

/* ================================================================================================================================== */

.table01 {
    width: 100%;
    border-collapse: collapse;
    border-top: 2px solid #1b1b1b;
}


.btn_area.center {
    margin-top: 16px;
    margin-bottom: 30px;
    text-align: center;
}



.btn.big {
    font-size: 14px;
    font-weight: bold;
}

.btn.big.bg-type {
    width: 197px;
    height: 36px;
    line-height: 36px;
    color: #fff;
}

.btn.bg-type.orange01 {
    background-color: #f27223;
}




/* ================================================================================================================================== */

.box01 {
    padding: 15px;
    background-color: #fff;
}

.tbl-form {
    width: 100%;
    margin: 0;
    border-left: 1px solid #ccc;
    border-top: 2px solid #1b1b1b;
}

.tbl-form thead th, .tbl-form tbody th {
    width: 150px;
    background: #f5f7f6;
    font-weight: 600;
    color: #333;
    background-clip: padding-box;
}

.tbl-form th, .tbl-form td {
    padding: 5px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    vertical-align: middle;
}

select.select {
    display: inline-block;
    *display: inline;
    min-width: 80px;
    padding: 3px;
    border: 1px solid #ddd;
    line-height: 1.5;
    outline: none;
    *zoom: 1;
}

.btn-center {
    margin: 30px 0;
    /* font-size: 35px; */
    line-height: 1;
    text-align: center;
}

.btn-type1 {
    display: inline-block;
    position: relative;
    padding: 0;
    background: #f47a21;
    text-align: center;
    vertical-align: top;
}

.result_title {
    display: inline-block;
    position: relative;
    width: 100%;
    margin-bottom:11px;
}

.result_title p {
    height: 20px;
    margin-top: 10px;
    line-height: 20px;
}

.result_title>p {
    float: left;
}

.result_title .right {
    float: right;
}

.result_title em {
    font-weight: bold;
    color: #f00;
}

/* ================================================================================================================================== */

.btn-del {
    display: inline-block;
    overflow: hidden;
    height: 23px;
    margin: 5px 0 0;
    padding: 0 10px !important;
    border: solid 1px #E84343;
    background: #fff;
    line-height: 23px;
    color: #c00;
    vertical-align: middle;
}

.btn_set.brgray {
    border: 1px solid #999;
}

.btn_set.small {
    padding: 3px 10px;
}

.btn_set.small {
    padding: 2px 5px 3px;
}

.btn_set.brgray {
    border: 1px solid #ccc;
    background-color: #fff;
    color: #666;
}

/* .btn_set.str_org {
    border: 1px solid #f47a21;
    
    background-color: #f47a21;
    color: #fff;
}

.tbl_mb_area .btn_set {
    width: 108px;
    margin-right: 2px;
}

.tbl_btn .btn_set, .tbl_mb_area .btn_set {
    min-width: 68px;
    font-size: 12px;
    padding: 3px 10px 3px 10px;
    width: 108px;

} */



/* ================================================================================================================================== */

.cf {
    zoom: 1;
}

.tbl_mb_area {
    position: relative;
    margin-top: 12px;
}

.tbl_mb_area {
    overflow: hidden;
    margin-top: 14px;
}

.tbl_mb_area .paging_left {
    position: relative;
    width: 100%;
}

.tbl-form th, .tbl-form td {
    padding: 5px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    vertical-align: middle;
}

/* ================================================================================================================================== */

.paging {
    margin-top: 26px;
    margin-bottom: 30px;
    text-align: center;
}

.paging {
    width: 100%;
    margin-top: 30px;
    text-align: center;
}

.paging strong, .paging a, .paging span {
    display: inline-block;
    width: 28px;
    height: 28px;
    border: 2px solid #fff;
    line-height: 30px;
}

.paging strong, .paging span {
    border: 2px solid #2f3543;
    color: #000;
}

.paging a, .paging strong, .paging span {
    display: inline-block;
    *display: inline;
    min-width: 21px;
    padding: 0 4px;
    line-height: 29px;
    vertical-align: top;
    *zoom: 1;
}

.paging>strong, .paging>span {
    margin-left: 5px;
    border: 1px solid #173e35;
    background: #173e35;
    color: #fff;
}

/* ================================================================================================================================== */

.btn_set {
    display: inline-block;
    text-align: center;
    text-decoration: none !important;
  }

  .btn_set {
    vertical-align: middle;
  }

  .btn_set.str_org {
    border: 1px solid #f47a21;
    background-color: #f47a21;
    color: #fff;
  }

  .tbl_mb_area .btn_set {
    width: 108px;
    margin-right: 2px;
  }

  .tbl_btn .btn_set,
  .tbl_mb_area .btn_set {
    min-width: 68px;
    font-size: 12px;
  }

  .btn-type2 {
    display: inline-block;
    position: relative;
    padding: 0;
    background: #f47a21;
    text-align: center;
    vertical-align: top;
}

.btn-type2 a, .btn-type2 button, .btn-type2 input[type=button], .btn-type2 input[type=reset] {
    display: inline-block;
    padding: 0 10px;
    font-size: 13px;
    line-height: 30px;
    color: #fff;
    vertical-align: top;
}

.btn-type2 a:link, .btn-type2 a:hover, .btn-type2 a:visited, .btn-type2 a:active {
    color: #fff;
    text-decoration: none;
}

.btn-type1.c3 {
    background: #666;
}

  .btn-type2.c3 {
    background: #666;
}

.tbl-form td>label {
    display: inline-block;
    padding: 0 15px 0 0;
    line-height: 30px;
    vertical-align: middle;
}


.table01 .scope_col {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding-right: 15px;
    overflow: hidden;
}

.table01 .scope_col .tbl_sort {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    width: 15px;
    height: 28px;
    background: url(${TmpIcon}) 0 0 no-repeat;
}

.asc_order, .des_order {
    display: block;
    width: 15px;
    height: 14px;
    text-indent: -9999px;
}

/* ================================================================================================================================== */

`;

export default GlobalStyle;
