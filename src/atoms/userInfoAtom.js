import { atom } from "recoil";

const userNameAtom = atom({
  key: "userNameAtom",
  default: localStorage.getItem("userName") || "",
});

const userEmailAtom = atom({
  key: "userEmailAtom",
  default: localStorage.getItem("userEmail") || "",
});

const userPasswordAtom = atom({
  key: "userPasswordAtom",
  default: localStorage.getItem("userPassword") || "",
});
const userStateAtom = atom({
  key: "userStateAtom",
  default: false,
});

export { userEmailAtom, userNameAtom, userPasswordAtom, userStateAtom };
