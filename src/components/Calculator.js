import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next } = obj;

  function handleClick(e) {
    const result = calculate(obj, e.target.textContent);
    setObj(result);
  }

  return (
    <section className="calculator-section">
      <h1 className="calculator-title">Calculator App</h1>
      <div className="calculator">
        <div className="calculator-display">
          <p>{next || total}</p>
        </div>
        <div className="calculator-keys">
          <button onClick={handleClick} type="button" className="btn btn-up">AC</button>
          <button onClick={handleClick} type="button" className="btn btn-up">+/-</button>
          <button onClick={handleClick} type="button" className="btn btn-up">%</button>
          <button onClick={handleClick} type="button" className="btn btn-orange ">÷</button>
          <button onClick={handleClick} type="button" className="btn">7</button>
          <button onClick={handleClick} type="button" className="btn">8</button>
          <button onClick={handleClick} type="button" className="btn">9</button>
          <button onClick={handleClick} type="button" className="btn btn-orange">x</button>
          <button onClick={handleClick} type="button" className="btn">4</button>
          <button onClick={handleClick} type="button" className="btn">5</button>
          <button onClick={handleClick} type="button" className="btn">6</button>
          <button onClick={handleClick} type="button" className="btn btn-orange">-</button>
          <button onClick={handleClick} type="button" className="btn">1</button>
          <button onClick={handleClick} type="button" className="btn">2</button>
          <button onClick={handleClick} type="button" className="btn">3</button>
          <button onClick={handleClick} type="button" className="btn btn-orange">+</button>
          <button onClick={handleClick} type="button" className="btn btn-zero">0</button>
          <button onClick={handleClick} type="button" className="btn">.</button>
          <button onClick={handleClick} type="button" className="btn btn-orange">=</button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
