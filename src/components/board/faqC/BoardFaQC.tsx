import React from "react";
import styled from "styled-components";

function BoardFaQC() {
  return (
    <Wrap>
      <div className="box01" style={{ marginTop: "20px", height: "900px" }}>
        구분 <select></select>
        <br />
        <br />
        <div style={{ display: "inline-block", paddingLeft: "10px" }}>
          <div style={{ height: "420px" }}></div>
          <div style={{ clear: "both" }}></div>
          <div style={{ float: "none" }}></div>
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default BoardFaQC;
