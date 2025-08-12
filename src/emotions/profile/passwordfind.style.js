import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { Form, Input } from "antd";

export const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  border-radius: 16px;
  padding: 20px 20px 20px 20px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  padding-bottom: 10px;
`;

export const AntCustomFormItem = styled(Form.Item)`
  margin-bottom: 20px;
  .ant-form-item-explain .ant-form-item-explain-error {
    text-align: left;
    font-size: 10px;
  }
  .ant-form-item-label {
    margin-bottom: -5px !important; // 이 줄이 인풋과 라벨 사이 여백에 영향 가능
  }
`;

export const AntCustomInput = styled(Input)`
  width: 100%;
  height: 36px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid ${colors.gray[200]};
  box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
    var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
  padding-left: 10px;
  font-size: 13px;
  color: ${colors.black};
  margin-bottom: 2px;
  &::placeholder {
    font-family: "Pretendard";
    font-size: 11px;
    color: #999;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${colors.blue[500]};
  border: none;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: 1.6px;
  line-height: normal;
  cursor: pointer;
`;

