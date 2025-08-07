import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { Form, Input } from "antd";

export const ReSignPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const ResignTopBox = styled.div`
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
export const ResignImgBox = styled.div`
  /* background-color: aliceblue; */
  box-shadow: 3px 3px 13.1px -2px rgba(0, 0, 0, 0.25);
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const ResignMiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 32px;
`;
export const ResignMainText = styled.span`
  font-size: 16px;
  color: ${colors.black};
`;
export const ResignSubText = styled.span`
  font-size: 10px;
  color: ${colors.gray[500]};
`;

export const ResignSubTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ResignBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin-bottom: 20px;
`;

export const AntCustomFormItem = styled(Form.Item)`
  width: 240px;
  margin-bottom: 20px;
  .ant-form-item-explain .ant-form-item-explain-error {
    text-align: left;
    font-size: 10px;
  }
`;

export const AntCustomInputPw = styled(Input.Password)`
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid ${colors.gray[200]};
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  padding-left: 10px;
  font-size: 13px;
  color: #c2c2c2;
  margin-bottom: 2px;
  &::placeholder {
    font-family: "Pretendard";
    font-size: 11px;
    color: #999;
  }
  .ant-input-suffix svg {
    color: ${colors.gray[200]};
    font-size: 18px;
  }
`;

export const ResignButtonWrap = styled.div`
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
export const ResignCCButton = styled.button`
  background-color: #fafafa;
  color: ${colors.gray[400]};
`;
export const ResignOKButton = styled.button`
  background-color: #fef2f2;
  color: #ef4444;
`;
