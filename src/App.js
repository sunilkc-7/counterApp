import React from "react";

class App extends React.Component{
  state = {
    count:0,
  }
  handleInc = () =>{
    this.setState({count: this.state.count+1})
  }
  handleDec = () =>{
    this.setState({count: this.state.count-1})
  }
  handleReset = () =>{
    this.setState({count: 0})

  }
  render() {
    return(
      <div>
        <h1>The counter value is : {this.state.count}</h1>
        <button onClick={this.handleInc}>Increment</button>
        <button onClick={this.handleDec}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
export default App;