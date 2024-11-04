import { useState } from "react";
import './App.css';


function App() {
  const [num1, setNum1] = useState(0);
  const [total, setTotal] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNum1(value ? parseInt(value) : 0);
  };

  const handleAddition = () => setTotal(total + num1);
  const handleSubtraction = () => setTotal(total - num1);
  const handleMultiplication = () => setTotal(total * num1);
  const handleDivision = () => {
    if (num1 !== 0) {
      setTotal(total / num1);
    } else {
      alert("Cannot divide by 0");
    }
  };

  return (
    <div className="App">
      <h1>Calculator App</h1>
      <input
        type="number"
        value={num1 || ''}
        onChange={handleInputChange}
      />

      <h3>Total: {total}</h3>

      <button onClick={handleAddition} className="btn-primary">Add</button>
      <button onClick={handleSubtraction} className="btn-primary">Subtract</button>
      <button onClick={handleMultiplication} className="btn-primary">Multiply</button>
      <button onClick={handleDivision} className="btn-primary">Divide</button>
    </div>
  );
}

export default App;
