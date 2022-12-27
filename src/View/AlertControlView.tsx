import React from "react";
import { IAlertControlViewModel } from "../ViewModel/AlertControlViewModel";
import { observer } from "mobx-react-lite";

const AlertControlView: React.FC<
  IAlertControlViewModel & { setText: (str: string) => void }
> = observer(
  ({
    state,
    setText,
  }: IAlertControlViewModel & {
    setText: (str: string) => void;
  }): React.ReactElement => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      state.onChangeText(e.target.value);
    };

    const alertAnythingHandler = () => {
      state.alertAnythingText();
    };

    const alertNumberHandler = () => {
      state.alertOnlyNumber();
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
        <button
          className="btn btn--secondary"
          onClick={() => setText(state.text)}
        >
          Test
        </button>
      </div>
    );
  }
);

export default AlertControlView;
