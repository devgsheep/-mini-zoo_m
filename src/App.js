import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FirstForm from "./pages/FirstForm";
import HistoryDaily from "./pages/HistoryDaily";
import Historymonth from "./pages/Historymonth";
import Historyweek from "./pages/Historyweek";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import SignForm from "./pages/SignForm";
import Today from "./pages/Today";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path={"/"} element={<FirstForm>첫화면</FirstForm>} />
          <Route path={"/sign"} element={<SignForm>가입하기</SignForm>} />
          <Route path={"/login"} element={<LoginForm>로그인</LoginForm>} />
          <Route path={"/home"} element={<Home>홈</Home>} />
          <Route path={"/today"} element={<Today>오늘의기록</Today>} />
          <Route
            path={"/history/daily"}
            element={<HistoryDaily>히스토리:일간</HistoryDaily>}
          />
          <Route
            path={"/history/week"}
            element={<Historyweek>히스토리:주간</Historyweek>}
          />
          <Route
            path={"/history/month"}
            element={<Historymonth>히스토리:월간</Historymonth>}
          />
          <Route path={"/profile"} element={<Profile>프로필</Profile>} />
          <Route
            path={"/profile/edit"}
            element={<ProfileEdit>프로필편집</ProfileEdit>}
          />
          {/* 팝업임시작업
        <Route path={"/alart"} element={<Alart>알람</Alart>}></Route>
        <Route path={"/theme"} element={<Theme>테마</Theme>}></Route>
        <Route
          path={"/personalinfo"}
          element={<PersonalInfo>개인정보처리방침</PersonalInfo>}
        ></Route>
        <Route path={"/ask"} element={<Ask>문의하기</Ask>}></Route>
        <Route path={"/info"} element={<Info>정보</Info>}></Route>
        <Route path={"/logout"} element={<Logout>로그아웃</Logout>}></Route>
        <Route
          path={"/nicknameedit"}
          element={<NicknameEdit>프로필편집 및 한줄자기소개 수정</NicknameEdit>}
        ></Route>
        <Route
          path={"/passwordchange"}
          element={<PasswordChange>비밀번호수정</PasswordChange>}
        ></Route>
        <Route
          path={"/profileimage"}
          element={<ProfileImage>프로필 이미지 변경</ProfileImage>}
        ></Route>
        <Route
          path={"/language"}
          element={<Language>언어변경</Language>}
        ></Route>
        <Route path={"/resign"} element={<ReSign>회원탈퇴</ReSign>}></Route> */}
          {/* 잘못된 경로 접근 처리 */}
          <Route path="*" element={<NotFound />} />;
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
