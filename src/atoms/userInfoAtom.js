import { atom } from "recoil";

export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: {
    nickname: "게스트",
    email: "example@example.com",
    password: "",
    thumbnail_img: "/images/guest_img.png",
    introduction: "자기소개를 입력해주세요",
  },

  // 아래코드로 작성했으나, 검토했을때 userInfo 의 값이 null 이라면 앱에서 오류가 발생할수도있어서, 개선합니다.
  // JSON.parse(localStorage.getItem("userInfo")) || {
  //   nickame: "게스트",
  //   email: "example@example.com",
  //   password: "",
  // },
});
