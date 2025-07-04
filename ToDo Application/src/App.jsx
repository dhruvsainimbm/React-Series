import AppName from "./Components/AppName";
import FirstRow from "./Components/FirstRow";
import SecondRow from "./Components/SecondRow";
import "./app.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />

      <div className="item-container">
        <FirstRow />
        <SecondRow taskname="buy milk" date="4/10/2023" />
        <SecondRow taskname="go to collage" date="4/10/2023" />
      </div>
    </center>
  );
}

export default App;
