import React from "react";

class MyComponent extends React.Component {
  state = {
    count: 0,
  };

  // увеличение
  increment = () => {
    this.setState({ count: this.state.count + 5 });
  };

  // Уменьшение на 1
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Деление на 2
  divideByTwo = () => {
    this.setState({ count: this.state.count / 2 });
  };

  // Умножение на 2
  multiplyByTwo = () => {
    this.setState({ count: this.state.count * 2 });
  };

  // Сброс всех данных
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h2>Счётчик: {this.state.count}</h2>
        <button onClick={this.increment}>Увеличить</button>
        <button onClick={this.decrement}>Уменьшить на 1</button>
        <button onClick={this.divideByTwo}>Разделить на 2</button>
        <button onClick={this.multiplyByTwo}>Умножить на 2</button>
        <button onClick={this.reset}>Сброс</button>
      </div>
    );
  }
}

export default MyComponent;
