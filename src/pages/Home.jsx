import styled from "@emotion/styled";
import React from "react";
const HomeHeader = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  max-height: 47px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
`;
const HomeTop = styled.div`
  text-align: center;
  line-height: 27px;
  color: #5c5c5c;
  font-weight: 600;
`;
const HomeTopButton = styled.button`
  background-color: #8ab9ff;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 8px;
`;

function Home() {
  return (
    <div className="wrap" style={{ backgroundColor: "#f0f6ff" }}>
      <HomeHeader>로고</HomeHeader>
      <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <HomeTop>OO님의 오늘 하루 어땟나요?</HomeTop>
        <HomeTop>오늘의 기분은 어때요?</HomeTop>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <HomeTopButton>
          <div style={{ padding: "14px 60px" }}>
            <p style={{ fontWeight: 600 }}>오늘의 순간을 기록하세요</p>
            <p style={{ fontWeight: 400, fontSize: "13px" }}>
              동물 친구들과 함께 감정을 기록해보세요
            </p>
          </div>
        </HomeTopButton>
      </div>
    </div>
  );
}

export default Home;
