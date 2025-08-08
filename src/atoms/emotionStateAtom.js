import { atom } from "recoil";

export const emotionStateAtom = atom({
  key: "emotionStateAtom",
  default: {
    emotion: "happy",
    value: 5,
  },
});
