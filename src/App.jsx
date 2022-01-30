import "./App.scss";
import SearchBar from "./components/SearchBar";
import Tweet from "./components/Tweet";
function App() {
  return (
    <div className="app">
      <nav className="nav">Nav</nav>
      <div className="home">
        <h3 style={{ marginBottom: "15px" }}>Home</h3>

        <Tweet />
      </div>
      <aside className="aside">
        <SearchBar
          paddingY="20px"
          paddingX="10px"
          width="300px"
          bgColor="lightgrey"
          fontSize="25px"
        />
      </aside>
    </div>
  );
}

export default App;
