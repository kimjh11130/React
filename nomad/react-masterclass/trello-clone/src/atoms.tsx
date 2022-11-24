import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    To_do: ["a", "b"],
    Doing: ["c", "d", "e"],
    Done: ["f", "g"],
  },
});
