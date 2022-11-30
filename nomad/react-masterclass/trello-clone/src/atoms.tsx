import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  [key: string]: ITodo[];
}

const localStorageEffect = (key: string) =>({ setSelf, onSet }: any) => {
  const savedValue = localStorage.getItem(key);
  // setSelf -> Callbacks to set or reset the value of the atom.
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }
	
  // onSet -> Subscribe to changes in the atom value.
  onSet((newValue: any, _: any, isReset: boolean) => {
    isReset
    ? localStorage.removeItem(key)
    : localStorage.setItem(key, JSON.stringify(newValue));
  });
};


export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    To_do: [],
    Doing: [],
    Done: [],
  },
  effects: [localStorageEffect('todo')]
});
