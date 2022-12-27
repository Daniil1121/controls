import React from "react";
import { IAutocompleteControlViewModel } from "../ViewModel/AutocompleteControlViewModel";
import { observer } from "mobx-react-lite";

const AutocompleteControl: React.FC<IAutocompleteControlViewModel> = observer(
  ({ state }: IAutocompleteControlViewModel): React.ReactElement => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      state.onChangeText(e.target.value);
    };

    const changeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      state.setCountHints(e.target.value);
    };

    const onClickHandler = (str: string) => {
      state.setCountry(str);
    };

    return (
      <div className="section">
        <div className="autocomplete__container">
          <input value={state.reqStr} onChange={onChangeHandler} type="text" />
          {state.error && <span className="error">{state.error}</span>}
          <select
            defaultValue={state.maxCountHints}
            onChange={changeSelectHandler}
            className="select"
            name=""
            id=""
          >
            {new Array(state.maxCountHints).fill(0).map((el, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          {state.countryArr.map((el: any) => (
            <div
              key={el.fullName}
              onClick={() => {
                onClickHandler(el.name);
              }}
              className="autocomplete__item"
            >
              <div className="autocomplete__item--names">
                <span className="name">{el.name}</span>
                <span className="fullName">{el.fullName}</span>
              </div>
              <div className="autocomplete__item--flag">
                <img src={el.flag} alt={`флаг ${el.name}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default AutocompleteControl;
