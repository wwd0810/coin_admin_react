/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { ServiceInfoType } from "stores/default/types";

interface Props {
  data?: ServiceInfoType;
  update: (
    service_name_ko: string,
    service_name_en: string,
    company_name_ko: string,
    company_name_en: string,
    owner_name_ko: string,
    owner_name_en: string,
    registration_num: string,
    mail_num: string,
    address_ko: string,
    address_en: string,
    phone: string,
    fax: string,
    privacy_officer: string,
    admin_email: string,
  ) => void;
}

function DefaultSetting({ data, update }: Props) {
  const [serviceNameKo, setServiceNameKo] = useState<string>("");
  const [serviceNameEn, setServiceNameEn] = useState<string>("");
  const [companyNameKo, setCompanyNameKo] = useState<string>("");
  const [companyNameEn, setCompanyNameEn] = useState<string>("");
  const [ownerNameKo, setOwnerNameKo] = useState<string>("");
  const [ownerNameEn, setOwnerNameEn] = useState<string>("");
  const [registrationNum, setRegistrationNum] = useState<string>("");
  const [mailNum, setMailNum] = useState<string>("");
  const [addressKo, setAddressKo] = useState<string>("");
  const [addressEn, setAddressEn] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [fax, setFax] = useState<string>("");
  const [privacyOfficer, setPrivacyOfficer] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const updateF = () => {
    update(
      serviceNameKo,
      serviceNameEn,
      companyNameKo,
      companyNameEn,
      ownerNameKo,
      ownerNameEn,
      registrationNum,
      mailNum,
      addressKo,
      addressEn,
      phone,
      fax,
      privacyOfficer,
      email,
    );
  };

  useEffect(() => {
    if (data) {
      setServiceNameKo(data.service_name_ko);
      setServiceNameEn(data.service_name_en);
      setCompanyNameKo(data.company_name_ko);
      setCompanyNameEn(data.company_name_en);
      setOwnerNameKo(data.owner_name_ko);
      setOwnerNameEn(data.owner_name_en);
      setRegistrationNum(data.registration_num);
      setMailNum(data.mail_num);
      setAddressKo(data.address_ko);
      setAddressEn(data.address_en);
      setPhone(data.phone);
      setFax(data.fax);
      setPrivacyOfficer(data.privacy_officer);
      setEmail(data.admin_email);
    }
  }, [data]);

  const onChangeSNK = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setServiceNameKo(value);
  }, []);

  const onChangeSNE = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setServiceNameEn(value);
  }, []);

  const onChangeCNK = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setCompanyNameKo(value);
  }, []);

  const onChangeCNE = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setCompanyNameEn(value);
  }, []);

  const onChangeONK = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setOwnerNameKo(value);
  }, []);

  const onChangeONE = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setOwnerNameEn(value);
  }, []);

  const onChangeRN = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setRegistrationNum(value);
  }, []);

  const onChangeMN = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setMailNum(value);
  }, []);

  const onChangeAK = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setAddressKo(value);
  }, []);

  const onChangeAE = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setAddressEn(value);
  }, []);

  const onChangeP = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setPhone(value);
  }, []);

  const onChangeF = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setFax(value);
  }, []);

  const onChangePO = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setPrivacyOfficer(value);
  }, []);

  const onChangeE = useCallback((e: any) => {
    e.preventDefault();

    const { value } = e.target;

    setEmail(value);
  }, []);

  return (
    <Wrap>
      <div className="table01">
        <form>
          <table>
            <caption className="blind">사업자정보 & 기본정보</caption>
            <colgroup>
              <col style={{ width: "200px" }}></col>
              <col></col>
              <col style={{ width: "200px" }}></col>
              <col></col>
            </colgroup>
            <tbody>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>서비스명(국문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={serviceNameKo}
                    onChange={onChangeSNK}
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>서비스명(영문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={serviceNameEn}
                    onChange={onChangeSNE}
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>회사명(국문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={companyNameKo}
                    onChange={onChangeCNK}
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>회사명(영문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={companyNameEn}
                    onChange={onChangeCNE}
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>대표자명(국문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={ownerNameKo}
                    onChange={onChangeONK}
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>대표자명(영문)</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={ownerNameEn}
                    onChange={onChangeONE}
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>사업자등록번호</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={registrationNum}
                    onChange={onChangeRN}
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>통신판매 신고번호</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={mailNum}
                    onChange={onChangeMN}
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>사업장 주소(국문)</label>
                </th>
                <td className="left" colSpan={3}>
                  <input
                    type="text"
                    className="int_case_1"
                    style={{ width: "74%" }}
                    value={addressKo}
                    onChange={onChangeAK}
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>사업장 주소(영문)</label>
                </th>
                <td className="left" colSpan={3}>
                  <input
                    type="text"
                    className="int_case_1"
                    style={{ width: "74%" }}
                    value={addressEn}
                    onChange={onChangeAE}
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>대표전화</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={phone}
                    onChange={onChangeP}
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>팩스번호</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={fax}
                    onChange={onChangeF}
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
              <tr>
                <th>
                  <label>개인정보 책임자명</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={privacyOfficer}
                    onChange={onChangePO}
                    // value="asdasdasd"
                  />
                </td>
                <th>
                  <label>관리자 이메일</label>
                </th>
                <td className="left">
                  <input
                    type="text"
                    className="int_case_1"
                    value={email}
                    onChange={onChangeE}
                    // value="asdasdasd"
                  />
                </td>
              </tr>
              {/* ====================================================================== */}
            </tbody>
          </table>
        </form>
      </div>
      <div className="btn_area center">
        <a className="btn big bg-type orange01" onClick={updateF}>
          설정저장
        </a>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default DefaultSetting;
