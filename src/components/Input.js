import React, {Component} from 'react';

export default class Input extends Component {
  render() {
    return (<input
      type="text"
      name={this.props.name}
      ref={this.props.inputRef}
      placeholder={this.props.placeholder}/>)
  }
}