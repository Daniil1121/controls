import "./App.css";
import HelloWorldControlView from "./View/HelloWorldControlView";
import AlertControlView from "./View/AlertControlView";
import AutocompleteControl from "./View/AutocompleteControlView";
import HelloWorldControlViewModel from "./ViewModel/HelloWorldControlViewModel";
import AlertControlViewModel from "./ViewModel/AlertControlViewModel";
import AutocompleteControlViewModel from "./ViewModel/AutocompleteControlViewModel";
import HighOrderViewModel from "./ViewModel/HighOrderViewModel";

const helloWorldControlViewModel: HelloWorldControlViewModel =
  new HelloWorldControlViewModel();
const alertControlViewModel: AlertControlViewModel =
  new AlertControlViewModel();
const autocompleteControlViewModel: AutocompleteControlViewModel =
  new AutocompleteControlViewModel(10);
const autocompleteControlViewModelSmall: AutocompleteControlViewModel =
  new AutocompleteControlViewModel(3);
const highOrderViewModel: HighOrderViewModel = new HighOrderViewModel(
  helloWorldControlViewModel,
  alertControlViewModel
);

function App() {
  return (
    <>
      <section>
        <HelloWorldControlView state={helloWorldControlViewModel} />
      </section>
      <section>
        <AlertControlView
          setText={highOrderViewModel.setText}
          state={alertControlViewModel}
        />
      </section>
      <section>
        <AutocompleteControl state={autocompleteControlViewModel} />
      </section>
      <section>
        <AutocompleteControl state={autocompleteControlViewModelSmall} />
      </section>
    </>
  );
}

export default App;
