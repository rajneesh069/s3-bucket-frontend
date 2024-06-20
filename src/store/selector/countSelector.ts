import { selector } from "recoil";
import { countState } from "../atoms/counterAtom";

export const count = selector<number>({
  key: "count",
  get: ({ get }) => {
    const state = get(countState);
    return state;
  },
});
