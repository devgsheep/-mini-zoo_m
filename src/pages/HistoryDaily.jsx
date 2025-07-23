import styled from "@emotion/styled";
import React from "react";
import { fonts } from "../styles/fonts";

const Container = styled.div`
  height: 852px;
  background-color: #f0f6ff;
  text-align: center;
`;

const TopContainer = styled.div`
  width: 394px;
  height: 47px;
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 13px;
`;

const SignWrap = styled.div`
  width: 18px;
  height: 18px;
  left: 10px;
  top: 35%;
  position: absolute;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const SignDiv = styled.div`
  height: 100%;
  font-family: ${fonts.bold};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationStyle = styled.div`
  width: 367px;
  height: 36px;
  display: inline-flex;
  padding: 4px;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
`;

function HistoryDaily() {
  return (
    <Container>
      <TopContainer>
        <SignWrap>
          <div>
            <Image src="/images/majesticons_arrow-left.svg" alt="뒤로가기" />
          </div>
        </SignWrap>
        <SignDiv>히스토리</SignDiv>
      </TopContainer>
      <NavigationStyle>
        <div></div>
      </NavigationStyle>
    </Container>
  );
}

export default HistoryDaily;
