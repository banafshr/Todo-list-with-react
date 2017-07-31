import React, {Component} from 'react';

export default class Button extends Component {
  render() {
    const {onClick, text} = this.props
    return (
      <button onClick={onClick}>{this.props.text}</button>
    )
  }
}