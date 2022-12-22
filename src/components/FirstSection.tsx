import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import { IFirstSectionState } from "../store/FirstSectionState";

const FirstSection: React.FC<IFirstSectionState> = observer(
  ({ state }: IFirstSectionState): React.ReactElement => {
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      state.onChange(e.target.value);
    };

    const printHelloWord = () => {
      state.print();
    };

    const clearHandler = () => {
      state.clear();
    };

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas?.getContext("2d");
        canvas!.width = 500;
        canvas!.height = 500;
        let x = 70;
        let y = 30;
        let angle = -0.1;
        const rad = 200;
        let positionY = y + rad * Math.sin(angle);
        let positionX = rad * Math.cos(angle);
        let angleTest = 0;
        let bool = false;
        const draw = () => {
          requestAnimationFrame(draw);
          ctx?.clearRect(0, 0, 500, 500);
          ctx?.beginPath();
          ctx?.arc(x, y, rad, 0, Math.PI * 2, false);
          ctx!.strokeStyle = "white";
          ctx?.stroke();
          ctx?.beginPath();
          if (bool) {
            angleTest = -Math.PI * 0.01;
          } else {
            angleTest = +Math.PI * 0.01;
          }
          if (positionX < 10) {
            bool = true;
          } else if (positionY < 10) {
            bool = false;
          }
          angle += angleTest;
          positionY = y + rad * Math.sin(angle);
          positionX = x + rad * Math.cos(angle);
          ctx?.arc(positionX, positionY, 10, 0, Math.PI * 2);
          ctx!.fillStyle = "#F14F4F";
          ctx?.fill();
        };
        requestAnimationFrame(draw);
      }
    }, []);

    return (
      <div className="section">
        <canvas ref={canvasRef}></canvas>
        <input value={state.text} onChange={onChangeHandler} type="text" />
        <div></div>
        <button className="btn" onClick={clearHandler}>
          Очистить
        </button>
        <button className="btn btn--secondary" onClick={printHelloWord}>
          Hello world!
        </button>
      </div>
    );
  }
);

export default FirstSection;
