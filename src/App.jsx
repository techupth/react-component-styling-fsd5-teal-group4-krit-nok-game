import "./App.css";
import Button from "./components/Button"
import Alert from "./components/Alert"

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primary" text="Large"/> <br />
        <Button type="secondary" text="Large"/> <br />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error" text="This is error alert box" />
        <Alert type="warning" text="This is warning alert box" />
        <Alert type="info" text="This is info alert box" />
        <Alert type="success" text="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
