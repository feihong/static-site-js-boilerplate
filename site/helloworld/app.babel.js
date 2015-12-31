import React from 'react'
import ReactDOM from 'react-dom'
import {BaseComponent} from 'lib/helper'


class HelloWorld extends BaseComponent {
  constructor(props) {
    super(props)
    this.state = {show: false}
    this._bind('handleClick')
  }

  render() {
    let bigGreeting = <div style={{fontSize: '5em', color: 'goldenrod'}}>你好世界！</div>

    return <div>
      <span style={{backgroundColor: 'lightsalmon', fontWeight: 'bold'}}>Hello</span>
      &nbsp;
      <span style={{backgroundColor: 'palegreen', textDecoration: 'underline'}}>World</span>!
      <br />
      <button onClick={this.handleClick}>Click me</button>
      {this.state.show && bigGreeting}
    </div>
  }

  handleClick() {
    this.setState({show: !this.state.show})
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('example')
)
