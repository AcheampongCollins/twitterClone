// import { Routes, Route } from "react-router-dom";
import { Home, Product } from "./pages";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Home />
      <Product />
      <SearchBar />
    </div>
  );
}

export default App;
