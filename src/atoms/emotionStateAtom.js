import { atom } from "recoil";

export const emotionStateAtom = atom({
  key: "emotionStateAtom",
  default: {
    emotion: "happy",
    value: 5,
    date: new Date(),
    text: "오늘은 기분이 꽤 괜찮았어 :)",
  },
});
