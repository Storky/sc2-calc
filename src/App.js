import logo from './logo.svg';
import './App.css';
import Test from "./Components/test";
import Kek from "./Components/kek";
import Calc from "./Components/Calc";
import {Counter} from "Components/Counter";





function App() {
  return (
    <div className="App">
        <h4>app todo</h4>

        <Counter/>

        <ul>
            <li>add store</li>
        </ul>



      <Calc/>

    </div>
  );
}

export default App;
