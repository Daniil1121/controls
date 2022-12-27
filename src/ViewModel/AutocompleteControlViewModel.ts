import { makeAutoObservable, action } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";
import { delay } from "../services/delay";

class AutocompleteControlViewModel {
  maxCountHints = 0;
  countryArr: CountryInfo[] = [];
  reqStr = "";
  error = "";
  countHints = 0;

  constructor(count: number) {
    makeAutoObservable(this);
    this.maxCountHints = count;
    this.countHints = count;
  }

  private async fetchCountry(str: string) {
    this.error = "";
    this.countryArr = [];
    // задержка запроса и сравнение для выхода из функции, если за время задержки изменилась искомая строка
    await delay(500);
    if (str !== this.reqStr) return;
    getCountryByName(this.reqStr)
      .then(
        action("fetchSuccess", (res: CountryInfo[]) => {
          // сверка, не изменилась ли искомая строка за время ожидания. Если изменилась - return
          if (str !== this.reqStr) return;
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

  onChangeText(str: string) {
    this.reqStr = str;
    if (!str.length) {
      this.countryArr = [];
      return;
    }
    this.fetchCountry(str);
  }

  setCountry(str: string) {
    this.reqStr = str;
    this.countryArr = [];
  }

  setCountHints(val: string) {
    this.countHints = +val;
    this.fetchCountry(this.reqStr);
  }
}

export default AutocompleteControlViewModel;

export interface IAutocompleteControlViewModel {
  state: AutocompleteControlViewModel;
}
