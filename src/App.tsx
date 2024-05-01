import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Alerts from "./Pages/Alerts/Alerts";

function App() {
  return (
    <>
      <div className="flex w-full">
        <Navbar />
        <Alerts />
      </div>
    </>
  );
}

export default App;
