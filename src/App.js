// import { Routes, Route } from "react-router-dom";
import { Home, Product } from "./pages";
// import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Home />
      <Product />
      {/* <SearchBar /> */}
      <Footer />
    </div>
  );
}

export default App;
