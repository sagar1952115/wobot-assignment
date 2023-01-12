import "./App.css";
import Form from "./component/Form";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="" />
      <div className="rect">
        <div className="small-left">
          <div className="coloured"></div>
          <div className="not-coloured"></div>
        </div>
        <div className="big-rect"></div>
        <div className="small-right">
          <div className="not-coloured"></div>
          <div className="coloured"></div>
        </div>
      </div>
      <p className="cap">Terms of use | Privacy policy</p>
      <Form />
    </div>
  );
}

export default App;
