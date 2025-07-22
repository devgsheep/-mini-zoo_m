import styled from "@emotion/styled";
import React from "react";
export const Button = styled.button`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
  background-color: #247cff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #004cbd;
  }
`;

function Ui() {
  return (
    <div>
      <h1>버튼</h1>
      <Button>버튼</Button>
    </div>
  );
}

export default Ui;
