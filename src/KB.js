//?             [KB] -> KiloByte -> Storage
import { atom } from "nanostores";
import { persistentMap } from "@nanostores/persistent";

//?             [STORAGE]->[CHARACTER-LOCATION]
export const x$ = atom(90);
export const y$ = atom(65);

export const character$ = atom("");
export const map$ = atom("");

export const RightLimit$ = atom(184);
export const LeftLimit$ = atom(-8);
export const TopLimit$ = atom(52);
export const BottomLimit$ = atom(70);

export const load$ = atom(true);
export const game$ = atom(false);
export const scene$ = atom("");
export const action$ = atom("");
export const modal$ = atom(false);

export const member$ = atom(false);

export const kbve$ = persistentMap("kbve:", [], {
  encode(value) {
    return JSON.stringify(value);
  },
  decode(value) {
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  },
});
