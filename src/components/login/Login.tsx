import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Wrap>
      <div className="login-area">
        <div className="login-logo">
          <h1>Woogos BACK OFFICE</h1>
          <p>관리자 로그인</p>
        </div>
        <div className="login-scope">
          <form>
            <fieldset>
              <span className="scope">
                <label htmlFor="userID">아이디</label>
                <input type="text" placeholder="아이디" style={{ paddingLeft: "10px" }} />
              </span>
              <span className="scope">
                <label htmlFor="userPW">비밀번호</label>
                <input type="password" placeholder="비밀번호" style={{ paddingLeft: "10px" }} />
              </span>
              <button type="button">
                <span>로그인</span>
              </button>
              <span className="login-saves">
                <input type="checkbox" />
                <label htmlFor="login-save">아이디 저장</label>
              </span>
            </fieldset>
          </form>
        </div>
        <p className="info">
          ※ 관리자 계정 정보를 입력해 주시고, 관련정보는 유출되지 않도록 보안사항을 지켜주세요.
        </p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  background: #fafafa;

  .login-area {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 680px;
    height: 395px;
    margin: -198px 0 0 -340px;
  }

  .login-area .login-logo {
    height: 76px;
    /* background: url(/images/bg-login-line.gif) repeat-x left top; */
    background: #aaaaaa;
  }

  .login-area .login-logo p {
    float: right;
    display: block;
    position: relative;
    margin: 19px 24px 0 0;
  }

  .login-area .login-logo h1 {
    float: left;
    margin: 19px 0 0 38px;
    width: 247px;
    height: 39px;
    /* background: url(/images/site_admin/base/login-logo.gif) no-repeat 0 0; */
    /* text-indent: -9999px; */
  }

  .login-area .login-logo p.login-txt {
    width: 114px;
    height: 34px;
    /* background: url(/images/site_admin/base/login-txt.gif) no-repeat 0 0; */
    text-indent: -9999px;
  }

  .login-area .login-scope {
    position: relative;
    /* width: 678px; */
    padding: 63px 0px;
    border: 1px solid #ccc;
    border-top: 0;
  }

  .login-area .login-scope .scope label {
    display: inline-block;
    width: 56px;
    height: 36px;
    line-height: 36px;
    text-align: left;
  }

  .login-area .login-scope .scope {
    display: block;
    margin: 7px 0 0;
    padding: 0 0 0 165px;
    /* vertical-align: top; */
  }

  .login-area .login-scope button[type="button"] {
    border: none;
    position: absolute;
    left: 435px;
    top: 74px;
    width: 90px;
    height: 72px;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 74px;
    background-color: #f27223;
  }

  .login-area .login-scope .scope input[type="text"],
  .login-area .login-scope .scope input[type="password"] {
    width: 200px;
    height: 30px;
    padding: 0;
    margin: 0;
    outline: 0;
  }

  .login-area .info {
    height: 60px;
    line-height: 60px;
    font-size: 12px;
    color: #666;
    text-align: center;
  }

  .login-area .login-scope .login-saves input[type="checkbox"] {
    margin: 3px 0 0;
    vertical-align: top;
  }

  .login-area .login-scope .login-saves {
    display: block;
    padding: 10px 0 0 221px;
  }
`;

export default Login;
