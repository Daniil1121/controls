import { makeAutoObservable } from "mobx";
import AlertControlViewModel from "./AlertControlViewModel";
import HelloWorldControlViewModel from "./HelloWorldControlViewModel";

class HighOrderViewModel {
  helloViewModel: HelloWorldControlViewModel | null = null;
  alertViewModel: AlertControlViewModel | null = null;

  constructor(
    helloViewModel: HelloWorldControlViewModel,
    alertViewModel: AlertControlViewModel
  ) {
    this.helloViewModel = helloViewModel;
    this.alertViewModel = alertViewModel;
    makeAutoObservable(this);
  }

  setText = () => {
    this.helloViewModel?.onChange(this.alertViewModel?.text || "");
  };
}

export default HighOrderViewModel;
