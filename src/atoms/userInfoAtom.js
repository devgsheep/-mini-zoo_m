import { atom } from "recoil";

export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: () => {
    const saveUserInfo = localStorage.getItem("userInfo");
    return saveUserInfo
      ? JSON.parse(saveUserInfo)
      : {
          nickname: "게스트",
          email: "example@example.com",
          password: "",
        };
  },

  // 아래코드로 작성했으나, 검토했을때 userInfo 의 값이 null 이라면 앱에서 오류가 발생할수도있어서, 개선합니다.
  // JSON.parse(localStorage.getItem("userInfo")) || {
  //   nickame: "게스트",
  //   email: "example@example.com",
  //   password: "",
  // },
});
