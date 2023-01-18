import SimulationForm from "./components/Form";
import TransactionProvider from "./contexts";
import Global from "./styles/global";

const App = () => {
  return (
    <TransactionProvider>
      <Global />
      <SimulationForm />
    </TransactionProvider>
  );
};

export default App;
