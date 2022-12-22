import React, { useEffect, useRef } from "react";
import { ISecondSectionState } from "../store/SecondSectionState";
import { observer } from "mobx-react-lite";

const SecondSection: React.FC<ISecondSectionState> = observer(
  ({ state }: ISecondSectionState): React.ReactElement => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      state.onChange(e.target.value);
    };

    const alertAnythingHandler = () => {
      state.alertAnything();
    };

    const alertNumberHandler = () => {
      state.alertNumber();
    };

    return (
      <div className="section">
        <button onClick={alertNumberHandler} className="btn">
          Показать число
        </button>
        <input value={state.text} onChange={onChangeHandler} type="text" />
        <button className="btn btn--secondary" onClick={alertAnythingHandler}>
          Алерт!
        </button>
      </div>
    );
  }
);

export default SecondSection;
