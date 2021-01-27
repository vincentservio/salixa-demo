import logo from "./logo.svg";
import "./App.css";
import Nav from "./NavBar/Nav";
import {Hours} from "./Information/Hours";
import {Contact} from "./Information/Contact";
import {Makeup} from "./Information/Makeup";
import {Information} from "./Information/Information";

function App() {
  return (
    <div className="App">
      <Nav />
      <Information />
    </div>
  );
}

export default App;
