import { Component } from 'react'
import './index.css'

class Counter extends Component {
  state = { count: 0 }
  onIncrement = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }
  handleKeyDown = e => {
    switch (e.keyCode) {
      case 37:
        this.onDecrement();
        break;
      case 38:
        this.onIncrement();
        break;
      case 39:
        this.onIncrement();
        break;
      case 40:
        this.onDecrement();
        break;
      default:
        break;
    }
  }
  render() {
    const { count } = this.state
    return (
      <div className="container">
        <div className="shadow-container">
          <h1 className="heading">Counter</h1>
          <p className="count">{count}</p>
          <div>
            <button className="button" onClick={this.onDecrement} onKeyDown={this.handleKeyDown}>
              Decrease 🔽
            </button>
            <button className="button" onClick={this.onIncrement} onKeyDown={this.handleKeyDown}>
              Increase 🔼
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
