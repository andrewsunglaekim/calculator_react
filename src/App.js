import React, { Component } from 'react';
import Numbers from './Numbers'

class App extends Component {
  constructor() {
    super()
    this.state = {
      evalString: '',
      answer: ''
    }
  }
  addNumber(num){
    this.setState({
      evalString: this.state.evalString + num
    }, () => console.log(this.state.evalString))
  }
  evalAnswer() {
      this.setState({
        answer: eval(this.state.evalString)
      })
  }
  render() {
    return (
      <div>
        <h1> React Calculator </h1>
        <Numbers
          onAddNumber={this.addNumber.bind(this)} />
        <div onClick={()=>this.evalAnswer()}>Submit!!!</div>
        <h1>{this.state.answer}</h1>
      </div>
    );
  }
}

export default App;
