import React, {Component} from 'react';
import './Todolist.css'

export default class Todolist extends Component {
  render() {
    const {children} = this.props
    return (
      <div className={this.props.className}>
        {this.props.value}
        {children}
      </div>
    )
  }
}