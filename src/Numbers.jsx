import React, {Component} from 'react'
import Number from './Number'
const calcNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"]

class Numbers extends Component {
  render(){
    let numbers = calcNums.map((num, i) => {
      return (
        <Number
          onAddNumber={this.props.onAddNumber}
          key={i}
          num={num}/>
      )
    })
    return(
      <div>
        {numbers}
      </div>
    )
  }
}

export default Numbers;
