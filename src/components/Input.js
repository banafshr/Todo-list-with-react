import React, {Component} from 'react';
import './Input.css'

export default class Input extends Component {
  render() {
    return (<input
      autocomplete="off"
      className={this.props.className}
      type="text"
      name={this.props.name}
      ref={this.props.inputRef}
      placeholder={this.props.placeholder}/>)
  }
}