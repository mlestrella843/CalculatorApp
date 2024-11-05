
import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
   e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = ''; 
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult(0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>  
        <button onClick={times}>multiply</button>  
        <button onClick={divide}>Divide</button> 
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button>  
      </form> 
    </div> 
  ); 
} 
 
export default App; 

// import { useState } from "react";
// import './App.css';


// function App() {
//   const [num1, setNum1] = useState(0);
//   const [total, setTotal] = useState(0);


//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setNum1(value ? parseInt(value) : 0);
//   };


//   const handleAddition = () => setTotal(total + num1);
//   const handleSubtraction = () => setTotal(total - num1);
//   const handleMultiplication = () => setTotal(total * num1);
//   const handleDivision = () => {
//     if (num1 !== 0) {
//       setTotal(total / num1);
//     } else {
//       alert("Cannot divide by 0");
//     }
//   };


//   return (
//     <div className="App">
//       <h1>Calculator App</h1>
//       <input
//         type="number"
//         value={num1 || ''}
//         onChange={handleInputChange}
//       />


//       <h3>Total: {total}</h3>


//       <button onClick={handleAddition} className="btn-primary">Add</button>
//       <button onClick={handleSubtraction} className="btn-primary">Subtract</button>
//       <button onClick={handleMultiplication} className="btn-primary">Multiply</button>
//       <button onClick={handleDivision} className="btn-primary">Divide</button>
//     </div>
//   );
// }


// export default App;
