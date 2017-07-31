import React, {Component} from 'react';

export default class Todolist extends Component {
  render() {
    return (
      <span href="#" className={this.props.className} onClick={this.props.onClick}>
        {this.props.value}
      </span>
    )
  }
}