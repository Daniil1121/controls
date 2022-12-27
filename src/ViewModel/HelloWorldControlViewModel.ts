import { makeAutoObservable } from "mobx";

class HelloWorldControlViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  text = "";

  onChangeText(str: string) {
    this.text = str;
  }

  printHelloWorld() {
    this.text = "Hello world!";
  }

  deleteText() {
    this.text = "";
  }
}

export default HelloWorldControlViewModel;

export interface IHelloWorldControlViewModel {
  state: HelloWorldControlViewModel;
}
