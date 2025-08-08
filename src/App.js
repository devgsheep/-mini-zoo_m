import moment from "moment";
import "moment/locale/ko";
import { lazy, Suspense, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingDiv from "./components/ui/LoadingDiv";

const FirstForm = lazy(
  () =>
    new Promise(
      resolve => setTimeout(() => resolve(import("./pages/FirstForm"))),
      500,
    ),
);
const SignForm = lazy(
  () =>
    new Promise(
      resolve => setTimeout(() => resolve(import("./pages/SignForm"))),
      500,
    ),
);
const LoginForm = lazy(
  () =>
    new Promise(
      resolve => setTimeout(() => resolve(import("./pages/LoginForm"))),
      500,
    ),
);
const Home = lazy(
  () =>
    new Promise(resolve =>
      setTimeout(() => resolve(import("./pages/Home")), 500),
    ),
);
const Today = lazy(
  () =>
    new Promise(
      resolve => setTimeout(() => resolve(import("./pages/Today"))),
      500,
    ),
);
const HistoryDaily = lazy(
  () =>
    new Promise(
      resolve => setTimeout(() => resolve(import("./pages/HistoryDaily"))),
      500,
    ),
);
const Historyweek = lazy(
  () =>
    new Promise(
      resolve => setTimeout(() => resolve(import("./pages/Historyweek"))),
      500,
    ),
);
const Historymonth = lazy(
  () =>
    new Promise(
      resolve => setTimeout(() => resolve(import("./pages/Historymonth"))),
      500,
    ),
);
const Profile = lazy(
  () =>
    new Promise(
      resolve => setTimeout(() => resolve(import("./pages/Profile"))),
      500,
    ),
);
const ProfileEdit = lazy(
  () =>
    new Promise(
      resolve => setTimeout(() => resolve(import("./pages/ProfileEdit"))),
      500,
    ),
);
const NotFound = lazy(
  () =>
    new Promise(
      resolve => setTimeout(() => resolve(import("./pages/NotFound"))),
      500,
    ),
);

function App() {
  useEffect(() => {
    moment.locale("ko");
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path={"/"}
          element={
            <Suspense fallback={<LoadingDiv />}>
              <FirstForm>첫화면</FirstForm>
            </Suspense>
          }
        />
        <Route
          path={"/sign"}
          element={
            <Suspense fallback={<LoadingDiv />}>
              <SignForm>가입하기</SignForm>
            </Suspense>
          }
        />
        <Route
          path={"/login"}
          element={
            <Suspense fallback={<LoadingDiv />}>
              <LoginForm>로그인</LoginForm>
            </Suspense>
          }
        />
        <Route
          path={"/home"}
          element={
            <Suspense fallback={<LoadingDiv />}>
              <Home>홈</Home>
            </Suspense>
          }
        />
        <Route
          path={"/today"}
          element={
            <Suspense fallback={<LoadingDiv />}>
              <Today>오늘의기록</Today>
            </Suspense>
          }
        />
        <Route
          path={"/history/daily"}
          element={
            <Suspense fallback={<LoadingDiv />}>
              <HistoryDaily>히스토리:일간</HistoryDaily>
            </Suspense>
          }
        />
        <Route
          path={"/history/week"}
          element={
            <Suspense fallback={<LoadingDiv />}>
              <Historyweek>히스토리:주간</Historyweek>
            </Suspense>
          }
        />
        <Route
          path={"/history/month"}
          element={
            <Suspense fallback={<LoadingDiv />}>
              <Historymonth>히스토리:월간</Historymonth>
            </Suspense>
          }
        />
        <Route
          path={"/profile"}
          element={
            <Suspense fallback={<LoadingDiv />}>
              <Profile>프로필</Profile>
            </Suspense>
          }
        />
        <Route
          path={"/profile/edit"}
          element={
            <Suspense fallback={<LoadingDiv />}>
              <ProfileEdit>프로필편집</ProfileEdit>
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingDiv />}>
              <NotFound />
            </Suspense>
          }
        />
        ;
      </Routes>
    </Router>
  );
}

export default App;
