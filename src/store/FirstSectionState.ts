import { makeAutoObservable } from "mobx";

class FirstSectionState {
  constructor() {
    makeAutoObservable(this);
  }

  text = "";

  onChange(str: string) {
    this.text = str;
  }

  print() {
    this.text = "Hello world!";
  }

  clear() {
    this.text = "";
  }
}

export default FirstSectionState;

export interface IFirstSectionState {
  state: FirstSectionState;
}
