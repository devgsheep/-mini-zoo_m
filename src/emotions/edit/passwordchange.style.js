import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { Form } from "antd";

export const PasswordChangePopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 27px;
`;
export const PasswordChangeTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
export const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CustumPwChInput = styled.input`
  width: 246px;
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
    color: #999;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ChangePw = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-top: 25px; */
  gap: 3px;
`;
export const AntCustomFormItem = styled(Form.Item)`
  margin-bottom: 5px;
  height: 84px;
  .ant-form-item-explain .ant-form-item-explain-error {
    text-align: left;
    font-size: 10px;
  }
`;
