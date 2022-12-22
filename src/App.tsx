import "./App.css";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FirstSectionState from "./store/FirstSectionState";
import FourthSectionState from "./store/FourthSectionState";
import SecondSectionState from "./store/SecondSectionState";
import ThirdSectionState from "./store/ThirdSectionState";

const firstSectionState: FirstSectionState = new FirstSectionState();
const secondSectionState: SecondSectionState = new SecondSectionState();
const thirdSectionState: ThirdSectionState = new ThirdSectionState();
const fourthSectionState: FourthSectionState = new FourthSectionState();

function App() {
  return (
    <>
      <section>
        <FirstSection state={firstSectionState} />
      </section>
      <section>
        <SecondSection state={secondSectionState} />
      </section>
      <section>
        <ThirdSection state={thirdSectionState} />
      </section>
      <section>
        <ThirdSection state={fourthSectionState} />
      </section>
    </>
  );
}

export default App;
