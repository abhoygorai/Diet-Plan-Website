import "./App.css";
import Router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <div>
        <Router />
      </div>

      <div className="main-div">
        <div className="left-div"></div>
        <div className="right-div"></div>
      </div>
    </div>
  );
}

export default App;
