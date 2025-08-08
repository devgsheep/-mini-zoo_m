import { atom } from "recoil";

export const WeekListAtom = atom({
  key: "WeekListAtom",
  default: {
    emotion: "",
    value: 0,
    date: new Date(),
    text: "",
  },
});
