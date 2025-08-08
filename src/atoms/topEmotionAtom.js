import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const topEmotionAtom = atom({
  key: "topEmotionAtom",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
