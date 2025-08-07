import { useRecoilState } from "recoil";
import { userThemeAtom } from "../../../atoms/userThemeAtom";
import "../../../css/radio.css";
import {
  AlertPopUpBox,
  ButtonCC,
  ButtonContainer,
  ButtonOK,
  ButtonWrap,
  EXText,
  ModeText,
  Span,
  ThemeRadioLabel,
  ThemeRadioWrap,
  Title,
} from "../../../emotions/profile/theme.style";

function Theme({ onClose }) {
  // js 자리
  const [userTheme, setUserTheme] = useRecoilState(userThemeAtom);

  const handleClickTheme = color => {
    setUserTheme(color);
  };
  const theme = userTheme;

  // 테마설정

  // jsx
  return (
    <>
      {/* <AlertPopUp> */}
      <AlertPopUpBox>
        <Title>테마설정</Title>
        <ThemeRadioWrap>
          <ThemeRadioLabel htmlFor="light">
            <input
              type="radio"
              id="light"
              value="light"
              name="theme"
              className="custom-radio"
              onClick={() => handleClickTheme("blue")}
            />
            <div>
              <ModeText>블루 테마</ModeText>
              <EXText>심플한 기본 테마</EXText>
            </div>
          </ThemeRadioLabel>

          <ThemeRadioLabel htmlFor="dark">
            <input
              type="radio"
              id="dark"
              value="dark"
              name="theme"
              className="custom-radio"
              onClick={() => handleClickTheme("green")}
            />

            <div>
              <ModeText>그린 테마</ModeText>
              <EXText>눈이 편안한 그린 테마</EXText>
            </div>
          </ThemeRadioLabel>
          <ThemeRadioLabel htmlFor="system">
            <input
              type="radio"
              id="system"
              value="system"
              name="theme"
              className="custom-radio"
              onClick={() => handleClickTheme("yellow")}
            />
            <div>
              <ModeText>옐로우 테마</ModeText>
              <EXText>밝고 산뜻한 옐로우 테마</EXText>
            </div>
          </ThemeRadioLabel>
        </ThemeRadioWrap>
        <ButtonContainer>
          <ButtonWrap>
            <ButtonOK onClick={onClose}>확인</ButtonOK>
            <Span />
            <ButtonCC onClick={onClose}>취소</ButtonCC>
          </ButtonWrap>
        </ButtonContainer>
      </AlertPopUpBox>
    </>
    // </AlertPopUp>
  );
}

export default Theme;
