import { makeAutoObservable, action } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class FourthSectionState {
  constructor() {
    makeAutoObservable(this);
  }

  countryArr: CountryInfo[] = [];
  reqStr = "";
  error = "";
  maxCountHints = 3;
  countHints = this.maxCountHints;

  private fetchCountry() {
    this.error = "";
    this.countryArr = [];
    getCountryByName(this.reqStr)
      .then(
        action("fetchSuccess", (res: CountryInfo[]) => {
          this.countryArr = res
            .slice(0, this.countHints)
            .filter((el) => el.name && el.flag && el.fullName);
        })
      )
      .catch(
        action("fetchError", (err) => {
          this.countryArr = [];
          this.error = "произошла какая-то ошибка :(";
        })
      );
  }

  onChange(str: string) {
    this.reqStr = str;
    this.fetchCountry();
  }

  setCountry(str: string) {
    this.reqStr = str;
    this.countryArr = [];
  }

  setCountHints(val: string) {
    this.countHints = +val;
    this.fetchCountry();
  }
}

export default FourthSectionState;

export interface IFourthSectionState {
  state: FourthSectionState;
}
