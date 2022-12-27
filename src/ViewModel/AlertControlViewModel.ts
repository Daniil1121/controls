import { makeAutoObservable } from "mobx";

class AlertControlViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  text = "";

  onChangeText(str: string) {
    this.text = str;
  }

  alertAnythingText() {
    if (this.text) {
      alert(this.text);
    }
  }

  alertOnlyNumber() {
    if (Number.isInteger(+this.text) && this.text) {
      alert(this.text);
    }
  }
}

export default AlertControlViewModel;

export interface IAlertControlViewModel {
  state: AlertControlViewModel;
}
