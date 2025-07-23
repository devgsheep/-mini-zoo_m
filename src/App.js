import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FirstForm from "./pages/FirstForm";
import SignForm from "./pages/SignForm";
import LoginForm from "./pages/LoginForm";
import Home from "./pages/Home";
import Today from "./pages/Today";
import HistoryDaily from "./pages/HistoryDaily";
import Historymonth from "./pages/Historymonth";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Historyweek from "./pages/Historyweek";
import NotFound from "./pages/NotFound";

function App() {
  return (
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
        {/* 잘못된 경로 접근 처리 */}
        <Route path="*" element={<NotFound />} />;
      </Routes>
    </Router>
  );
}

export default App;
