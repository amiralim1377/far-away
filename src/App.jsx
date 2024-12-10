import Header from "./Components/Header/Header";
import InputElemet from "./Components/InputElemet/InputElemet";

function App() {
  return (
    <>
      <div className="container max-w-7xl mx-auto flex flex-col items-center justify-center py-4 px-2 ">
        <Header />
        <InputElemet />
      </div>
    </>
  );
}

export default App;
