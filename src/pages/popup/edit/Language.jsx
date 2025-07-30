import styled from "@emotion/styled";
import React from "react";
import colors from "../../../styles/colors";

// const AlertPopUp = styled.div`
//   display: flex;
//   position: fixed;
//   z-index: 99999;
//   width: 394px;
//   height: 100%;

//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.6);
// `;
const AlertPopUpBox = styled.div`
  width: 286px;
  height: auto;
  background-color: ${colors.white};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 16px;
  padding: 20px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  width: 100%;
`;

const TextWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25px;
`;

const SelectBox = styled.div`
  width: 258px;
  margin-top: 20px;
`;

const LanguageSelect = styled.select`
  width: 100%;
  height: 36px;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #cbd5dd;
  background-color: white;
  font-size: 14px;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='12' viewBox='0 0 24 24' width='12' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
`;

// const Svg = styled.svg`
//   position: absolute;
//   left: 0;
//   transform: translateX(50%);
// `;

// const InputTitle = styled.input`
//   display: flex;
//   width: 245px;
//   height: 30px;
//   align-items: flex-start;
//   padding: 10px;
//   border-radius: 8px;
//   border: 1px solid #cbd5dd;
//   background: #fff;
//   font-size: 10px;
//   box-shadow: var(--sds-size-depth-0) var(--sds-size-depth-025)
//     var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100);
//   margin: 20px 0;
//   &::placeholder {
//     padding-left: 25px;
//     font-size: 10px;
//     color: ${colors.gray[300]};
//   }
// `;

const Button = styled.div`
  background-color: #247cff;
  width: 60px;
  padding: 10px;
  font-size: 13px;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  margin-left: auto;
`;

function Language({ onClose }) {
  return (
    // <AlertPopUp>
    <>
      <AlertPopUpBox>
        <Title>언어 설정</Title>
        <TextWrap>
          <SelectBox>
            <LanguageSelect defaultValue="ko">
              <option value="ko">🇰🇷 한국어</option>
              <option value="en">🇺🇸 English</option>
              <option value="jp">🇯🇵 日本語</option>
            </LanguageSelect>
          </SelectBox>
          {/* <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
          >
            <g clipPath="url(#clip0_224_11114)">
              <path
                d="M18.5 12C18.5 12.5304 18.2893 13.0391 17.9142 13.4142C17.5391 13.7893 17.0304 14 16.5 14H2.5C1.96957 14 1.46086 13.7893 1.08579 13.4142C0.710714 13.0391 0.5 12.5304 0.5 12V3C0.5 2.46957 0.710714 1.96086 1.08579 1.58579C1.46086 1.21071 1.96957 1 2.5 1H16.5C17.0304 1 17.5391 1.21071 17.9142 1.58579C18.2893 1.96086 18.5 2.46957 18.5 3V12Z"
                fill="#EEEEEE"
              />
              <path
                d="M11.2204 5.04238C10.5687 4.5861 9.76234 4.40741 8.97882 4.54563C8.1953 4.68384 7.49877 5.12763 7.04245 5.77938C6.82697 6.10557 6.74731 6.50298 6.82042 6.88702C6.89353 7.27106 7.11363 7.61141 7.43389 7.83562C7.75414 8.05983 8.14925 8.1502 8.53513 8.08749C8.921 8.02479 9.26717 7.81396 9.49995 7.49988C9.61295 7.33852 9.75663 7.20099 9.92278 7.09516C10.0889 6.98932 10.2743 6.91725 10.4683 6.88306C10.6623 6.84886 10.8612 6.85321 11.0535 6.89586C11.2458 6.93851 11.4278 7.01863 11.5892 7.13163C11.7506 7.24463 11.8881 7.38831 11.9939 7.55446C12.0998 7.72061 12.1718 7.90598 12.206 8.09999C12.2402 8.29399 12.2359 8.49283 12.1932 8.68516C12.1506 8.87748 12.0705 9.05952 11.9574 9.22088C12.1835 8.89813 12.3437 8.53403 12.4289 8.14936C12.5142 7.76469 12.5229 7.36699 12.4544 6.97897C12.386 6.59096 12.2418 6.22022 12.0301 5.88793C11.8183 5.55565 11.5432 5.26833 11.2204 5.04238Z"
                fill="#C60C30"
              />
              <path
                d="M11.5889 7.13181C11.2631 6.90362 10.86 6.8142 10.4682 6.88321C10.0765 6.95222 9.72818 7.17401 9.49994 7.49981C9.26773 7.81553 8.9212 8.02787 8.53446 8.09142C8.14773 8.15497 7.75147 8.06468 7.43044 7.83986C7.10941 7.61504 6.88908 7.27353 6.81657 6.88837C6.74407 6.50321 6.82513 6.10497 7.04244 5.77881C6.80984 6.1012 6.64364 6.4666 6.55349 6.85379C6.46335 7.24097 6.45105 7.6422 6.51732 8.03418C6.58359 8.42616 6.7271 8.80105 6.93952 9.13708C7.15194 9.47311 7.42902 9.76357 7.75467 9.99158C8.08032 10.2196 8.44804 10.3806 8.83646 10.4653C9.22488 10.5499 9.62625 10.5565 10.0172 10.4847C10.4082 10.4129 10.7811 10.2641 11.1141 10.047C11.4471 9.82982 11.7336 9.54865 11.9569 9.21981C12.07 9.05858 12.1501 8.87665 12.1928 8.68443C12.2355 8.49221 12.2398 8.29346 12.2057 8.09954C12.1715 7.90563 12.0994 7.72035 11.9936 7.5543C11.8878 7.38825 11.7503 7.24469 11.5889 7.13181Z"
                fill="#003478"
              />
              <path
                d="M12.667 11.286L13.631 10.137L14.014 10.4585L13.05 11.6075L12.667 11.286ZM13.952 9.75448L14.916 8.60598L15.299 8.92748L14.335 10.076L13.952 9.75448ZM13.433 11.93L14.397 10.7815L14.78 11.103L13.816 12.2515L13.433 11.93ZM14.719 10.397L15.684 9.24848L16.067 9.57048L15.102 10.7185L14.719 10.397ZM14.1985 12.573L15.1635 11.4245L15.546 11.746L14.5815 12.8945L14.1985 12.573ZM15.484 11.0405L16.4475 9.89048L16.831 10.212L15.8675 11.362L15.484 11.0405ZM15.486 3.95948L15.869 3.63798L16.834 4.78748L16.4505 5.10898L15.486 3.95948ZM14.2 2.42648L14.583 2.10498L15.547 3.25448L15.1635 3.57548L14.2 2.42648ZM13.4335 3.07048L13.8165 2.74898L16.0665 5.42998L15.6835 5.75148L13.4335 3.07048ZM12.6675 3.71248L13.051 3.39098L14.0145 4.53998L13.6315 4.86098L12.6675 3.71248ZM13.9525 5.24498L14.3355 4.92348L15.3005 6.07198L14.918 6.39348L13.9525 5.24498ZM3.69998 8.92698L4.08298 8.60548L6.33248 11.287L5.94898 11.6085L3.69998 8.92698ZM2.93498 9.56998L3.31748 9.24898L4.28198 10.398L3.89848 10.7195L2.93498 9.56998ZM4.21848 11.103L4.60148 10.7815L5.56648 11.93L5.18348 12.2515L4.21848 11.103ZM2.16798 10.2125L2.55098 9.89098L4.80098 12.572L4.41748 12.8935L2.16798 10.2125ZM2.16748 4.78648L4.41648 2.10548L4.79998 2.42648L2.54998 5.10798L2.16748 4.78648ZM2.93348 5.42998L5.18348 2.74848L5.56648 3.06998L3.31648 5.75098L2.93348 5.42998ZM3.69998 6.07248L5.94998 3.39098L6.33298 3.71248L4.08298 6.39398L3.69998 6.07248Z"
                fill="#292F33"
              />
            </g>
            <defs>
              <clipPath id="clip0_224_11114">
                <rect
                  width="18"
                  height="14"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </Svg>
          <InputTitle type="text" placeholder="한국어" /> */}
        </TextWrap>
        <Button onClick={onClose}>확인</Button>
      </AlertPopUpBox>
    </>
    // </AlertPopUp>
  );
}

export default Language;
