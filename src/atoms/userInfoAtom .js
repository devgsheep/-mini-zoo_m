import { atom } from "recoil";

export const userNameAtom = atom({
  key: "userNameAtom",
  default: "OO",
});

export const userEmailAtom = atom({
  key: "userEmailAtom",
  default: "example@email.com",
});
