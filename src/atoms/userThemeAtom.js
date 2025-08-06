import { atom } from "recoil";

const userThemeAtom = atom({
  key: "userThemeAtom",
  default: "blue",
});

export { userThemeAtom };
