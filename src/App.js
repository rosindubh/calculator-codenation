import react, {useState} from 'react';
import { evaluate } from 'mathjs';
import './App.css';

const App = () => {
  const buttons = ['7', '8', '9', 'c', '4', '5', '6', '*', '1', '2', '3', '/', '+', '0', '-', '=']
  const [total, setTotal] = useState(""); 

  const clickHandler = (value) => {
    if(value === "=") {
      setTotal(evaluate(total))
    } else if (value === "c") {
      setTotal("")
    } else {
      setTotal(total + value)
    }
  }

  return (
    <div>
      <h1>{total}</h1>
      {buttons.map((button, index) => {
        return(
          <div>
              <Button value={button} clickHandler={clickHandler}/>
          </div>
        )
      })}
    </div>
  );
}

const Button = ({value, clickHandler}) => {
  return(
    <div>
      <button onClick={() => clickHandler(value)}>{value}</button>
    </div>
  )
}
export default App;
