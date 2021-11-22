import "./App.css";
import { useSelector } from "react-redux";
import FruitsPage from "./pages/Fruits";

function App() {
  const fruits = useSelector((state) => state.fruits);
  return (
    <div className="App">
      <FruitsPage fruits={fruits} />
    </div>
  );
}

export default App;
