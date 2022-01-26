// import { Routes, Route } from "react-router-dom";
import Whoreply from "./components/Whoreply";
import { Home, Product } from "./pages";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Home />
      <Product />
      <Whoreply />
    </div>
  );
}

export default App;
