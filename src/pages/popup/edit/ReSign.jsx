import styled from "@emotion/styled";
import React from "react";
import colors from "../../../styles/colors";
import { useNavigate } from "react-router-dom";

// const Container = styled.div`
//   width: 394px;
//   height: auto;
//   background-color: #f0f6ff;
// `;

// const ReSignPopUp = styled.div`
//   display: flex;
//   position: fixed;
//   z-index: 99999;
//   width: 394px;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.6);
//   /* display: none; */
// `;
const ReSignPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const ResignTopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;
  margin-bottom: 22px;
  span {
    font-weight: 700;
    font-size: 20px;
  }
`;
const ResignImgBox = styled.div`
  /* background-color: aliceblue; */
  box-shadow: 3px 3px 13.1px -2px rgba(0, 0, 0, 0.25);
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
const ResignMiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 32px;
`;
const ResignMainText = styled.span`
  font-size: 16px;
  color: ${colors.black};
`;
const ResignSubText = styled.span`
  font-size: 10px;
  color: ${colors.gray[500]};
`;
const ResignSubTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ResignBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin-bottom: 20px;
`;
const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 258px;
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid ${colors.gray[400]};
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  padding-left: 10px;
  font-size: 13px;
  color: #c2c2c2;
  &::placeholder {
    font-size: 11px;
    color: ${colors.gray[500]};
  }
`;
const ResignButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 118px;
    height: 39px;
    border-radius: 12px;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
`;
const ResignCCButton = styled.button`
  background-color: #fafafa;
  color: ${colors.gray[400]};
`;
const ResignOKButton = styled.button`
  background-color: #fef2f2;
  color: #ef4444;
`;

function ReSign({ onClose }) {
  // 네비게이터
  const navigate = useNavigate();
  const handleClickReSign = () => {
    navigate("/");
  };

  return (
    // <Container>
    //    <ReSignPopUp>
    <ReSignPopUpBox>
      <ResignTopBox>
        <ResignImgBox>
          <img src="/images/catwhite.svg" alt="탈퇴" />
        </ResignImgBox>
        <span>회원탈퇴</span>
      </ResignTopBox>
      <ResignMiddleBox>
        <ResignMainText>계정을 삭제하시겠어요?</ResignMainText>
        <ResignSubTextBox>
          <ResignSubText>계정을 삭제하면 복구할 수 없습니다.</ResignSubText>
          <ResignSubText>모든 데이터가 완전히 삭제됩니다.</ResignSubText>
        </ResignSubTextBox>
      </ResignMiddleBox>
      <ResignBottomBox>
        <ResignSubText>계속하려면 비밀번호를 입력해주세요.</ResignSubText>
        <InputWrap>
          <Input type="password" placeholder="비밀번호를 입력해주세요." />
        </InputWrap>
      </ResignBottomBox>
      <ResignButtonWrap>
        <ResignCCButton onClick={onClose}>취소</ResignCCButton>
        <ResignOKButton onClick={handleClickReSign}>회원탈퇴</ResignOKButton>
      </ResignButtonWrap>
    </ReSignPopUpBox>
    //   </ReSignPopUp>
    // </Container>
  );
}

export default ReSign;
