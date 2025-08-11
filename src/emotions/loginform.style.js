import styled from "@emotion/styled";
import { fonts } from "../styles/fonts";
import colors from "../styles/colors";
import { Button, Checkbox, Form, Input } from "antd";

export const Container = styled.div`
  height: 100%;
  background-color: #f0f6ff;
  text-align: center;
`;

export const TopContainer = styled.div`
  height: 47px;
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignWrap = styled.div`
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

export const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const SignDiv = styled.div`
  height: 100%;
  font-family: ${fonts.bold};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 4px;
  padding-top: 31px;
`;

export const ImageEdit = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const TitleP1 = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 10px;
`;
export const TitleP2 = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: normal;
  color: ${colors.gray[500]};
`;

export const SpanLogin = styled.span`
  font-family: "pretendard";
  color: #ec48b3;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

export const HaveLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  gap: 7px;
`;
export const HaveP = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #757575;
`;

export const NoHaveLogin = styled.span`
  color: #ec48b3;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #999;
  font-size: 14px;
  margin: 5px 20px 40px 20px;
`;

export const DividerLine = styled.span`
  flex: 1;
  height: 1px;
  background-color: #ddd;
`;

export const DividerText = styled.span`
  color: #757575;
  font-weight: 500;
  font-size: 10px;
  padding: 0 10px;
  white-space: nowrap;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 11px;
  padding-bottom: 20px;
`;

export const GoogleButton = styled.button`
  display: flex;
  width: 355px;
  height: 43px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  background: #fff;
  gap: 10px;
  cursor: pointer;
`;

export const KakaoButton = styled.button`
  display: flex;
  width: 355px;
  height: 43px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background: #facc15;
  border: 1px solid #facc15;
  gap: 10px;
  cursor: pointer;
`;

export const GUESTP = styled.p`
  padding-top: 20px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.gray[600]};
  text-decoration: underline;
  cursor: pointer;
`;

export const AntCustomFormItem = styled(Form.Item)`
  padding: 0 20px;

  .ant-form-item-explain .ant-form-item-explain-error {
    text-align: left;
    font-size: 10px;
  }
`;

export const AntCustomInput = styled(Input)`
  width: 350px;
  height: 46px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid #c6ddff;
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
export const AntCustomInputPw = styled(Input.Password)`
  width: 350px;
  height: 46px;
  line-height: 36px;
  border-radius: 10px;
  border: 1px solid #c6ddff;
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
    color: #8ab9ff;
    font-size: 18px;
  }
`;
export const AntCustomSignButton = styled(Button)`
  width: 350px;
  display: inline-flex;
  padding: 25px 63px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: #8ab9ff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: 1.6px;
  line-height: normal;
  cursor: pointer;
`;
export const CustomAntCheckbox = styled(Checkbox)`
  & .ant-checkbox-inner {
    border: 1px solid #c6ddff;
  }
`;
