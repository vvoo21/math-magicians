import { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="calculator-section">
        <h1 className="calculator-title">Calculator App</h1>
        <div className="calculator">
          <div className="calculator-display"> 0 </div>
          <div className="calculator-keys">
            <button type="button" className="btn btn-up ">AC</button>
            <button type="button" className="btn btn-up ">+/-</button>
            <button type="button" className="btn btn-up ">%</button>
            <button type="button" className="btn btn-orange ">÷</button>
            <button type="button" className="btn">7</button>
            <button type="button" className="btn">8</button>
            <button type="button" className="btn">9</button>
            <button type="button" className="btn btn-orange ">x</button>
            <button type="button" className="btn">4</button>
            <button type="button" className="btn">5</button>
            <button type="button" className="btn">6</button>
            <button type="button" className="btn btn-orange ">-</button>
            <button type="button" className="btn">1</button>
            <button type="button" className="btn">2</button>
            <button type="button" className="btn">3</button>
            <button type="button" className="btn btn-orange ">+</button>
            <button type="button" className="btn btn-zero">0</button>
            <button type="button" className="btn">.</button>
            <button type="button" className="btn btn-orange ">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
