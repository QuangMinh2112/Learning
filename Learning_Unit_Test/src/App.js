import "./App.css";
import Login from "./components/login/Login";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter initalCount={0} />
      {/* <Login /> */}
    </div>
  );
}

export default App;
