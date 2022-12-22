import { makeAutoObservable } from "mobx";

class SecondSectionState {
  constructor() {
    makeAutoObservable(this);
  }

  text = "";

  onChange(str: string) {
    this.text = str;
  }

  alertAnything() {
    if (this.text) {
      alert(this.text);
    }
  }

  alertNumber() {
    if (Number.isInteger(+this.text) && this.text) {
      alert(this.text);
    }
  }
}

export default SecondSectionState;

export interface ISecondSectionState {
  state: SecondSectionState;
}
