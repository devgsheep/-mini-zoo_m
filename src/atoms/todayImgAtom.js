import { atom } from "recoil";

const todayImgAtom = atom({
  key: "todayImgAtom",
  default: "/images/noimg_icon.svg",
});

export { todayImgAtom };
