import React, {Component} from 'react'

class Number extends Component {
  sendNumberToAppState(){
    this.props.onAddNumber(this.props.num)
  }
  render() {
    return (
      <div
        onClick={() => this.sendNumberToAppState()}
        style={{
          height: "30px", 
          width: "100px", 
          background: "pink"}}
        className="number">
        {this.props.num}
      </div>
    )
  }
}

export default Number
