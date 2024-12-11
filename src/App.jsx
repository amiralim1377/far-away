import Header from "./Components/Header/Header";
import InputElemet from "./Components/InputElemet/InputElemet";
import Requirement from "./Requirement/Requirement";

function App() {
  return (
    <>
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center py-4   ">
        <Header />
        <InputElemet />
        <Requirement />
      </div>
    </>
  );
}

export default App;
