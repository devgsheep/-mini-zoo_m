import { atom } from "recoil";

const userTemaAtom = atom({
  key: "userTemaAtom",
  default: "blue",
});

export { userTemaAtom };
