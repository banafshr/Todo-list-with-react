import React, {Component} from 'react';
import './Todolist.css'

export default class Todolist extends Component {
  render() {
    const {children} = this.props
    return (
      <div href="#" className={this.props.className} onClick={this.props.onClick}>
        {this.props.value}
        {children}
      </div>
    )
  }
}