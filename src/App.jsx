import DataProvider from "./Component/context/DataProvider";
import Home from "./Component/Home";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
