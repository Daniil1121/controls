import { makeAutoObservable, action } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class ThirdSectionState {
  maxCountHints = 10;

  constructor() {
    makeAutoObservable(this);
  }

  countryArr: CountryInfo[] = [];
  reqStr = "";
  error = "";
  countHints = this.maxCountHints;

  private fetchCountry() {
    this.error = "";
    this.countryArr = [];
    getCountryByName(this.reqStr)
      .then(
        action("fetchSuccess", (res: CountryInfo[]) => {
          this.countryArr = res
            .slice(0, this.countHints)
            .filter((el) => el.name && el.flag && el.fullName)
            .reduce((acc: CountryInfo[], obj) => {
              if (acc.some((el: CountryInfo) => el.name === obj.name)) {
                return acc;
              } else return [...acc, obj];
            }, []);
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

export default ThirdSectionState;

export interface IThirdSectionState {
  state: ThirdSectionState;
}
